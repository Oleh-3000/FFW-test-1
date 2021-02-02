"use strict";
// 1
let navItems = document.querySelectorAll('.nav-item');
let tabContentItems = document.querySelectorAll('.tab-content__item')
	
navItems.forEach( el => {
	el.addEventListener('click', () => {
		for ( let i = 0; i < navItems.length; i++) {
			navItems[i].classList.remove('active');
		}
		el.classList.add('active');
		
		setTabContentToActive(tabContentItems, el.dataset.target);
	});
});


function setTabContentToActive(arr, id) {
	arr.forEach( el => {
		if  (el.id === id) {
			el.classList.add('active');
		} else {
			el.classList.remove('active');
		}
	});
} 

// 2

function parseUlt(url) {
	let strObj = {};
	let preffixUrl = ["http://","https://","http://www.","https://www."];
	let suffixHostName = ['.ua', '.ru', '.com'];
	
	preffixUrl.forEach(el => {
		if (url.includes(el)) {
			let tempUrl;
			tempUrl = url.replace(el, '');
			suffixHostName.forEach(el2 => {
				if (tempUrl.includes(el2)) {
					let tempArr = [];
					tempArr = tempUrl.split(el2);
					strObj.hostname = tempArr[0] + el2;
					strObj.hash = tempArr[1].split('#')[1] ? '#' + tempArr[1].split('#')[1] : '';
					if (tempUrl.includes('?')) {
						strObj.pathname = tempArr[1].split('#')[0].split('?')[0] ? tempArr[1].split('#')[0].split('?')[0] : '';
					} else {
						strObj.pathname = tempArr[1].split('')[0] ? tempArr[1].split('#')[0] : '';
					}
				}
			});
		}
	});
	
	return strObj;
}
let testUrl = parseUlt('http://ffwagency.com/about-ffw/your-digital-solutions-partner?a=1#test');
console.log(testUrl)
