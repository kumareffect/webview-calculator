// CACULATOR
function myFunction(event) {
  if (
    event.key == "0" ||
    event.key == "1" ||
    event.key == "2" ||
    event.key == "3" ||
    event.key == "4" ||
    event.key == "5" ||
    event.key == "6" ||
    event.key == "7" ||
    event.key == "8" ||
    event.key == "9" ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "*" ||
    event.key == "/" ||
    event.key == "%" ||
    event.key == "."
  ) {
    document.querySelector("input").value += event.key;
  } else if (event.key == "Backspace" || event.key == "Delete") {
    back();
  } 

}

function solve() {
  let x = document.querySelector("input").value;

  
  let y = eval(x);
  if(y === 124) {
    window.location.href='percent.html';
  }
  
  if (y === undefined) {
    y = "Invalid Expression";
  }
  document.querySelector("input").value = y;
}


function clr() {
  document.querySelector("input").value = "";

}

function back() {
  let x = document.querySelector("input").value;
  let y = x.slice(0, -1);
  document.querySelector("input").value = y;
}

function dis(val) {
  document.querySelector("input").value += val;
}

// PERCENTAGE
const result = document.querySelector('.result');
const btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{
  const perFormula = (Number(document.querySelector('.num1').value) / Number(document.querySelector('.num2').value)) * 100;
  result.innerHTML=`${perFormula}`;
});


// Bonus & Discount
const result2 = document.querySelector('.result2');
const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', ()=>{
  const bonFormula = Number(document.querySelector('.num3').value) * (Number(document.querySelector('.num4').value) / 100);
  result2.innerHTML=`${bonFormula}`;
});


