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
