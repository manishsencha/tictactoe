const zero_zero = document.querySelector(".zero_zero");
const zero_one = document.querySelector(".zero_one");
const zero_two = document.querySelector(".zero_two");
const one_zero = document.querySelector(".one_zero");
const one_one = document.querySelector(".one_one");
const one_two = document.querySelector(".one_two");
const two_zero = document.querySelector(".two_zero");
const two_one = document.querySelector(".two_one");
const two_two = document.querySelector(".two_two");

const all_boxes = document.querySelectorAll(".box");

const win = document.querySelector(".winner");

let current_sign = "O",
  winner = "";

all_boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (!(box.innerText === "O" || box.innerText === "X")) {
      box.innerText = current_sign;
      check_win();
      check_draw();
      if (current_sign === "O") current_sign = "X";
      else current_sign = "O";
    }
  });
});

function vertical_check() {
  if (
    zero_zero.innerText === one_zero.innerText &&
    one_zero.innerText === two_zero.innerText &&
    !(
      zero_zero.innerText === "" ||
      one_zero.innerText === "" ||
      two_zero.innerText === ""
    )
  ) {
    zero_zero.classList.add("won");
    one_zero.classList.add("won");
    two_zero.classList.add("won");
    winner = zero_zero.innerText;
    return true;
  }
  if (
    zero_one.innerText === one_one.innerText &&
    one_one.innerText === two_one.innerText &&
    !(
      zero_one.innerText === "" ||
      one_one.innerText === "" ||
      two_one.innerText === ""
    )
  ) {
    zero_one.classList.add("won");
    one_one.classList.add("won");
    two_one.classList.add("won");

    winner = one_zero.innerText;
    return true;
  }
  if (
    zero_two.innerText === one_two.innerText &&
    one_two.innerText === two_two.innerText &&
    !(
      zero_two.innerText === "" ||
      one_two.innerText === "" ||
      two_two.innerText === ""
    )
  ) {
    zero_two.classList.add("won");
    one_two.classList.add("won");
    two_two.classList.add("won");

    winner = two_zero.innerText;
    return true;
  }
  return false;
}
function horizontal_check() {
  if (
    zero_zero.innerText === zero_one.innerText &&
    zero_one.innerText === zero_two.innerText &&
    !(
      zero_zero.innerText === "" ||
      zero_one.innerText === "" ||
      zero_two.innerText === ""
    )
  ) {
    zero_zero.classList.add("won");
    zero_one.classList.add("won");
    zero_two.classList.add("won");
    winner = zero_zero.innerText;
    return true;
  }
  if (
    one_zero.innerText === one_one.innerText &&
    one_one.innerText === one_two.innerText &&
    !(
      one_zero.innerText === "" ||
      one_one.innerText === "" ||
      one_two.innerText === ""
    )
  ) {
    one_zero.classList.add("won");
    one_one.classList.add("won");
    one_two.classList.add("won");
    winner = one_zero.innerText;
    return true;
  }
  if (
    two_zero.innerText === two_one.innerText &&
    two_one.innerText === two_two.innerText &&
    !(
      two_zero.innerText === "" ||
      two_one.innerText === "" ||
      two_two.innerText === ""
    )
  ) {
    two_zero.classList.add("won");
    two_one.classList.add("won");
    two_two.classList.add("won");
    winner = two_zero.innerText;
    return true;
  }

  return false;
}
function diagonal_check() {
  if (
    zero_zero.innerText === one_one.innerText &&
    one_one.innerText === two_two.innerText &&
    !(
      zero_zero.innerText === "" ||
      one_one.innerText === "" ||
      two_two.innerText === ""
    )
  ) {
    zero_zero.classList.add("won");
    one_one.classList.add("won");
    two_two.classList.add("won");
    winner = zero_zero.innerText;
    return true;
  }
  if (
    zero_two.innerText === one_one.innerText &&
    one_one.innerText === two_zero.innerText &&
    !(
      zero_two.innerText === "" ||
      one_one.innerText === "" ||
      two_zero.innerText === ""
    )
  ) {
    zero_two.classList.add("won");
    one_one.classList.add("won");
    two_zero.classList.add("won");
    winner = two_zero.innerText;
    return true;
  }
  return false;
}
function check_win() {
  if (horizontal_check() || vertical_check() || diagonal_check()) {
    if (winner === "O") win.innerText = "Player-I Won!!";
    else win.innerText = "Player-II Won!!";
  }
}
function all_boxes_filled(){

}
function check_draw() {
 
}
function reset() {
  win.innerText = "";
  all_boxes.forEach((box) => {
    box.classList.remove("won");
    box.innerText = "";
    current_sign = "O";
  });
}
