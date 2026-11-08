import { AudioBrowserProxyImpl, BrowserProxy, ContentBrowserProxyImpl, ContentController, LineFocusController, MetricsBrowserProxyImpl, NodeStore, playFromSelectionTimeout, ReadAloudHighlighter, ReadAloudNode, ReadAloudNodeStore, ReadAnythingLogger, SelectionController, setInstance, SpeechBrowserProxyImpl, SpeechController, TextSegmenter, ToolbarEvent, VisualBrowserProxyImpl, VoiceLanguageController, VoiceNotificationManager, WordBoundaries } from 'chrome-untrusted://read-anything-side-panel.top-chrome/read_anything.js';
import { MockTimer } from 'chrome-untrusted://webui-test/mock_timer.js';
import { microtasksFinished } from 'chrome-untrusted://webui-test/test_util.js';
import { TestAudioBrowserProxy } from './test_audio_browser_proxy.js';
import { TestColorUpdaterBrowserProxy } from './test_color_updater_browser_proxy.js';
import { TestContentBrowserProxy } from './test_content_browser_proxy.js';
import { TestMetricsBrowserProxy } from './test_metrics_browser_proxy.js';
import { TestReadAloudModelBrowserProxy } from './test_read_aloud_browser_proxy.js';
import { TestSpeechBrowserProxy } from './test_speech_browser_proxy.js';
import { TestVisualBrowserProxy } from './test_visual_browser_proxy.js';
// Initializes all singletons, mocks, and controllers in their strict
// dependency order without creating an AppElement.
export function setupTestEnvironment(flags) {
    // Clearing the DOM must always be done first.
    document.body.innerHTML = window.trustedTypes.emptyHTML;
    window.scrollTo(0, 0);
    // Browser Proxies: no dependencies.
    const browserProxy = new TestColorUpdaterBrowserProxy();
    BrowserProxy.setInstance(browserProxy);
    const visualBrowserProxy = new TestVisualBrowserProxy();
    if (flags?.readAnythingImprovedUiEnabled !== undefined) {
        visualBrowserProxy.readAnythingImprovedUiEnabled =
            flags.readAnythingImprovedUiEnabled;
    }
    if (flags?.lineFocusEnabled !== undefined) {
        visualBrowserProxy.lineFocusEnabled = flags.lineFocusEnabled;
    }
    VisualBrowserProxyImpl.setInstance(visualBrowserProxy);
    const contentBrowserProxy = new TestContentBrowserProxy();
    ContentBrowserProxyImpl.setInstance(contentBrowserProxy);
    const audioBrowserProxy = new TestAudioBrowserProxy();
    AudioBrowserProxyImpl.setInstance(audioBrowserProxy);
    const speech = new TestSpeechBrowserProxy();
    SpeechBrowserProxyImpl.setInstance(speech);
    // These depend on browser proxies only.
    const metrics = mockMetrics();
    const logger = ReadAnythingLogger.getInstance();
    const readAloudModel = new TestReadAloudModelBrowserProxy();
    setInstance(readAloudModel);
    const nodeStore = new NodeStore();
    NodeStore.setInstance(nodeStore);
    const readAloudNodeStore = new ReadAloudNodeStore();
    ReadAloudNodeStore.setInstance(readAloudNodeStore);
    const notificationManager = new VoiceNotificationManager();
    VoiceNotificationManager.setInstance(notificationManager);
    const wordBoundaries = new WordBoundaries();
    WordBoundaries.setInstance(wordBoundaries);
    const textSegmenter = new TextSegmenter();
    TextSegmenter.setInstance(textSegmenter);
    // Controllers that only depend on the above 2 section.
    const selectionController = new SelectionController();
    SelectionController.setInstance(selectionController);
    const voiceLanguageController = new VoiceLanguageController();
    VoiceLanguageController.setInstance(voiceLanguageController);
    // Depends on VoiceLanguageController.
    const highlighter = new ReadAloudHighlighter();
    ReadAloudHighlighter.setInstance(highlighter);
    // Depends on ReadAloudHighlighter.
    const speechController = new SpeechController();
    SpeechController.setInstance(speechController);
    // Controllers that depend on SpeechController.
    const lineFocusController = new LineFocusController();
    LineFocusController.setInstance(lineFocusController);
    const contentController = new ContentController();
    ContentController.setInstance(contentController);
    return {
        audioBrowserProxy,
        browserProxy,
        contentBrowserProxy,
        contentController,
        highlighter,
        lineFocusController,
        logger,
        metrics,
        nodeStore,
        notificationManager,
        readAloudModel,
        readAloudNodeStore,
        selectionController,
        speech,
        speechController,
        textSegmenter,
        visualBrowserProxy,
        voiceLanguageController,
        wordBoundaries,
    };
}
// Initializes all singletons, mocks, and controllers in their strict
// dependency order and creates the AppElement for tests that require
// the full Read Anything app environment.
export async function setupAppTestEnvironment(flags) {
    const result = setupTestEnvironment(flags);
    const app = await createApp();
    return {
        app,
        ...result,
    };
}
export async function createApp() {
    const app = document.createElement('read-anything-app');
    document.body.appendChild(app);
    await microtasksFinished();
    return app;
}
export function mockMetrics() {
    const metrics = new TestMetricsBrowserProxy();
    MetricsBrowserProxyImpl.setInstance(metrics);
    ReadAnythingLogger.setInstance(new ReadAnythingLogger());
    return metrics;
}
export function emitEvent(app, name, options) {
    app.$.toolbar.dispatchEvent(new CustomEvent(name, options));
}
// Runs the requestAnimationFrame callback immediately
export function stubAnimationFrame() {
    window.requestAnimationFrame = (callback) => {
        callback(0);
        return 0;
    };
}
export function playFromSelectionWithMockTimer(app) {
    const mockTimer = new MockTimer();
    mockTimer.install();
    emitEvent(app, ToolbarEvent.PLAY_PAUSE);
    mockTimer.tick(playFromSelectionTimeout);
    mockTimer.uninstall();
}
// Returns the list of items in the given dropdown menu
export function getItemsInMenu(lazyMenu) {
    // We need to call menu.get here to ensure the menu has rendered before we
    // query the dropdown item elements.
    const menu = lazyMenu.get();
    return Array.from(menu.querySelectorAll('.dropdown-item'));
}
export function createSpeechErrorEvent(utterance, errorCode) {
    return new SpeechSynthesisErrorEvent('type', { utterance: utterance, error: errorCode });
}
export function createWordBoundaryEvent(utterance, charIndex, charLength) {
    return new SpeechSynthesisEvent('type', { name: 'word', utterance, charIndex, charLength });
}
export function setupBasicSpeech(speech) {
    VoiceLanguageController.getInstance().enableLang('en');
    createAndSetVoices(speech, [{ lang: 'en', name: 'Google Basic', default: true }]);
}
// Creates SpeechSynthesisVoices and sets them on the given
// TestSpeechBrowserProxy.
export function createAndSetVoices(speech, overrides) {
    const voices = [];
    overrides.forEach(partialVoice => {
        voices.push(createSpeechSynthesisVoice(partialVoice));
    });
    setVoices(speech, voices);
}
export function setVoices(speech, voices) {
    speech.setVoices(voices);
    VoiceLanguageController.getInstance().onVoicesChanged();
}
export function createSpeechSynthesisVoice(overrides) {
    return Object.assign({
        default: false,
        name: '',
        lang: 'en-us',
        localService: false,
        voiceURI: '',
    }, overrides || {});
}
export function setContent(text, model) {
    const id = 2;
    const node = document.createTextNode(text);
    NodeStore.getInstance().setDomNode(node, id);
    const segments = [{ node: ReadAloudNode.create(node), start: 0, length: text.length }];
    if (model) {
        model.setCurrentTextSegments(segments);
        model.setCurrentTextContent(text);
    }
    return node;
}
export function setWindowSize(height, width) {
    if (Object.getOwnPropertyDescriptor(window, 'innerHeight')?.configurable !==
        false) {
        Object.defineProperty(window, 'innerHeight', {
            value: height,
            configurable: true,
        });
    }
    if (Object.getOwnPropertyDescriptor(window, 'innerWidth')?.configurable !==
        false) {
        Object.defineProperty(window, 'innerWidth', {
            value: width,
            configurable: true,
        });
    }
}
