const pickSize = document.forms['sizePicker'];
const pickColor = document.querySelector('#colorPicker');
var pixelCanvas = document.getElementById("pixelCanvas");
var currentRow = 0;
var currentCell = 0;
var canvasColor;

// Adding an event listener to the submit button
pickSize.addEventListener('submit', function (e) {
  e.preventDefault();
  // Select size input
  const inputHeight = pickSize.querySelector('input[id="inputHeight"]').value;
  const inputWidth = pickSize.querySelector('input[id="inputWidth"]').value;
  
  // When size is submitted by the user, call makeGrid()
  makeGrid(inputHeight, inputWidth);
});

// Adding an event listener to the color picker
pickColor.addEventListener('input', function (e) {
  // Select color input
  canvasColor = pickColor.value;
})

function makeGrid(inputHeight, inputWidth) {
  pixelCanvas.innerHTML = "";
  for (let row = 0; row < inputHeight; row++) {
    
    var currentRow = pixelCanvas.insertRow(row);
    for (let cell = 0; cell < inputWidth; cell++) {
      
      var currentCell = currentRow.insertCell(cell);
      currentCell.addEventListener('click', function () {
        this.style.backgroundColor = canvasColor;
      })
    }
  }
}

