/**
 * @fileoverview Static mapping from a TTS engine's `SpeechSynthesisVoice.name`
 * to a human-friendly nature name and description.
 *
 * This table is DISPLAY-ONLY. `SpeechSynthesisVoice.name` remains the real
 * identity (preferences, filtering, default-voice selection, UMA bucketing,
 * radio button values, test ids).
 *
 * This file is the source of truth for these strings and is maintained by
 * hand. Edit entries here.
 *
 * Keys are matched exactly. A key without a 'Google' identifier is a ChromeOS
 * voice: getVoiceTitle() collapses such voices to a generic system label on
 * other platforms, so those mappings only ever apply on ChromeOS.
 *
 * Nature names and descriptions are intentionally hardcoded instead of
 * localized to make sure that the strings are displayed in the same language as
 * the voice language rather than the Chrome language (i.e., Portuguese voices
 * always show in Portuguese).
 *
 * TODO(crbug.com/565099954): add lookup-miss observability so that key drift is
 * detectable to readjust key values.
 */
/**
 * Display strings for one voice.
 *
 * NOTE ON NAMING: "nature" here is unrelated to the "(Natural)" voice-quality
 * tier from methods like hasNaturalIdentifier() and getNaturalVoiceOrDefault().
 * "(Natural)" describes voice quality in SpeechSynthesisVoice.name, whereas a
 * "nature" name is a display label ('Pebble', 'Forår').
 */
export interface VoiceNatureNaming {
    natureName: string;
    description: string;
}
/**
 * Grouped by locale so that related voices read together. This grouping also
 * helps with a couple tests.
 *
 * DO NOT EDIT this directly unless matching updates are approved in
 * go/reading-mode-nature-names or equivalent doc. Changes require explicit
 * approval from owners.
*/
export declare const VOICE_NATURE_NAMING_BY_LOCALE: Readonly<Record<string, Readonly<Record<string, VoiceNatureNaming>>>>;
export declare function getVoiceNatureNaming(engineVoiceName: string): VoiceNatureNaming | null;
