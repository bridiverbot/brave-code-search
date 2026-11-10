import {css, CSSResultGroup} from '//resources/lit/v3_0/lit.rollup.js';
import {getCss as getCrIconsLit} from '//resources/cr_elements/cr_icons_lit.css.js';

let instance: CSSResultGroup|null = null;
export function getCss(): CSSResultGroup {
  return instance || (instance = [...[getCrIconsLit()], css`#lightMode{--cr-icon-image:url(chrome://resources/cr_components/customize_color_scheme_mode/light_mode_old.svg)}#darkMode{--cr-icon-image:url(chrome://resources/cr_components/customize_color_scheme_mode/dark_mode_old.svg)}#systemMode{--cr-icon-image:url(chrome://resources/cr_components/customize_color_scheme_mode/system_mode_old.svg)}:host-context([webui-rounded-icons]) #lightMode{--cr-icon-image:url(chrome://resources/cr_components/customize_color_scheme_mode/light_mode.svg)}:host-context([webui-rounded-icons]) #darkMode{--cr-icon-image:url(chrome://resources/cr_components/customize_color_scheme_mode/dark_mode.svg)}:host-context([webui-rounded-icons]) #systemMode{--cr-icon-image:url(chrome://resources/cr_components/customize_color_scheme_mode/system_mode.svg)}`]);
}