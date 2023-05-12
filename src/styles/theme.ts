const animations = {};

const colors = {
  main: "#ffffc9",
  white: "#efefef",
  black: "#333",
  success: "#75F94C",
  error: "#EB3223",
  halfTranslucent: "rgba(0, 0, 0, 0.5)",
  translucent: "rgba(0, 0, 0, 0.25)",
};

const fontSizes = {
  title: "32px",
  subTitle: "24px",
  text: "16px",
  subText: "14px",
  description: "8px",
};

const commons = {
  boxShadow: `filter: drop-shadow(0 0 8px #000);`,
  ellipsis: "text-overflow: ellipsis; white-space: nowrap; overflow: hidden;",
};

const theme = {
  animations,
  colors,
  fontSizes,
  commons,
};

export default theme;
