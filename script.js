
$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 30){
      $("body").addClass("sticky-header");
    }else{
      $("body").removeClass("sticky-header");
    }
  });
});
$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});
FAQimg1.addEventListener('click', function(){
    FAQimg1.classList.toggle("activeFAQ")
    if (FAQimg1.classList.contains('activeFAQ')){
        FAQimg1.style.transform = 'rotate('+ 45 + 'deg)';   
        FAQli1.style.height = 120+'px'
    }else{
        FAQimg1.style.transform = 'rotate('+ 0 + 'deg)';   
        FAQli1.style.height = 40+'px'
    }

})
FAQimg2.addEventListener('click', function(){
    FAQimg2.classList.toggle("activeFAQ")
    if (FAQimg2.classList.contains('activeFAQ')){
        FAQimg2.style.transform = 'rotate('+ 45 + 'deg)';   
        FAQli2.style.height = 120+'px'
    }else{
        FAQimg2.style.transform = 'rotate('+ 0 + 'deg)';   
        FAQli2.style.height = 40+'px'
    }

})
FAQimg3.addEventListener('click', function(){
    FAQimg3.classList.toggle("activeFAQ")
    if (FAQimg3.classList.contains('activeFAQ')){
        FAQimg3.style.transform = 'rotate('+ 45 + 'deg)';   
        FAQli3.style.height = 120+'px'
    }else{
        FAQimg3.style.transform = 'rotate('+ 0 + 'deg)';   
        FAQli3.style.height = 40+'px'
    }

})
FAQimg4.addEventListener('click', function(){
    FAQimg4.classList.toggle("activeFAQ")
    if (FAQimg4.classList.contains('activeFAQ')){
        FAQimg4.style.transform = 'rotate('+ 45 + 'deg)';   
        FAQli4.style.height = 120+'px'
    }else{
        FAQimg4.style.transform = 'rotate('+ 0 + 'deg)';   
        FAQli4.style.height = 40+'px'
    }

})
var curpage = 1;
var sliding = false;
var click = true;
var left = document.getElementById("left");
var right = document.getElementById("right");
var pagePrefix = "slide";
var pageShift = 500;
var transitionPrefix = "circle";
var svg = true;

function leftSlide() {
	if (click) {
		if (curpage == 1) curpage = 5;
		console.log("woek");
		sliding = true;
		curpage--;
		svg = true;
		click = false;
		for (k = 1; k <= 4; k++) {
			var a1 = document.getElementById(pagePrefix + k);
			a1.className += " tran";
		}
		setTimeout(() => {
			move();
		}, 200);
		setTimeout(() => {
			for (k = 1; k <= 4; k++) {
				var a1 = document.getElementById(pagePrefix + k);
				a1.classList.remove("tran");
			}
		}, 1400);
	}
}

function rightSlide() {
	if (click) {
		if (curpage == 4) curpage = 0;
		sliding = true;
		curpage++;
		svg = false;
		click = false;
		for (k = 1; k <= 4; k++) {
			var a1 = document.getElementById(pagePrefix + k);
			a1.className += " tran";
		}
		setTimeout(() => {
			move();
		}, 200);
		setTimeout(() => {
			for (k = 1; k <= 4; k++) {
				var a1 = document.getElementById(pagePrefix + k);
				a1.classList.remove("tran");
			}
		}, 1400);
	}
}

function move() {
	if (sliding) {
		sliding = false;
		if (svg) {
			for (j = 1; j <= 9; j++) {
				var c = document.getElementById(transitionPrefix + j);
				c.classList.remove("steap");
				c.setAttribute("class", transitionPrefix + j + " streak");
				console.log("streak");
			}
		} else {
			for (j = 10; j <= 18; j++) {
				var c = document.getElementById(transitionPrefix + j);
				c.classList.remove("steap");
				c.setAttribute("class", transitionPrefix + j + " streak");
			}
		}
		setTimeout(() => {
			for (i = 1; i <= 4; i++) {
				if (i == curpage) {
					var a = document.getElementById(pagePrefix + i);
					a.className += " up1";
				} else {
					var b = document.getElementById(pagePrefix + i);
					b.classList.remove("up1");
				}
			}
			sliding = true;
		}, 600);
		setTimeout(() => {
			click = true;
		}, 1700);

		setTimeout(() => {
			if (svg) {
				for (j = 1; j <= 9; j++) {
					var c = document.getElementById(transitionPrefix + j);
					c.classList.remove("streak");
					c.setAttribute("class", transitionPrefix + j + " steap");
				}
			} else {
				for (j = 10; j <= 18; j++) {
					var c = document.getElementById(transitionPrefix + j);
					c.classList.remove("streak");
					c.setAttribute("class", transitionPrefix + j + " steap");
				}
				sliding = true;
			}
		}, 850);
		setTimeout(() => {
			click = true;
		}, 1700);
	}
}

left.onmousedown = () => {
	leftSlide();
};

right.onmousedown = () => {
	rightSlide();
};

document.onkeydown = e => {
	if (e.keyCode == 37) {
		leftSlide();
	} else if (e.keyCode == 39) {
		rightSlide();
	}
};
 setInterval(function() {
  rightSlide();
}, 5000);
var firstone = document.getElementById('drygoe_11');
var firsttwo = document.getElementById('drygoe_12');
var firstthree = document.getElementById('drygoe_13');
var secondone = document.getElementById('drygoe_21');
var secondtwo = document.getElementById('drygoe_22');
var secondthree = document.getElementById('drygoe_23');
var threeone = document.getElementById('drygoe_31');
var threetwo = document.getElementById('drygoe_32');
var threethree = document.getElementById('drygoe_33');
firstone.onclick = function(){
	document.getElementById("texturepack").classList.add("glav_slide")
	document.getElementById("map").classList.remove("glav_slide")
	document.getElementById("emote").classList.remove("glav_slide")
}
firsttwo.onclick = function(){
	document.getElementById("texturepack").classList.remove("glav_slide")
	document.getElementById("map").classList.add("glav_slide")
	document.getElementById("emote").classList.remove("glav_slide")
}
firstthree.onclick= function(){
	document.getElementById("texturepack").classList.remove("glav_slide")
	document.getElementById("map").classList.remove("glav_slide")
	document.getElementById("emote").classList.add("glav_slide")
}
secondone.onclick = function(){
	document.getElementById("texturepack").classList.add("glav_slide")
	document.getElementById("map").classList.remove("glav_slide")
	document.getElementById("emote").classList.remove("glav_slide")
}
secondtwo.onclick = function(){
	document.getElementById("texturepack").classList.remove("glav_slide")
	document.getElementById("map").classList.add("glav_slide")
	document.getElementById("emote").classList.remove("glav_slide")
}
secondthree.onclick= function(){
	document.getElementById("texturepack").classList.remove("glav_slide")
	document.getElementById("map").classList.remove("glav_slide")
	document.getElementById("emote").classList.add("glav_slide")
}
threeone.onclick = function(){
	document.getElementById("texturepack").classList.add("glav_slide")
	document.getElementById("map").classList.remove("glav_slide")
	document.getElementById("emote").classList.remove("glav_slide")
}
threetwo.onclick = function(){
	document.getElementById("texturepack").classList.remove("glav_slide")
	document.getElementById("map").classList.add("glav_slide")
	document.getElementById("emote").classList.remove("glav_slide")
}
threethree.onclick= function(){
	document.getElementById("texturepack").classList.remove("glav_slide")
	document.getElementById("map").classList.remove("glav_slide")
	document.getElementById("emote").classList.add("glav_slide")
}