const animations = {
  spin: `@keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }`,
  fade: `@keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }`,
};

const colors = {
  success: "#75f94c",
  error: "#eb3223",
  background1: "#F8F8F8",
  background2: "#EFEFEF",
  background3: "#E0E0E0",
  background4: "#BCBCBC",
  background5: "#828282",
  background6: "#333",
  background7: "#0F0F0F",
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
  boxShadow: `padding: 8px 16px; background-color: ${colors.background1}; box-shadow: 0 0 8px rgba(80, 80, 80, 0.1); border-radius: 10px;`,
  ellipsis: "text-overflow: ellipsis; white-space: nowrap; overflow: hidden;",
};

const theme = {
  animations,
  colors,
  fontSizes,
  commons,
};

export default theme;
