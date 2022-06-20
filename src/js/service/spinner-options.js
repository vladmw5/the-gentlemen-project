export const optsForSpinner = {
  lines: 8, // The number of lines to draw
  length: 50, // The length of each line
  width: 26, // The line thickness
  radius: 63, // The radius of the inner circle
  scale: 1.05, // Scales overall size of the spinner
  corners: 0.5, // Corner roundness (0..1)
  speed: 1.9, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-default', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: '#000000', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: 'spinner', // The CSS class to assign to the spinner
  position: 'fixed', // Element positioning
};
