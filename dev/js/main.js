"use strict";

let navItems = document.querySelectorAll('.nav-item');
let tabContentItems = document.querySelectorAll('.tab-content__item')
	
navItems.forEach( el => {
	el.addEventListener('click', () => {
		for ( let i = 0; i < navItems.length; i++) {
			navItems[i].classList.remove('active');
		}
		el.classList.add('active');
		
		setTAbContentToActive(tabContentItems, el.dataset.target);
	});
});


function setTAbContentToActive(arr, id) {
	arr.forEach( el => {
		if  (el.id === id) {
			el.classList.add('active');
		} else {
			el.classList.remove('active');
		}
	});
} 
