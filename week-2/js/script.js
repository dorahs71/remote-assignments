/*************************
Change showcase h1
*************************/

const main = document.querySelector('main');
const heading = document.getElementById('changeH1');
let message = `<h1><strong>！台灣加油！</strong></h1 >`

main.addEventListener('click', () => {
  document.querySelector("#changeH1").innerHTML = message;
  heading.style.color = "tomato";
  main.style.cursor = 'default';
});

/*************************
Show/Close Menu
*************************/
const open = document.querySelector('.mobile-open');
const close = document.querySelector('.mobile-close');
const aside = document.querySelector('.aside');

open.addEventListener('click', () => {
  aside.style.width = "250px";
});

close.addEventListener('click', () => {
  aside.style.width = "0px";
});


/*************************
Show More Button
*************************/

const showMore = document.querySelector('.btn-showMore');
const moreNews = document.querySelector('.flex-more');

showMore.addEventListener('click', () => {
  if (moreNews.style.display == "none") {
    showMore.textContent = '新聞變少吧';
    moreNews.style.display = 'flex';
  } else {
    showMore.textContent = '點我看更多';
    moreNews.style.display = "none";
  }
});


/*************************
Form
*************************/

// function sendForm() {
//   debugger;
//   document.getElementById("demo").addEventListener("click", function () {
//     swal("Thank You", "訂閱成功", "success");
//   });

// }