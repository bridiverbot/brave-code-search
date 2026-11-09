
    import plugin from '../../../../../../../../../ui/webui/resources/tools/rollup_plugin.mjs';
    import {resolve} from 'node:path';
    const in_path_abs = resolve('gen/chrome/browser/resources/contextual_tasks/extension/background').replace(/\\/g, '/');
    export default ({
      plugins: [
        plugin(in_path_abs, '', 'chrome-extension://glbjnfimcajjenihimblfaponejbkoph', ["strings.m.js", "chrome://resources/brave/leo.bundle.js", "//resources/brave/leo.bundle.js", "chrome://resources/brave/opaque_ke.bundle.js", "//resources/brave/opaque_ke.bundle.js"],
               ["chrome://resources/mojo/mojo/public/js/|gen/mojo/public/js", "//resources/mojo/mojo/public/js/|gen/mojo/public/js", "chrome://resources/mojo/|gen/ui/webui/resources/tsc/mojo", "//resources/mojo/|gen/ui/webui/resources/tsc/mojo", "chrome://contextual-tasks/|gen/chrome/browser/resources/contextual_tasks/tsc", "chrome://resources/polymer/v3_0/|../../third_party/polymer/v3_0/components-chromium/", "//resources/polymer/v3_0/|../../third_party/polymer/v3_0/components-chromium/", "chrome://resources/lit/v3_0/|gen/third_party/lit/v3_0/minified/", "//resources/lit/v3_0/|gen/third_party/lit/v3_0/minified/", "chrome://resources/brave/|gen/brave/ui/webui/resources/tsc/", "//resources/brave/|gen/brave/ui/webui/resources/tsc/", "chrome://resources/|gen/ui/webui/resources/tsc/", "//resources/|gen/ui/webui/resources/tsc/"]) ]
    });
    