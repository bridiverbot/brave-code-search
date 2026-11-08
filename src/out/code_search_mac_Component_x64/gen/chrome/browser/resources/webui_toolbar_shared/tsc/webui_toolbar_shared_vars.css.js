const sheet = new CSSStyleSheet();
sheet.replaceSync(`html{--ease-out-cubic-bezier:cubic-bezier(0.33,0.67,0.67,1)}`);
document.adoptedStyleSheets = [...document.adoptedStyleSheets, sheet];
export {};
