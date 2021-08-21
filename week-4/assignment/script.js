/********************************
Assignment 1: Callback Function
*********************************/

function delayedResult(n1, n2, delayTime, callback) {
  const result = n1 + n2 + " (" + n1 + "+" + n2 + ")";
  setTimeout(() => callback(result), delayTime);
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result);
}); // 9 (4+5) will be shown in the console after 3 seconds
delayedResult(-5, 10, 2000, function (result) {
  window.alert(result);
}); // 5 (-5+10) will be shown in an alert dialog after 2 seconds

/**************************************************
Assignment 2: Callback Function & Advanced HTML DOM
***************************************************/

function ajax(src, callback) {
  let xhr = new XMLHttpRequest();
  let data;
  xhr.open("GET", src);
  xhr.onload = function () {
    data = xhr.responseText;
    callback(data);
  };
  xhr.send();
}

function render(data) {
  const newDiv = document.createElement("div");
  const newContent = document.createTextNode(data);
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById("show");
  document.body.insertBefore(newDiv, currentDiv);
}

ajax("http://13.230.176.178:4000/api/1.0/remote-w4-data", function (response) {
  render(response);
}); // you should get product information in JSON format and render data in the page
