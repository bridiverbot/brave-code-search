const sheet = new CSSStyleSheet();
sheet.replaceSync(`html{--skills-card-gap:16px;--skills-card-height:230px;--skills-card-width:270px;--page-padding:48px}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
export {};
