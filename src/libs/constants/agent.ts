export const isMouseAvailable = window.matchMedia("(pointer:fine)").matches;
export const isMobile = window.matchMedia(
  "only screen and (max-width: 480px)"
).matches;
