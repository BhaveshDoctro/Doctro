function fontStyleAttribute(fontSize, fontColor, fontFamily) {
  let styles = {};
  styles['fontSize'] = fontSize;
  styles['color'] = fontColor;
  styles['fontFamily'] = fontFamily;
  return styles;
}

export function fontStyle(fontSize, fontColor, fontFamily = 'Cochin') {
  return fontStyleAttribute(fontSize, fontColor, fontFamily);
}
