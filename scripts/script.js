let TIMES = 2;
let COUNT = 0;
const N = 12;

let label1 = 'tab-category-all';
let label2 = 'tab-category-first-group';
let label3 = 'tab-category-second-group';
let label4 = 'tab-category-third-group';
let label5 = 'tab-category-fourth-group';


let filterEvent;

function init() {
  showMoreEvent();
  galeryFilter();
}
document.addEventListener('DOMContentLoaded', init);

function galeryFilter() {
  let ourAmaizingWorkUl = document.querySelectorAll(".galery-filter");
  console.log(ourAmaizingWorkUl);
  ourAmaizingWorkUl.forEach(elem => {
    filterEvent = elem.addEventListener('click', selectClass);

  });
}

function selectClass(filterEvent) {

  console.log(filterEvent.target.id);
  if (filterEvent.target.id == 'label1') {
    let itemsToShow = document.querySelectorAll('.' + label1);
    showItems(itemsToShow);



  } else if (filterEvent.target.id == 'label2') {
    let itemsToShow = document.querySelectorAll('.' + label2);
    showItems(itemsToShow);
    hideItems(label3);
    hideItems(label4);
    hideItems(label5);

  } else if (filterEvent.target.id == 'label3') {
    let itemsToShow = document.querySelectorAll('.' + label3);
    showItems(itemsToShow);
    hideItems(label2);
    hideItems(label4);
    hideItems(label5);

  } else if (filterEvent.target.id == 'label4') {
    let itemsToShow = document.querySelectorAll('.' + label4);
    showItems(itemsToShow);
    hideItems(label2);
    hideItems(label3);
    hideItems(label5);

  } else if (filterEvent.target.id == 'label5') {
    let itemsToShow = document.querySelectorAll('.' + label5);
    showItems(itemsToShow);
    hideItems(label2);
    hideItems(label3);
    hideItems(label4);

  }
  console.log(document.querySelectorAll('.' + label1));
  console.log(document.querySelectorAll('.' + label2));
  console.log(document.querySelectorAll('.' + label3));
  console.log(document.querySelectorAll('.' + label4));
  console.log(document.querySelectorAll('.' + label5));



}
/*/ ******************************************************    TODO ***************************************************/


function showCategory() {
  let input = document.querySelector("our-amaizing-work input-container > label");

  let galery = document.querySelector('.our-amazing-work__ul');
  for (let i = 0; i < galery.children.length; i++) {
    if (galery.children[i].classList.contains(event)) {
      showItem(galery.children[i]);
    }

  }

}
function showItems(items) {
  for (let i = 0; i < 0; i++) {
    if (items[i]) {
      items[i].hidden = false;
    }
  }
}
function hideItems(items) {
  for (let i = 0; i < 0; i++) {

    if (items[i]) {
      items[i].hidden = true;
    }
  }
}


function showMoreEvent() {
  let button = document.getElementById("our-amaizing-work__show-more");
  button.addEventListener('click', showMoreCount);

}
function getNElements(elem, button) {
  debugger
  if (TIMES > 0) {
    for (let i = N * COUNT; i < N + N * COUNT; i++) {
      // if (elem.children[i]) {
      elem.children[i].classList.remove('display-none');
      elem.children[i].classList.add('display-block');
      // elem.children[i].style.display = 'block';
    }
    TIMES--;
    if (TIMES <= 0) {
      hideElement();
    }
  }
}

function showMoreCount() {
  if (COUNT < TIMES) {
    COUNT++;
    showMore();
  } else if (COUNT == TIMES) {
    COUNT++;
    showMore();
  } else {
    COUNT = 0
  }

}
function hideElement() {
  document.querySelector('#our-amaizing-work__show-more').classList.add('display-none')
}

function showMore() {

  let galery = document.querySelector('.our-amazing-work__ul');
  console.log(galery);

  getNElements(galery);


}