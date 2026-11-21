import { iconSize } from "./iconSize.js";

export const theme = Object.freeze({
  colors: {
    font: { mainTitle: "darkblue", itemTitle: "#0000ff", button: "#ffffff" },
    bg: {
      itemTitle: "#ffff00",
      additionalImageBox: "#808080",
      button: "#008080",
      buttonHover: "#902a00",
    },
    card: {
      young: "#ffc7d1",
      older: "#f1f13c",
      old: "#abfcab",
      allAge: "#b4d7e4",
    },
    border: { list: "red", item: "grey", buttonFocus: "#d9d902" },
    icon: {
      title: "darkblue",
      imageTitle: "#0000ff",
      textField: "#9b25fc",
      feature: "#008080",
      button: "#99ffff",
      buttonHover: "#d9d902",
    },
  },
  spacing: 4, // в CSS: calc(var(--spacing) * 3) => 12px
  iconSize,
  radii: { sm: "8px", md: "12px", lg: "14px" },
  fontSizes: { text: "18px", itemTitle: "32px", mainTitle: "48px", button: "1.5rem" },
  fontWeights: { regular: 400, bold: 700 },
  fontFamily: { button: '"Franklin Gothic Medium", "Arial Narrow"' },
  shadows: {
    buttonText:
      "1px 1px 2px rgba(0, 0, 0, 0.4), 2px 2px 4px rgba(0, 0, 0, 0.2), 4px 4px 8px rgba(0, 0, 0, 0.1)",
    button:
      "inset 0 0 16px 8px rgba(0, 0, 0, 0.3), 0 8px 16px rgba(0, 0, 0, 0.9)",
  },
  sizes: { cardMinWidth: "445px", buttonWidth: "70%" },
  transition: "200ms ease-in-out",
});