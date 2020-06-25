let showMoreCount = 0;

document.addEventListener('DOMContentLoaded', init);
function init() {
	initDate();
	let showMore = document.getElementById('our-amaizing-work__show-more');
	showMore.onclick = showMoreEvent;

	let filterButtons = document.querySelectorAll('.filter-btn');
	filterButtons.forEach((element) => {
		filterEvent(element);
		showMoreCount = 0;
		showMore.hidden = false;
	});

	let allButton = document.querySelector('.filter-btn');
	allButton.onclick = clickAll;
}
function initDate() {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	let n = new Date();
	let y = n.getFullYear();
	let m = n.getMonth() + 1;
	let d = n.getDate();
	document.querySelectorAll('.breacking-news__date').forEach((element) => {
		element.innerHTML = d + '<br>' + monthNames[m];
	});
}
function filterEvent(element) {
	element.addEventListener('click', filterButtonsEvent);
}
function filterButtonsEvent() {
	let current = document.getElementsByClassName('filter-btn-active');
	current[0].className = current[0].className.replace('filter-btn-active', '');
	this.className += ' filter-btn-active';
	let showMore = document.getElementById('our-amaizing-work__show-more');
	showMore.hidden = false;
	// console.log(this);
}
function clickAll() {
	let allButton = document.querySelector('.filter-btn');
	allButton.click();

	// console.log(allButton);
	if (showMoreCount != 1) {
		let alwaysShownGroup = document.querySelectorAll('.our-amaizing-work__filter');
		let firstShowMoreGroup = document.querySelectorAll('.hiden-group-2');
		let secondShowMoreGroup = document.querySelectorAll('.hiden-group-3');
		showElements(alwaysShownGroup);
		hideElements(firstShowMoreGroup);
		hideElements(secondShowMoreGroup);
		showMoreCount = 0;
	}
}
function showMoreEvent() {
	clickAll();
	let alwaysShownGroup = document.querySelectorAll('.our-amaizing-work__filter');
	let firstShowMoreGroup = document.querySelectorAll('.hiden-group-2');
	let secondShowMoreGroup = document.querySelectorAll('.hiden-group-3');

	if (showMoreCount == 0) {
		showElements(alwaysShownGroup);
		hideElements(secondShowMoreGroup);
		// showElements(firstShowMoreGroup);
		showMoreCount++;
		// hideElements(secondShowMoreGroup);
	} else if (showMoreCount == 1) {
		showElements(secondShowMoreGroup);
		this.hidden = true;
		showMoreCount++;
	}
}
function showElements(elements) {
	// console.log(elements);

	if (elements) {
		elements.forEach((element) => {
			element.hidden = false;
		});
	} else {
		elements.hidden = false;
	}
}
function hideElements(elements) {
	elements.forEach((element) => {
		element.hidden = true;
	});
}

function filterSelection(category) {
	let filterList = document.querySelectorAll('.our-amaizing-work__filter');
	// console.log(filterList);
	if (category == 'all' && showMoreCount == 0) {
		category = '';
		let alwaysShownGroup = document.querySelectorAll('.our-amaizing-work__filter');
		let firstShowMoreGroup = document.querySelectorAll('.hiden-group-2');
		let secondShowMoreGroup = document.querySelectorAll('.hiden-group-3');
		showElements(alwaysShownGroup);
		hideElements(secondShowMoreGroup);
		hideElements(secondShowMoreGroup);
	}
	for (let i = 0; i < filterList.length; i++) {
		filterList[i].hidden = true;
		if (filterList[i].className.indexOf(category) > -1) filterList[i].hidden = false;
		// if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], 'show');
	}
}

// Show filtered elements
function w3AddClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(' ');
	arr2 = name.split(' ');
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += ' ' + arr2[i];
		}
	}
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
	let i, arr1, arr2;
	arr1 = element.className.split(' ');
	arr2 = name.split(' ');
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(' ');
}
