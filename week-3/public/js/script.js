function sendAns() {
  let xhr = new XMLHttpRequest();
  let number = document.querySelector(".number");
  let show = document.getElementById("ans");
  xhr.open("GET", "/getData?number=" + number.value, true);
  xhr.onload = function () {
    show.innerHTML = xhr.responseText;
  };
  xhr.send();
}
