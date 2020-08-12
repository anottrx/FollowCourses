const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
// MDN CanvasRenderingContext2D
// canvas는 context를 갖고 있는 HTML의 요소이며, 그 요소 안에서 픽셀을 다루려 한다
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave");

const INITIAL_COLOR = "#2c2c2c"; // 검정 비슷한 색
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

// default
ctx.fillStyle = "white"; // 시작할 때 배경색은 흰색
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

// default
let painting = false;
let filling = false;

function stopPainting() {
  painting = false;
}

function startPainting(event) {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    // 계속해서 실행
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function handleColorClick(event) {
  // 색상 바꾸기 (브러쉬와 페인트 모두)
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChange(event) {
  // 브러쉬 두께 범위 지정
  const size = event.target.value;
  ctx.lineWidth = size;
}

function handleModeClick() {
  // FILL <-> PAINT
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

function handleCanvasClick() {
  if (filling) {
    // FILL 상태일 경우
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }
}

function handleCM(event) {
  event.preventDefault(); // 저장하기 위해 우클릭 방지
}

function handleSaveClick() {
  const image = canvas.toDataURL(); // default는 png로 저장
  const link = document.createElement("a"); // 존재하지 않는 링크
  link.href = image; // 이미지 URL
  link.download = "PaintJS[🖌]"; // 이미지 이름
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove); // 마우스를 움직일 때
  canvas.addEventListener("mousedown", startPainting); // 마우스 눌렀을 때 페인팅 시작
  canvas.addEventListener("mouseup", stopPainting); // 마우스를 놓았을 때 페인팅 중지
  canvas.addEventListener("mouseleave", stopPainting); // 캔버스를 벗어났을 때 페인팅 중지
  canvas.addEventListener("click", handleCanvasClick); // 페인트칠을 위해 캔버스를 클릭했을 때
  canvas.addEventListener("contextmenu", handleCM); // 우클릭으로 그림 저장 금지
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (range) {
  range.addEventListener("input", handleRangeChange);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}
