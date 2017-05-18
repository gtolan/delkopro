function loadSlider() {
	var sliderObj = {};
	sliderObj = {
		sliderLinkOneText: "UberEats.co.uk",
		sliderLinkOne: "UberEats.co.uk",
		sliderImgOneSrc: "/images/ubereatsSlider.png",
		sliderLinkTwoText: "Jinn.co.uk",
		sliderLinkTwo: "Jinn.co.uk",
		sliderImgTwoSrc: "/images/jinn.png",
		sliderLinkThreeText: "Amazon.es",
		sliderLinkThree: "Amazon.es",
		sliderImgThreeSrc: "/images/amazonSlider3.png",
		sliderLinkFourText: "Farfetch.es",
		sliderLinkFour: "Farfetch.es",
		sliderImgFourSrc: "/images/farfetchSlider.png",
		sliderLinkFiveText: "Deliveroo.co.uk",
		sliderLinkFive: "Delivero.co.uk",
		sliderImgFiveSrc: "/images/deliverOO.png"
	};
	var sliderHeaderTOne;
	var sliderHeaderTTwo;
		sliderHeaderTOne = "Compare the best Home Delivery Services for you";
		sliderHeaderTTwo = "View all delivery promotions and offers in one place";

	var slideshowContatiner = appDC.sliderContainer;
	slideshowContatiner.innerHTML = '';
	var firstSlide = document.createElement('DIV');
	firstSlide.classList.add('mySlides', 'fade');
	slideshowContatiner.appendChild(firstSlide);
	var firstSlideNumber = document.createElement('DIV');
	firstSlideNumber.classList.add('numbertext');
	firstSlideNumber.innerHTML = "1 / 5";
	firstSlide.appendChild(firstSlideNumber);
	var firstSlideHeader = document.createElement('DIV');
	firstSlideHeader.classList.add('headerDiv');
	firstSlide.appendChild(firstSlideHeader);
	var firstSlideHeaderTextOne = document.createElement('H1');
	firstSlideHeaderTextOne.id = "HeaderTextOne";
	firstSlideHeaderTextOne.innerHTML = sliderHeaderTOne;
	firstSlideHeaderTextOne.classList.add('headerText');
	firstSlideHeader.appendChild(firstSlideHeaderTextOne);
	var firstSliderImg = document.createElement('IMG');
	firstSliderImg.src = sliderObj.sliderImgOneSrc;
	firstSliderImg.style.width = "100%";
    firstSliderImg.style.height = "300px";
	firstSlide.appendChild(firstSliderImg);
	var firstSliderLink = document.createElement('A');
	firstSliderLink.id = "slideLinkOne";
	firstSliderLink.href = "https://www.ubereats.com/london/";
	firstSliderLink.setAttribute('target', '_blank');
	firstSliderLink.classList.add('sliderText');
	firstSliderLink.innerHTML = 'UberEats';
	firstSlide.appendChild(firstSliderLink);
	var secondSlide = document.createElement('DIV');
	secondSlide.classList.add('mySlides', 'fade');
	slideshowContatiner.appendChild(secondSlide);
	var secondSlideNumber = document.createElement('DIV');
	secondSlideNumber.classList.add('numbertext');
	secondSlideNumber.innerHTML = "2 / 5";
	secondSlide.appendChild(secondSlideNumber);
	var secondSlideHeader = document.createElement('DIV');
	secondSlideHeader.classList.add('headerDiv');
	secondSlide.appendChild(secondSlideHeader);
	var secondSlideHeaderTextOne = document.createElement('H1');
	secondSlideHeaderTextOne.id = "HeaderTextTwo";
	secondSlideHeaderTextOne.classList.add('headerText');
	secondSlideHeaderTextOne.innerHTML = sliderHeaderTTwo;
	secondSlideHeader.appendChild(secondSlideHeaderTextOne);
	var secondSliderImg = document.createElement('IMG');
	secondSliderImg.src = sliderObj.sliderImgTwoSrc;
	secondSliderImg.style.width = "100%";
    secondSliderImg.style.height = "300px";
	secondSlide.appendChild(secondSliderImg);
	var secondSliderLink = document.createElement('A');
	secondSliderLink.id = "slideLinkTwo";
	secondSliderLink.href = "https://www.Jinnapp.com";;
	secondSliderLink.setAttribute('target', '_blank');
	secondSliderLink.innerHTML = 'Jinnapp.com';
	secondSliderLink.classList.add('sliderText');
	secondSlide.appendChild(secondSliderLink);
	var thirdSlide = document.createElement('DIV');
	thirdSlide.classList.add('mySlides', 'fade');
	slideshowContatiner.appendChild(thirdSlide);
	var thirdSlideNumber = document.createElement('DIV');
	thirdSlideNumber.classList.add('numbertext');
	thirdSlideNumber.innerHTML = "3 / 5";
	thirdSlide.appendChild(thirdSlideNumber);
	var thirdSliderImg = document.createElement('IMG');
	thirdSliderImg.src = sliderObj.sliderImgThreeSrc;
	thirdSliderImg.style.width = "100%";
    thirdSliderImg.style.height = "300px";
	thirdSlide.appendChild(thirdSliderImg);
	var thirdSliderLink = document.createElement('A');
	thirdSliderLink.id = "slideLinkThree";
	thirdSliderLink.href = "https://www.Amazon.co.uk";
	thirdSliderLink.setAttribute('target', '_blank');
	thirdSliderLink.innerHTML = "Amazon.co.uk";
	thirdSliderLink.classList.add('sliderText');
	thirdSlide.appendChild(thirdSliderLink);
	var fourthSlide = document.createElement('DIV');
	fourthSlide.classList.add('mySlides', 'fade');
	slideshowContatiner.appendChild(fourthSlide);
	var fourthSlideNumber = document.createElement('DIV');
	fourthSlideNumber.classList.add('numbertext');
	fourthSlideNumber.innerHTML = "4 / 5";
	fourthSlide.appendChild(fourthSlideNumber);
	var fourthSliderImg = document.createElement('IMG');
	fourthSliderImg.src = sliderObj.sliderImgFourSrc;
	fourthSliderImg.style.width = "100%";
    fourthSliderImg.style.height = "300px";
	fourthSlide.appendChild(fourthSliderImg);
	var fourthSliderLink = document.createElement('A');
	fourthSliderLink.id = "slideLinkFour";
	fourthSliderLink.href = 'https://www.Farfetch.com';
	fourthSliderLink.setAttribute('target', '_blank');
	fourthSliderLink.innerHTML = "Farfetch.com";
	fourthSliderLink.classList.add('sliderText');
	fourthSlide.appendChild(fourthSliderLink);
	var fifthSlide = document.createElement('DIV');
	fifthSlide.classList.add('mySlides', 'fade');
	slideshowContatiner.appendChild(fifthSlide);
	var fifthSlideNumber = document.createElement('DIV');
	fifthSlideNumber.classList.add('numbertext');
	fifthSlideNumber.innerHTML = "5 / 5";
	fifthSlide.appendChild(fifthSlideNumber);
	var fifthSliderImg = document.createElement('IMG');
	fifthSliderImg.src = sliderObj.sliderImgFiveSrc;
	fifthSliderImg.style.width = "100%";
    fifthSliderImg.style.height = "300px";
	fifthSlide.appendChild(fifthSliderImg);
	var fifthSliderLink = document.createElement('A');
	fifthSliderLink.id = "slideLinkFive";
	fifthSliderLink.href = "https://www.Deliveroo.com";;
	fifthSliderLink.setAttribute('target', '_blank');
	fifthSliderLink.innerHTML = 'Delivero.co.uk';
	fifthSliderLink.classList.add('sliderText');
	fifthSlide.appendChild(fifthSliderLink);
	showSlides();
    
  


}


