const theme = {
  colors: {
    orange: {
      100: "#E84545",
      200: "#903749",
      300: "#53354A",
      400: "#2F1D29",
    },
    blue: {
      100: "#34385A",
      200: "#2B2E4A",
    },
    green: {
      100: "#6EBF8B",
    },
    yellow: {
      100: "#FFE59D",
    },
  },
  font: {
    family: "'Red Hat Display', sans-serif",
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    size: {
      desktop: "24px",
      mobile: "18px",
    },
  },
  breakpoints: {
    medium: "768px",
  },
};

export default theme;
export type ThemeType = typeof theme;
