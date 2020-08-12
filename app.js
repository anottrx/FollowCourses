const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
// MDN CanvasRenderingContext2D
// canvas는 context를 갖고 있는 HTML의 요소이며, 그 요소 안에서 픽셀을 다루려 한다

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

canvas.width = 700;
canvas.height = 700;

let painting = false; // default

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    // 클릭하면 실행 중지
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    // 계속해서 실행
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseDown(event) {
  // 나중에 색상을 볼 수 있게 할 것
  painting = true; // 페인트칠 시작
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove); // 마우스를 움직일 때
  canvas.addEventListener("mousedown", startPainting); // 마우스 눌렀을 때 페인팅 시작
  canvas.addEventListener("mouseup", stopPainting); // 마우스를 놓았을 때 페인팅 중지
  canvas.addEventListener("mouseleave", stopPainting); // 캔버스를 벗어났을 때 페인팅 중지
}
