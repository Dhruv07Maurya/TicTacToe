let boxes = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let msg = document.querySelector(".msg");
let count = 9;
let winn = false;

let turnO = false;
let win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

reset.addEventListener("click", () => {
  count = 9; 
  boxes.forEach((e) => {
    e.disabled = false;
    e.innerText = "";
  });
  msg.style.display = "none";
});

const winner = () => {
  count--;
  for (let pattern of win) {
    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        console.log("winner");
        msg.style.display = "block";
        msg.innerHTML = `<h1>Winner is- ${val1}</h1>`;
        winn = true;
        boxes.forEach((e) => {
          e.disabled = true;
        });
      }
    }
  }
  if (count == 0 && !winn) {
    console.log("draw");
    msg.style.display = "block";
    msg.innerHTML = "<h1>Madtch Drawed</h1>";
  }
};

boxes.forEach((bo) => {
  bo.addEventListener("click", () => {
    if (!turnO) {
      bo.innerText = "X";
      turnO = true;
    } else {
      bo.innerText = "O";
      turnO = false;
    }
    bo.disabled = true;
    winner();
  });
});
