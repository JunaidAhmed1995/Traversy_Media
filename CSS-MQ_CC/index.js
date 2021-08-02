window.onresize = screen;
window.onload = screen;

function screen() {
  screenSize = window.innerWidth;
  document.getElementById("size").innerHTML = `Width: ${screenSize}px`;
}
