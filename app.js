const btn = document.querySelector("#v2");
btn.onclick = function () {
  console.log("YOU CLICKED ME!");
  console.log("I HOPE IT WORKS!");
};

function scream() {
  console.log("AAAAAAAAh");
  console.log("stop");
}

btn.onmouseenter = scream;

document.querySelector("h1").onclick = () => {
  alert("you clicked the h1!");
};

const btn3 = document.querySelector("#v3");
btn3.addEventListener("click", function () {
  alert("CLICKED!");
});
