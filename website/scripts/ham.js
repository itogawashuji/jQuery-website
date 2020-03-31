document.addEventListener('DOMContentLoaded',function(){

	var tag = document.getElementById('nav-toggle');
	var i = 1;
	let eul =document.getElementById('nav-list');
	tag.addEventListener('click',function(){

		this.classList.toggle('fa-times')
		eul.classList.toggle('is-show');
	
	},false);
},false);