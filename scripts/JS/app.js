// register service worker

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/swDelkoPro.js',  { scope: '/' }).then(function(reg) {
    
    if(reg.installing) {
      console.log('Service worker installing');
    } else if(reg.waiting) {
      console.log('Service worker installed');
    } else if(reg.active) {
      console.log('Service worker active');
    }
    
  }).catch(function(error) {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}




//set as spanish
localStorage.setItem("languageChoice", "English");
localStorage.setItem('hasVoted', 'false');
//Language choice listener 
//var lang = localStorage.getItem("languageChoice");


var appDC = {"mySidenav" : document.getElementById('mySidenav'),
             "mainIcon" : document.getElementById('mainIcon'),
             "tabcontent" : document.getElementsByClassName('tabcontent'),
             "category": document.getElementsByClassName('category'),
             "speed": document.getElementsByClassName('speed'),
             "categoryListItem": document.getElementsByClassName('category'),
             "currentSpeedIcon": document.getElementById('currentSpeedIcon'),
             "currentTypeIcon": document.getElementById('currentTypeIcon'),
             "resetOptButton": document.getElementById('resetOptButton'),
             "myTopnav": document.getElementById('myTopnav'),
             "RESULT": document.getElementById('RESULT'),
             "resultTab": document.getElementById('resultTab'),
             "tabContainer": document.getElementById('tabContainer'),
             "tablinks": document.getElementsByClassName('tablinks'),
             "mainPage": document.getElementById('main'),
             "info": document.getElementsByClassName('info'),
             "pageBottom": document.getElementById('pageBottom'),
             "contactPage": document.getElementById('contactPage'),
             "termsPage": document.getElementById('termsPage'),
             "choosePage": document.getElementById('choosePage'),
             "promoPage": document.getElementById('promoPage'),
             "aboutPage": document.getElementById('aboutPage'),
             "footer": document.getElementById('footer'),
             "contactLink": document.getElementById('contactLink'),
             "homeLink": document.getElementById('homeLink'),
             "aboutLink": document.getElementById('aboutLink'),
             "promoLink": document.getElementById('promoLink'),
             "termsLink": document.getElementById('termsLink'),
             "voteLink": document.getElementById('voteLink'),
             "slideSh": document.getElementsByClassName('slideshow-container'),
             "infoTitleBar": document.getElementById('infoTitleBar'),
             "catSecIconRep":  document.getElementById('catSecIconRep'),
             "drawerBtn": document.getElementById('drawerBtn'),
             "promoSectionRep": document.getElementById('promoSectionRep'),
             "serviceListSec": document.getElementById('serviceListSec'),
             "TYPE": document.getElementById('TYPE'),
             "SPEED": document.getElementById('SPEED'),
             "speedCont": document.getElementById('speedContainer'),
             "speedTab": document.getElementById('speedTab'),
             "typeTab": document.getElementById('typeTab'),
             "resultTab": document.getElementById('resultTab'),
             "resetNoneButton": document.getElementById('resetNoneButton'),
             "whoops": document.getElementById('whoops'),
             "binResetBut": document.getElementById('binResetBut'),
             "binSection": document.getElementById('binSection'),
             "tableSideTriangle": document.getElementById('tableSideTriangle'),
             "tableServiceName": document.getElementById('tableServiceName'),
             "tableServicePrice": document.getElementById('tableServicePrice'),
             "tableServiceCategory": document.getElementById('tableServiceCategory'),
             "tableServiceTime": document.getElementById('tableServiceTime'),
             "tableLetsGo": document.getElementById('tableLetsGo'),
             "aboutSpeed": document.getElementById('speedAdd'),
             "categAdd": document.getElementById('categAdd'),
             "ideaAdd": document.getElementById('ideaAdd'),
             "resultAddOne": document.getElementById('resultAddOne'),
             "resultAddTwo": document.getElementById('resultAddTwo'),
             "resultAddThree": document.getElementById('resultAddThree'),
             "mach": document.getElementById('machgrind'),
             "passLogin": document.getElementById('passLogin'),
             "emailLogin": document.getElementById('emailLogin'),
             "loginBut": document.getElementById('loginBut'),
             "messageLog": document.getElementById('messageLoggedIn'),
             "emailLoginSection": document.getElementById('emailLoginSection'),
             "loginForm": document.getElementById('loginForm'),
             "messageLoginSection": document.getElementById('messageLoginSection'),
             "logOutButton": document.getElementById('logOutButton'),
             "anonMessageBut": document.getElementById('anonMessageBut'),
             "messageAnonSection": document.getElementById('messageAnonSection'),
             "messageAnon": document.getElementById('messageAnon'),
             "anonForm": document.getElementById('anonForm'),
             "sliderContainer": document.getElementById('mainSliderContainer'),
             "slideTop": document.getElementById('slideTop"'),
             "speedInfoTextOne": document.getElementById('speedInfoTextOne'),
             "speedInfoTextTwo": document.getElementById('speedInfoTextTwo'),
             "speedInfoTextThree": document.getElementById('speedInfoTextThree'),
             "speedInfoTextFour": document.getElementById('speedInfoTextFour'),
             "footerTopBar": document.getElementById('footerTopBar'),
             "tableServiceName": document.getElementById('tableServiceName'),
             "tableServicePrice": document.getElementById('tableServicePrice'),
             "tableServiceCategory": document.getElementById('tableServiceCategory'),
             "tableServiceTime": document.getElementById('tableServiceTime'),
             "tableLetsGo": document.getElementById('tableLetsGo'),
             "binResetCompanies": document.getElementById('appDC.binResetCompanies'),
             "binCloseString": document.getElementById('binCloseString'),
             "tableHourLink": document.getElementById('tableOfferLink'),
             "tableNameLink": document.getElementById('tableNameLink'),
             "tablePriceLink": document.getElementById('tablePriceLink'),
             "tableCategoryLink": document.getElementById('tableCategoryLink'),
             "listdropSec": document.getElementById('listdropSec'),
             "binRightSec": document.getElementById('binRightSec'),
             "pageInfoAbout": document.getElementById('pageInfoAbout'),
             "aboutPageHeader": document.getElementById('aboutPageHeader'),
             "promoPageHeader": document.getElementById('promoPageHeader'),
             "contactPageHeader": document.getElementById('contactPageHeader'),
             "loginTab": document.getElementById('login'),
             "signUpTab": document.getElementById('signUp'),
             "anonTab": document.getElementById('anon'),
             "hideBin": document.getElementById('hideBin'),
             "promoButtonText": document.getElementById('promoButtonText'),
             "loginLabelPassword": document.getElementById('loginLabelPassword'),
             "signUpSubmit": document.getElementById('signUpSubmit'),
             "signUpPassword": document.getElementById('signUpPassword'),
             "newUserPwd": document.getElementById('newUserPwd'),
             "sendUserMessageButton": document.getElementById('sendUserMessageButton'),
             "signUpForm": document.getElementById('signUpForm'),
             "sendAnonMessageBut": document.getElementById('sendAnonMessageBut'),
             "buttonAnonIcon": document.getElementById('buttonAnonIcon'),
             "googleAuthBut": document.getElementById('googleAuthBut'),
             "googleSignedIn": document.getElementById('googleSignedIn'),
             "notifcationLoginSection":document.getElementById('notifcationLoginSection'),
             "toggleSubscriptions": document.getElementById('toggleSubscriptions'),
             "toggleSubscriptionsButton": document.getElementById('toggleSubscriptionsButton'),
             "promptSubscriptions": document.getElementById('promptSubscriptions'),
             "notifSwitch": document.getElementById('notifSwitch'),
             "emailLoginSectionNofications": document.getElementById('emailLoginSectionNofications'),
             "emailAuthButNotifications": document.getElementById('emailAuthButNotifications'),
             "notifLoginBut": document.getElementById('notifLoginBut'),
             "googleAuthButSignUp": document.getElementById('googleAuthButSignUp'),
             "googleAuthButLogin": document.getElementById('googleAuthButLogin'),
             "flagIcon": document.getElementById('flagIcon'),
             "contactLinkFooter": document.getElementById('contactLinkFooter'),
             "offersLinkFooter": document.getElementById('offersLinkFooter'),
             "blogSection": document.getElementById('blogSection'),
             "blogLink": document.getElementById('blogLink'),
             "messageLogsubject": document.getElementById('messageLogsubject'),
             "profilesPage": document.getElementById('profilesPage'),
             "promoIcon": document.getElementById('promoIcon'),
             "voteIcon": document.getElementById('voteIcon'),
             "notificationsIcon": document.getElementById('notificationsIcon'),
             "contactIcon": document.getElementById('contactIcon'),
             "blogIcon": document.getElementById('blogIcon'),
             "aboutIcon": document.getElementById('aboutIcon')
             
             
             
              
}
function showPageBottom(){
    appDC.pageBottom.style.display = "block";
   
}

var cityChoice = document.getElementById('locationSelect');
    cityChoice.addEventListener('change', function(){
        var city = this.value;
        console.log(city);
       if(this.value === 'Barcelona'){
           window.location.href = "https://delkopro.firebaseapp.com/";
           console.log('going to spanish page');
       } else if(this.value === 'London'){
           window.location.href = "https://delkoprouk.firebaseapp.com/";
           console.log('going to uk page');
       } else {
           console.log('ingore location');
       }
    });

//
//var x, languageValue = document.getElementById('language');
//console.log(languageValue.value);
//   languageValue.addEventListener('change', function(){
//    console.log("you clicked " + this.value);
//    var lang = this.value;
//    console.log('you set localstoage language as ' + lang);
//    localStorage.setItem("languageChoice", lang);
//    loadSlider();
//    mainPageTranslate();
//    dropDown();
//    
////    if(promopageOpen) {
//  
////    }
//    setTimeout(appDC.homeLink.click(), 4000);
//       //RELOAD  loadSlider()
//});   


var i;
for (i = 0; i < appDC.categoryListItem.length; i++) {
	var tooltipSpan = document.createElement('SPAN');
    tooltipSpan.classList.add('tooltiptext');
    appDC.categoryListItem[i].appendChild(tooltipSpan);
}
 

const messaging = firebase.messaging();

// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(function() {
  messaging.getToken()
  .then(function(refreshedToken) {
    console.log('Token refreshed.');
    // Indicate that the new Instance ID token has not yet been sent to the
    // app server.
    setTokenSentToServer(false);
    // Send Instance ID token to app server.
    sendTokenToServer(refreshedToken);
    // ...
  })
  .catch(function(err) {
    console.log('Unable to retrieve refreshed token ', err);
    showToken('Unable to retrieve refreshed token ', err);
  });
});


function toast(text) {
    
    var x = document.getElementById("snackbarSuccessLog")
    x.classList.add('show');
    x.innerHTML = text;
    setTimeout(function(){ x.className = x.className.replace("show", "");x.innerHTML = ''; }, 3000);
}


 


messaging.onMessage(function(payload) {
    console.log('onMessage', payload);
});




var slideIndex = 0;
      
function showSlides() {  
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
        var i;    
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
            for (i = 0; i < dots.length; i++) {
          dots[i].classList.remove("active");      

        }

    slideIndex++;

    if (slideIndex> slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].classList.add("active");
    setTimeout(showSlides, 8000); // Change image every 5 seconds
        }


function currentSlide(no) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
        var i;    
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].classList.remove("active");      

        }
        slideIndex = no;
        dots[no-1].classList.add("active");
        slides[no-1].style.display = "block";
    }
var slideN = 1;
function plusSlides(slideN) {
      var newslideIndex = slideIndex + slideN;

      if(newslideIndex < 5 ){
         currentSlide(newslideIndex);



      }
          else if (newslideIndex > 5){
              currentSlide(1); 
          }
      }




function minusSlides(slideN) {
      var newslideIndex = slideIndex - slideN;

      if(newslideIndex > 0 ){
         currentSlide(newslideIndex);



      }
          else if (newslideIndex < 0){
              currentSlide(5); 
          }
      }


appDC.mainIcon.addEventListener('click', loadExtraInfo)
function loadExtraInfo() {
var promoCards = document.getElementsByClassName('card');
console.log(promoCards);
if(promoCards.length <= 0 || promoCards == 'null'){
    loadPromos();
    console.log('promos loaded')
}
 }

//Drawer Slider
appDC.drawerBtn.addEventListener('click', function() {
	appDC.mainIcon.classList.toggle("change");
	appDC.mySidenav.classList.toggle("open");
	appDC.mainPage.classList.toggle("opacity");
});


appDC.mainPage.addEventListener('click', closeSideNav);

function closeSideNav() {
    if(appDC.mySidenav.classList.contains('open')){
        appDC.mySidenav.classList.remove('open');
        appDC.mainIcon.classList.toggle("change");
        appDC.mainPage.classList.toggle("opacity");
        
    }else {
//       console.log('side nav not open'); 
    }
}

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}
//Noitifications Modal


//Speed choice listener
for (var i = 0; i < appDC.speed.length; i++) {
	appDC.speed[i].addEventListener("click", speedClick(i));
}

function speedClick(i) {
	return function() {
		console.log("you clicked " + this.id);
		localStorage.setItem("speed", this.id);
        
        var section = document.getElementById('iconToolSpeed');
            section.innerHTML = '';
        var speedIcon = document.createElement('LI');
            speedIcon.classList.add('topRightIcon', 'currentSpeed');
        var img = document.createElement('IMG');
            img.classList.add('currentSpeedImg');
            img.alt = "Compare delivery speed icon";
            img.src = '/images/' + this.id + '.png';
            img.style.opacity = '1 !important';
            img.id = "currentSpeedIcon";
            img.style.border = "1px solid white";
            speedIcon.appendChild(img);
            section.appendChild(speedIcon);
        
        
        if(this.id === "instantSpeed") {
            this.classList.add('instantSpeedMobileClick');
              console.log('same hour class mobiel added');  setTimeout(this.classList.remove('instantSpeedMobileClick'),5000);
            }
         else if(this.id === "sameDaySpeed") {
            this.classList.toggle('sameDaySpeedMobileClick');
              console.log('same day class mobiel added');  setTimeout(this.classList.remove('sameDaySpeedMobileClick'),5000);
        } else if(this.id === "sameWeekSpeed") {
            this.classList.toggle('sameWeekSpeedMobileClick');
              console.log('same week time class mobiel added');  setTimeout(this.classList.remove('sameWeekSpeedMobileClick'),5000);
        }  else if(this.id === "anyTimeSpeed") {
            this.classList.toggle('anyTimeSpeedMobileClick');
              console.log('anytime class mobiel added');  setTimeout(this.classList.remove('anyTimeSpeedMobileClick'),5000);
        }
            setTimeout(tabclickOne, 1150);
	};
}

//Category choice listener
for (var i = 0; i < appDC.category.length; i++) {
	appDC.category[i].addEventListener("click", categoryClick(i));
}

function tabclickOne() {
    appDC.tablinks[1].click();
}
function tabclickTwo() {
    appDC.tablinks[2].click();
}

function categoryClick(i) {

    
	return function() {
		console.log("you clicked " + this.id);
		localStorage.setItem("type", this.id);
        var section = document.getElementById('iconToolCat');
            section.innerHTML = '';
        var categoryIcon = document.createElement('LI');
            categoryIcon.classList.add('topRightIcon', 'currentType');
        var img = document.createElement('IMG');
            img.classList.add('currentTypeImg');
            img.alt = "Compare delivery category icon";
            img.src = '/images/' + this.id + '.png';
            img.style.opacity = '1 !important';
            img.id = "currentTypeIcon";
            img.style.border = "1px solid white";
            categoryIcon.appendChild(img);
            section.appendChild(categoryIcon);
        this.classList.add('active');
        setTimeout(this.classList.remove('active'), 2000);
		setTimeout(tabclickTwo, 850);
	};

    
}





//FILTER RESULTS 
function filterResult() {
	var input, filter, type, ul, li, a, i, filterType;
	filter = localStorage.getItem('speed');
	filterType = localStorage.getItem('type');
	console.log(filter);
	li = document.getElementsByClassName('servicetip');
//    console.log(li);
	for (i = 0; i < li.length; i++) {
		var speedAtt = li[i].getAttribute('data-speed');
		var typeAtt = li[i].getAttribute('data-type');
		        console.log(speedAtt);
		        console.log(typeAtt);
		var filterSpeedAtt = speedAtt.indexOf(filter);
		var filterTypeAtt = typeAtt.indexOf(filterType);
		var x, dataSplit = typeAtt.split(", ");
		if (filterSpeedAtt > -1 && filterTypeAtt > -1) {
			li[i].style.display = "";
			li[i].classList.add('chosen');
			li[i].nextElementSibling.style.display = "block";
			li[i].nextElementSibling.classList.add('show');
			var cat = li[i].nextElementSibling.children[2];
            var catChildren = cat.childNodes.length;

            if(catChildren < dataSplit.length){
                for (x = 0; x <= dataSplit.length - 1; x++) {
                    var catImg = document.createElement('IMG');
                    catImg.src = '/images/' + dataSplit[x] + '.png';
                    catImg.classList.add('catRepeat');
                    if (cat.childNodes.length <= dataSplit.length) {
                        cat.appendChild(catImg);
                    }
                }
            }
            testExp = new RegExp('Android|webOS|iPhone|iPad|' +
    		       'BlackBerry|Windows Phone|'  +
    		       'Opera Mini|IEMobile|Mobile' , 
    		      'i');
  
            if (testExp.test(navigator.userAgent)){
                console.log("Your device is a Mobile in info mode Device");
                console.log(navigator.userAgent); 
                var binP = document.getElementById('binPic');
                binP.style.display = "none";
                var binCloseChip = document.getElementById('hideBin');
                binCloseChip.style.display = "none";
                var chipImg = document.getElementById('chipImgID');
                chipImg.classList.add('change');
                var x, deleteMobileChip = document.getElementsByClassName('hideCompanyMobile');
                for(x = 0;x < deleteMobileChip.length;x++){
                deleteMobileChip[x].classList.remove('showChip');
                }
                
            }else{
                console.log('your device is not a mobile device');
            }
            
            
		} else {
			li[i].style.display = "none";
			li[i].nextElementSibling.classList.remove('show');
			li[i].nextElementSibling.style.display = "none";
		}
	}
    checkChosenCount();
}
//RESET LOCAL STORAGE ITEMS aND OPTIONS 'instantSpeed, sameDaySpeed, sameWeekSpeed, anyTimeSpeed' 'hotFood, postal, electronics, grocery, fashion, drinks'
//Reset Button
function reset() {
    
	var li, x;
	localStorage.setItem('speed', 'undefined');
	localStorage.setItem('type', 'undefined');

	appDC.infoTitleBar.classList.remove('fadeIn');
    var dropD = document.getElementById("myDropdown");

    
    appDC.serviceListSec.innerHTML = '';
    loadResults();
    appDC.tableServicePrice.style.display = "none";
    appDC.tableServiceName.style.display = "inline-block";
    appDC.tableServiceCategory.style.display = "inline-block";  
    appDC.tableServiceTime.style.display = "none";
    li = document.getElementsByClassName('servicetip');
		for (x = 0; x < li.length; x++) {
			li[x].style.display = "inline-block";
			li[x].classList.remove('chosen', 'clickMobOptionCompany');
		}
    
    var i, info = document.getElementsByName('info');
        for(i = 0;i < info.length;i++){
            info[i].classList.remove('show');
            info[i].style.display = "none";
        }

    if (matchMedia) {
var mqct = window.matchMedia( "(max-width: 801px)" );
  mqct.addListener(resetCompToolbar);
  resetCompToolbar(mqct);
}
}





//Tab Click Button
for (var i = 0; i < appDC.tablinks.length; i++) {
	appDC.tablinks[i].addEventListener("click", tabClick);
}

function tabClick() {
	var x, li;
	li = document.getElementsByName('vote');
	if (this.id == 'speedTab') {
		hideTab()
		appDC.tabcontent[0].classList.add('tabcConactive');
		appDC.tablinks[0].classList.add("active");
		appDC.infoTitleBar.classList.remove('fadeIn');
		for (x = 0; x < li.length; x++) {
			li[x].style.display = "inline-block";
			li[x].classList.remove('chosen');
            li[x].classList.remove('clickMobOptionCompany');
			li[x].nextElementSibling.classList.remove('show');
			li[x].nextElementSibling.style.display = "none";
		}
//        appDC.catSecIconRep.innerTML = '';
		appDC.footer.style.marginTop = '125px';
	} else if (this.id == 'typeTab') {
		hideTab()
		appDC.tabcontent[1].classList.add('tabcConactive');
		appDC.tablinks[1].classList.add("active");
		appDC.infoTitleBar.classList.remove('fadeIn');
		for (x = 0; x < li.length; x++) {
			li[x].style.display = "inline-block";
			li[x].classList.remove('chosen');
            li[x].classList.remove('clickMobOptionCompany');
			li[x].nextSibling.classList.remove('show');
			li[x].nextElementSibling.style.display = "none";
		}
//        appDC.catSecIconRep.innerHTML = '';
		appDC.footer.style.marginTop = '125px';
	} else if (this.id == 'resultTab') {
		hideTab()
		appDC.tabcontent[2].classList.add('tabcConactive');
		appDC.tablinks[2].classList.add("active");
		var currentSpeedImg = document.getElementById('currentSpeedIcon');
		var currentTypeImg= document.getElementById('currentTypeIcon');

        var filter = localStorage.getItem('speed');
	    var filterType = localStorage.getItem('type');
	    console.log(filter);
        
        
            if (filter == 'null' || filterType === 'null' || filter === 'undefined' || filterType === 'undefined') {
                console.log('do nothing');
            } else if (filter != 'null' && filterType != 'null'){
                appDC.infoTitleBar.classList.add('fadeIn');
                setTimeout(filterResult, 1500);
                var lee = document.getElementsByClassName('chosen');
    //			setTimeout(console.log(lee.length), 1500);
                setTimeout(checkNone, 1800);
            } else {
                console.log('filter else');
            }
    
	} else {
		hideTab()
		appDC.tabcontent[0].classList.add('tabcConactive');
		appDC.tablinks[0].classList.add("active");
		appDC.footer.style.marginTop = '125px';
	}
}
//hide tab
function hideTab() {
	for (x = 0; x < appDC.tablinks.length; x++) {
		appDC.tablinks[x].classList.remove("active");
		appDC.tabcontent[x].classList.remove('tabcConactive');
	}
}



//Drop Down Link Click

//toggle this class .tableColHide btween colums

function showPriceTable (){
    appDC.tableServicePrice.style.display = "block";
    appDC.tableServiceName.style.display = "none";
    appDC.tableServicePrice.style.width = "35%";
document.getElementById("myDropdown").classList.toggle("showDrop");
var i, nameList = document.getElementsByName('nameList');
    for(i = 0;i < nameList.length;i++){
        nameList[i].style.display = "none";
    }
var i, priceList = document.getElementsByName('priceList');
    for(i = 0;i < priceList.length;i++){
        priceList[i].style.display = "block";
        priceList[i].style.width = "40%";
    }
}

//
//var tableNameLink = document.getElementById('tableNameLink');
//tableNameLink.addEventListener('click', showNameTable);
function showNameTable (){
document.getElementById("myDropdown").classList.toggle("showDrop");
    appDC.tableServicePrice.style.display = "none";
    appDC.tableServiceName.style.display = "block";
    appDC.tableServiceName.style.width = "35%";
    
var i, priceList = document.getElementsByName('priceList');
    for(i = 0;i < priceList.length;i++){
        priceList[i].style.display = "none";
    }
var i, nameList = document.getElementsByName('nameList');
    for(i = 0;i < nameList.length;i++){
        nameList[i].style.display = "block";
        nameList[i].style.width = "40%";
    }

}

function showHoursTable (){
    appDC.tableServiceTime.style.display = "block";
    appDC.tableServiceTime.style.width = "40%";
    appDC.tableServiceCategory.style.display = "none";
    
document.getElementById("myDropdown").classList.toggle("showDrop");
var i, categList = document.getElementsByName('categList');
    for(i = 0;i < categList.length;i++){
        categList[i].style.display = "none";
    }
var i, hoursList = document.getElementsByName('hoursList');
    for(i = 0;i < hoursList.length;i++){
        hoursList[i].style.display = "block";
        hoursList[i].style.width = "40%";
        
    }
}

function showCategoryTable (){
    appDC.tableServiceTime.style.display = "none";
    appDC.tableServiceCategory.style.display = "block";
    appDC.tableServiceCategory.style.width = "40%";
    
document.getElementById("myDropdown").classList.toggle("showDrop");
var i, hoursList = document.getElementsByName('hoursList');
    for(i = 0;i < hoursList.length;i++){
        hoursList[i].style.display = "none";
    }
var i, categList = document.getElementsByName('categList');
    for(i = 0;i < categList.length;i++){
        categList[i].style.display = "block";
        categList[i].style.width = "40%";
    }
}
//Allow user to view information indivicually

function clickShow() {
	if (appDC.resultTab.innerHTML === "OPCIONES" || appDC.resultTab.innerHTML ===  "OPTIONS") {
		appDC.infoTitleBar.classList.add('fadeIn');
		var i, list = appDC.serviceListSec.getElementsByClassName('service', 'servicetip');
//		var listLen = appDC.serviceListSec.getElementsByClassName('service', 'servicetip').length;
        this.classList.add('clickMobOptionCompany');
        
		var typeAtt = this.getAttribute('data-type');
		var x, dataSplit = typeAtt.split(", ");
//		appDC.resetOptButton.style.opacity = 1;
		this.style.display = "";
		this.classList.add('chosen');       
        
		this.nextElementSibling.style.display = "block";
		this.nextElementSibling.classList.add('show');
		var cat = this.nextElementSibling.children[2];
        var catChildren = cat.children.length;             
        if(catChildren < dataSplit.length){
		for (x = 0; x <= dataSplit.length; x++) {
			var catImg = document.createElement('IMG');
			catImg.src = '/images/' + dataSplit[x] + '.png';
			catImg.classList.add('catRepeat');
			if (cat.childNodes.length <= dataSplit.length) {
				cat.appendChild(catImg);
			}
		} 
        }else {
            console.log('categories already added');
        }
	}
}
                

if (matchMedia) {

var mqc = window.matchMedia( "(max-width: 501px)" );
  mqc.addListener(WidthChangeChosen);
  WidthChangeChosen(mqc);
}

// media query change
function WidthChangeChosen(mq) {
  if (mqc.matches) {
    var list = appDC.serviceListSec.getElementsByClassName('service', 'servicetip');
      if(appDC.resultTab.innerHTML === "OPCIONES" || appDC.resultTab.innerHTML === "OPTIONS"){
    var letsGo = document.getElementsByClassName('letgoBut');
      for(x = 0;x < list.length;x++){
          list[x].style.width = "65px";
          list[x].style.marginLeft = "81px !important";
          list[x].style.height = "94px";
          letsGo[x].style.width = "42px";
//          letsGo[x].style.padding = "11px 2px";
      }
      
      }
} 
    
    
    else {
         if(appDC.resultTab.innerHTML === "OPCIONES" || appDC.resultTab.innerHTML === "OPTIONS"){
    var list = appDC.serviceListSec.getElementsByClassName('service', 'servicetip');
    var letsGo = document.getElementsByClassName('letgoBut');
       for(x = 0;x < list.length;x++){
          list[x].style.width = "100px";
          list[x].style.marginLeft = "5% !important";
          list[x].style.height = "100px";
        letsGo[x].style.width = "53px";
           letsGo[x].style.padding = "9px;"
      }
    }
    }
}


//Check how many items are dynamically chosen to adjust footer
function checkChosenCount() {
	var ler = document.getElementsByClassName('chosen');
	console.log('you have ' + ler.length + ' results');
	if (ler.length > 6) {
		console.log('greater than 6.. adjust footer for js created content');
//		var len = ler.length;
//		var margT = len * 80;
//		appDC.footer.style.marginTop = margT + 'px';
//		console.log(appDC.footer.style.marginTop);
	}
}
// Adjust Reset button depending on reults
function resetButAdjust() {
	var ulHeight = appDC.serviceListSec.clientHeight;
	var regHeight = 500;
	var butMargin = ulHeight - regHeight;
	appDC.resetNoneButton.style.top = butMargin + 'px';
}
// Check if no results and create reset button
function checkNone() {
	var ler = document.getElementsByClassName('chosen');
//	console.log(ler.length);
	if (ler.length < 1) {
		var whoo, reBut, i, li;
		whoo = document.getElementsByClassName('whoops');
		var li;
		li = document.getElementsByClassName('resetBut');
		var len = li.length;
		console.log(len);
		if (len < 1) {
			appDC.infoTitleBar.classList.remove('fadeIn');
			var listService = document.createElement("LI");
			listService.classList.add('service', 'servicetip', 'mediaMrkt', 'resetBut');
			listService.id = "resetNoneButton";
			var listIcon = document.createElement('IMG');
			listIcon.classList.add('logoService', 'resetLi');
			listIcon.src = "/images/whiteIconReset.png";
			listService.appendChild(listIcon);
			appDC.serviceListSec.appendChild(listService);
			var whoops = document.createElement('H3');
			whoops.classList.add('whoops');
			whoops.id = "whoops";
            var lang = localStorage.getItem('languageChoice');
            if(lang === 'English'){
			whoops.innerHTML = "Whoops! something went wrong, please reset or try again";
            } else if (lang === 'Espanol'){
            whoops.innerHTML = "¡Huy!Error ningún resultado encontrado, por favor vuelva a intentarlo" 
            }else {
            whoops.innerHTML = "¡Huy!Error ningún resultado encontrado, por favor vuelva a intentarlo" 
            }
            
			appDC.serviceListSec.appendChild(whoops);
			listService.addEventListener('click', resetNone);
		}
	}
}

function resetNone() {
	appDC.speedTab.click();
	reset();
    dropDown();
	var li, i;
	li = document.getElementsByClassName('resetBut');
	for (i = 0; i < li.length; i++) {
		li[i].style.display = "none";
	}
	var whoo, i;
	whoo = document.getElementsByClassName('whoops');
	for (i = 0; i < whoo.length; i++) {
		whoo[i].style.display = "none";
	}
    appDC.infoTitleBar.classList.remove('fadeIn');
		for (x = 0; x < li.length; x++) {
			li[x].style.display = "inline-block";
			li[x].classList.remove('chosen');
			li[x].nextSibling.classList.remove('show');
			li[x].nextElementSibling.style.display = "none";
		}
}

//appDC.resetNoneButton.addEventListener('click', reset);



function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.target.nextElementSibling.style.display = "none";
    
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    console.log(data);
    var elemDrop = document.getElementById(data);
    var dropPos = document.getElementById('binSection');
    ev.target.classList.add('drop');
    
    dropPos.appendChild(document.getElementById(data));
   
    elemDrop.classList.add('binDropped');
    if(elemDrop.classList.contains('clickMobOptionCompany')){
    elemDrop.classList.remove('clickMobOptionCompany');
    } else {
        console.log('ignore clickMobOptionCompany class');
    }
//    transform: scale(.2) translate3d(14px, 24px, -10px);
//    setTimeout(ev.target.classList.remove("drop"), 6000);
    setTimeout(clearBinShake, 1600);
}

function clearBinShake(){
    var binPic = document.getElementById('binPic');
    binPic.classList.remove('drop');
}

function resetDrag(){

    var serviceChildren = appDC.serviceListSec.childNodes;
    appDC.serviceListSec.innerHTML = '';
    reset();
//    appDC.tableServicePrice.style.display = "none";
    appDC.tableServiceName.style.display = "inline-block";
    appDC.tableServiceCategory.style.display = "inline-block";  
//    appDC.tableServiceTime.style.display = "none";
    var section = document.getElementById('iconToolCat');
            section.innerHTML = '';
    var sectionSpeed = document.getElementById('iconToolSpeed');
            sectionSpeed.innerHTML = '';
}




function resetPriceTable (){
    appDC.tableServicePrice.style.display = "inline-block";
    appDC.tableServiceName.style.display = "inline-block";
    appDC.tableServicePrice.style.width = "25%";
    appDC.tableServiceName.style.width = "25%";
   
    
var i, priceList = document.getElementsByName('priceList');
    for(i = 0;i < priceList.length;i++){
        priceList[i].style.display = "block";
        priceList[i].style.width = "25%";
    }
var i, nameList = document.getElementsByName('nameList');
    for(i = 0;i < nameList.length;i++){
        nameList[i].style.display = "block";
        nameList[i].style.width = "25%";
    }

}




function dropDown() {
//    console.log('dropDwon fucntion ran this one');
    
       
    appDC.listdropSec.innerHTML = '';
    appDC.binRightSec.innerHTML = '';
    
    var ddPriceLink;
    var ddNameLink;
    var ddCategoryLink;
    var ddHoursLink;
    var binClose;
    var binReset;

        ddNameLink = "Name";
        ddPriceLink = "Price";
        ddCategoryLink = "Category";
        ddHoursLink = "Hours";
        binClose = " &nbsp;&nbsp; &nbsp; Hide Bin";
        binReset = " Reset Options";
    
    var dropDown = document.createElement('DIV');
        dropDown.classList.add('dropdown-content');
        dropDown.id = "myDropdown";
        appDC.listdropSec.appendChild(dropDown);
    
    var dropDownNameLink = document.createElement('A');
        dropDownNameLink.id = "tableNameLink";
        dropDownNameLink.innerHTML = ddNameLink;
        dropDownNameLink.href = "#";
        dropDown.appendChild(dropDownNameLink);
    
    var dropDownPriceLink = document.createElement('A');
        dropDownPriceLink.id = "tablePriceLink";
        dropDownPriceLink.innerHTML = ddPriceLink;
        dropDownPriceLink.href = "#";

        dropDown.appendChild(dropDownPriceLink);
    
    var dropDownHourLink = document.createElement('A');
        dropDownHourLink.id = "tableOfferLink";
        dropDownHourLink.innerHTML = ddHoursLink;
        dropDownHourLink.href = "#";
        dropDown.appendChild(dropDownHourLink);
     
    var dropDownCategoryLink = document.createElement('A');
        dropDownCategoryLink.id = "tableCategoryLink";
        dropDownCategoryLink.href = "#";
        dropDownCategoryLink.innerHTML = ddCategoryLink;
        dropDown.appendChild(dropDownCategoryLink);
    
     

  testExp = new RegExp('Android|webOS|iPhone|iPad|' +
    		       'BlackBerry|Windows Phone|'  +
    		       'Opera Mini|IEMobile|Mobile' , 
    		      'i');
  
  if (testExp.test(navigator.userAgent)){
       console.log("Your device is a Mobile Device");
    console.log(navigator.userAgent); 
      

    var mobileDeleteOption = document.createElement('BUTTON');
        mobileDeleteOption.innerHTML = '&times;';
        mobileDeleteOption.id = "deleteMobileChip";
        mobileDeleteOption.classList.add('hideCompanyMobile','showChip');
        
      
    var i, list = document.getElementsByClassName('service', 'servicetip');
      for(i = 0;i < list.length;i++){
          list[i].appendChild(mobileDeleteOption);
          console.log('added close button');
      }  
      
      
    var binSec = document.createElement('DIV');
        binSec.classList.add('binSec');
        binSec.id = "binSection";
    appDC.binRightSec.appendChild(binSec);
     
    var binCloseButton = document.createElement('BUTTON');
        binCloseButton.classList.add('bin', 'three', 'chip');
        binCloseButton.id = "hideBin";
        binCloseButton.innerHTML = binClose;
        binCloseButton.addEventListener('click', hideBinMobile);
    binSec.appendChild(binCloseButton);   
    
    var chipImg = document.createElement('IMG');
        chipImg.src = '/images/transp.png';
        chipImg.id = "chipImgID";
    binCloseButton.appendChild(chipImg);
    
    var binString = document.createElement('P');
        binString.id = appDC.binCloseString;
        binCloseButton.appendChild(binString);
    
    var binImg = document.createElement('IMG');
        binImg.classList.add('bin');
        binImg.src = "/images/bin.png";
        binImg.setAttribute('ondrop', 'drop(event)');
        binImg.setAttribute('ondragover', 'allowDrop(event)');
        binImg.id = "binPic";
        
    binSec.appendChild(binImg);
    
    var binResetBut = document.createElement('BUTTON');
        binResetBut.classList.add('bin', 'two', 'chip');
        binResetBut.id = "binResetBut";
        binResetBut.innerHTML = binReset;
        binResetBut.addEventListener('click', resetDrag);
    
    var chipImgReset = document.createElement('IMG');
        chipImgReset.src = '/images/transp.png';
        chipImgReset.id = "chipImgResetID";
    binResetBut.appendChild(chipImgReset);
    
    binSec.appendChild(binResetBut);
        if (appDC.resultTab.innerHTML === "VOTA" || appDC.resultTab.innerHTML === "VOTE"){
                var x, deleteMobileChip = document.getElementsByClassName('hideCompanyMobile');
                    for(x = 0;x < deleteMobileChip.length; x++){
                        deleteMobileChip[x].classList.remove('showChip');
                        deleteMobileChip[x].parentElement.addEventListener('click', voteCount);
                        }  
         }   else {
                      console.log('dropdwon votecount not regd');
                  }
      
  }else {
//       console.log("Your device is NOT a Mobile Device");
//     			 console.log(navigator.userAgent);

       var binSec = document.createElement('DIV');
        binSec.classList.add('binSec');
        binSec.id = "binSection";
    appDC.binRightSec.appendChild(binSec);
     
    var binCloseButton = document.createElement('BUTTON');
        binCloseButton.classList.add('bin', 'three', 'chip');
        binCloseButton.id = "hideBin";
        binCloseButton.innerHTML = binClose;
        binCloseButton.addEventListener('click', hideBin);
    binSec.appendChild(binCloseButton);   
    
    var chipImg = document.createElement('IMG');
        chipImg.src = '/images/transp.png';
        chipImg.id = "chipImgID";
    binCloseButton.appendChild(chipImg);
    
    var binString = document.createElement('P');
        binString.id = appDC.binCloseString;
        binCloseButton.appendChild(binString);
    
    var binImg = document.createElement('IMG');
        binImg.classList.add('bin');
        binImg.src = "/images/bin.png";
        binImg.setAttribute('ondrop', 'drop(event)');
        binImg.setAttribute('ondragover', 'allowDrop(event)');
        binImg.id = "binPic";
    binSec.appendChild(binImg);
    
    var binResetBut = document.createElement('BUTTON');
        binResetBut.classList.add('bin', 'two', 'chip');
        binResetBut.id = "binResetBut";
        binResetBut.innerHTML = binReset;
        binResetBut.addEventListener('click', resetDrag);
    
    var chipImgReset = document.createElement('IMG');
        chipImgReset.src = '/images/transp.png';
        chipImgReset.id = "chipImgResetID";
    binResetBut.appendChild(chipImgReset);
    
    binSec.appendChild(binResetBut);
      
    
      
    var i, list = document.getElementsByClassName('service', 'servicetip');
      for(i = 0;i < list.length;i++){
          list[i].addEventListener('click', voteCount);
//          console.log('added vote count  event listenr');
      }

  }


//console.log('dropDwon fucntion ran this one');
    
    
    
//dropDown Price Button Click

dropDownPriceLink.addEventListener('click', showPriceTable);
dropDownNameLink.addEventListener('click', showNameTable);
dropDownCategoryLink.addEventListener('click', showCategoryTable);
dropDownHourLink.addEventListener('click', showHoursTable);
}

function myDropFunction() {
	document.getElementById("myDropdown").classList.toggle("showDrop");
	console.log('clicked dropdown and ran');
}



// media query event handler

if (matchMedia) {
  var mq = window.matchMedia( "(min-width: 801px)" );
  mq.addListener(WidthChange);
  WidthChange(mq);
}

// media query change
function WidthChange(mq) {
  if (mq.matches) {
    resetPriceTable();
      var tableLetsGo = document.getElementById('tableLetsGo');
          tableLetsGo.style.width = "14.9%";
      
    var x, goLinkBut = document.getElementsByName('goLinkBut');
      for(x = 0; x < goLinkBut.length;x++){
         goLinkBut[x].style.width = "15%";
      }
     
    var i, categList = document.getElementsByName('categList');
    for(i = 0;i < categList.length;i++){
        categList[i].style.display = "block";
        categList[i].style.width = "20%";
    }  
      
    appDC.tableServiceTime.style.width = "20%";
    var i, hoursList = document.getElementsByName('hoursList');
    for(i = 0;i < hoursList.length;i++){
        hoursList[i].style.display = "block";
        hoursList[i].style.width = "15%";
    }  
      
    appDC.tableServiceTime.style.width = "15%";
    appDC.tableServiceTime.style.display = "block";
    appDC.tableServiceCategory.style.display = "block";
    appDC.tableServiceCategory.style.width = "20%";
    appDC.tableServicePrice.style.display = "block";
    appDC.tableServiceName.style.display = "block";
    
    appDC.voteIcon.style.display = "block";
    appDC.aboutIcon.style.display = "block";
      
    var list = appDC.serviceListSec.getElementsByClassName('service', 'servicetip');

      for(x = 0;x < list.length;x++){
          list[x].style.marginLeft = "6%x !important";       
      }
      var dropdowns = document.getElementsByClassName("dropdown-content");
			var i;
			for (i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('showDrop')) {
					openDropdown.classList.remove('showDrop');
				}
			}
  } else {
    console.log('window width is less than 800px..Js to aid reset of css media now effective');
      
    appDC.voteIcon.style.display = "none";
    appDC.aboutIcon.style.display = "none";
      
    appDC.tableServiceCategory.style.width = "40%";
    appDC.tableServicePrice.style.display = "none";
    appDC.tableServiceName.style.width = "40%";
    appDC.tableServiceTime.style.width = "40%";
    appDC.tableServiceTime.style.display = "none";
    var i, hoursList = document.getElementsByName('hoursList');
    for(i = 0;i < hoursList.length;i++){
        hoursList[i].style.display = "none";
        hoursList[i].style.width = "40%";
    }   
     var list = appDC.serviceListSec.getElementsByClassName('service', 'servicetip');

      for(x = 0;x < list.length;x++){
          list[x].style.marginLeft = "6%x !important";       
      }  
      
    var i, priceList = document.getElementsByName('priceList');
    for(i = 0;i < priceList.length;i++){
        priceList[i].style.display = "block";
        priceList[i].style.width = "40%";
    }
    
    var i, nameList = document.getElementsByName('nameList');
    for(i = 0;i < nameList.length;i++){
        nameList[i].style.display = "block";
        nameList[i].style.width = "40%";
    }
   
    var i, priceList = document.getElementsByName('priceList');
    for(i = 0;i < priceList.length;i++){
        priceList[i].style.display = "none";
    }
    var i, categList = document.getElementsByName('categList');
    for(i = 0;i < categList.length;i++){
        categList[i].style.display = "block";
        categList[i].style.width = "40%";
    }  
      
    var x, goLinkBut = document.getElementsByName('goLinkBut');
      for(x = 0; x < goLinkBut.length;x++){
         goLinkBut[x].style.width = "20%";
      }
      var tableLetsGo = document.getElementById('tableLetsGo');
     tableLetsGo.style.width = "19.7%";  
      
  }
}




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}




var x, tablink = document.getElementsByClassName('tablink');
for(x = 0;x < tablink.length;x++) {
   tablink[x].addEventListener('click', mesgTabClick);
}



function mesgTabClick(event, id) {
	var x, li, tabcontent = document.getElementsByClassName('tabMesgContent');
    var tablink = document.getElementsByClassName('tablink');
    
	if (this.id === 'logIn') {
		hideMesgTab();
		tabcontent[0].classList.add('active');
		tablink[0].classList.add("active");
		
		
	} else if (this.id === 'signUp') {
		hideMesgTab();
		tabcontent[1].classList.add('active');
		tablink[1].classList.add('active');


	} else if (this.id === 'anon') {
		hideMesgTab();
		tabcontent[1].classList.add('active');
		tablink[1].classList.add('active');
		
    
	} else {
		hideMesgTab();
		tabcontent[0].classList.add('active');
		tablink[0].classList.add("active");
	}
}



function hideBin(dropDown){
    var binPic = document.getElementById('binPic');
    binPic.classList.toggle('hide');
    var binResetBut = document.getElementById('binResetBut');
    var chipImg = document.getElementById('chipImgID');
    chipImg.classList.toggle('change');
    binResetBut.classList.toggle('hide');
    var hideBin = document.getElementById('hideBin').classList.toggle('binHiddenChip');
    var binSec = document.getElementById('binSection');
        binSec.classList.toggle('hide');
    var i, rubbishItems = document.getElementsByClassName('binDropped');
    for(i =0;i< rubbishItems.length;i++){
        rubbishItems[i].classList.toggle('hide');
    }  
}


function hideBinMobile(dropDown){
    var binPic = document.getElementById('binPic');
    binPic.classList.toggle('hide');
    var binResetBut = document.getElementById('binResetBut');
    var chipImg = document.getElementById('chipImgID');
    var lis = appDC.serviceListSec.getElementsByClassName('service', 'servicetip');
    var lisLen = lis.length;
    var x, deleteMobileChip = document.getElementsByClassName('hideCompanyMobile');
    
    chipImg.classList.toggle('change');
    binResetBut.classList.toggle('hide');
    var hideB = document.getElementById('hideBin');
    var hideBin = document.getElementById('hideBin').classList.toggle('binHiddenChip');
    var binSec = document.getElementById('binSection');
        binSec.classList.toggle('hide');
    var i, rubbishItems = document.getElementsByClassName('binDropped');
    for(i =0;i< rubbishItems.length;i++){
        rubbishItems[i].classList.toggle('hide');
    }
    console.log(binPic.classList.length);
if(hideB.classList.length === 3){
 for(x = 0;x < deleteMobileChip.length;x++){
                deleteMobileChip[x].classList.add('showChip');
     lis[x].removeEventListener('click', clickShow);
                deleteMobileChip[x].removeEventListener('click', function(){console.log("removed trash anim")});
                }
               
}
else if(hideB.classList.length === 4){
      for(x = 0;x < deleteMobileChip.length;x++){
          //bin hidden
            deleteMobileChip[x].classList.remove('showChip');
            lis[x].addEventListener('click', clickShow);
          if(lis[x].classList.contains('trashMob')){
              lis[x].classList.add('hide');
          } else {
              //list item doesnt need hiding
          }
                deleteMobileChip[x].addEventListener('click', mobTrashAnim);
    }
    
       
} else {
        for(x = 0;x < deleteMobileChip.length;x++){
            //bin not hidden
                deleteMobileChip[x].classList.remove('showChip');
                lis[x].addEventListener('click', clickShow);
                deleteMobileChip[x].removeEventListener('click',function(){console.log("added trash anim")}); 
            if(lis[x].classList.contains('trashMob')){
              lis[x].classList.remove('hide');
          } else {
              //list item doesnt need hiding
          }
        }    
    }
}

function mobTrashAnim() {
    this.parentElement.classList.add('trashMob');
    this.style.display = "none";
    this.parentElement.nextElementSibling.style.display = "none";
    var bin = document.getElementById('binPic');
    
        setTimeout(bin.classList.add("drop"), 300);
        setTimeout(clearBinShake, 1200);
}


//hide tab
function hideMesgTab() {
    var x, tabcontent = document.getElementsByClassName('tabMesgContent');
    var tablink = document.getElementsByClassName('tablink');
	for (x = 0; x < tablink.length; x++) {
		tablink[x].classList.remove('active');
		tabcontent[x].classList.remove('active');
	}
}



var companyOpeningTimes = function (openDays, openHour, closeHour){


var d = new Date();
var today = d.getDay();
var currentHour = d.getHours();
 
//    console.log(currentHour);
switch (today) {
    case 0:
//        console.log('today is Sunday');
        if(openHour < currentHour && closeHour > currentHour){
//            console.log('youre store is open ');
        }
        break; 
    case 1:
//        console.log('today is Monday');
        if(openHour < currentHour && closeHour > currentHour){
//            console.log('youre store is open');
        }
        break; 
    case 2:
//        console.log('today is Tuesday');
        if(openHour < currentHour && closeHour > currentHour){
//            console.log('youre store is open');
        }
        break; 
    case 3:
//        console.log('today is Wednesday');
        if(openHour < currentHour && closeHour > currentHour){
//            console.log('youre store is open');
        }
        break;
    case 4:
//        console.log('today is Thursday');
        if(openHour < currentHour && closeHour > currentHour){
//            console.log('youre store is open');
        }
        break;
    case 5:
//        console.log('today is Friday');
        if(openHour < currentHour && closeHour > currentHour){
//            console.log('youre store is open');
        }
        break;
    case 6:
//        console.log('today is Saturday');
        if(openHour < currentHour && closeHour > currentHour){
//            console.log('youre store is open');
        }
        break;
    default: 
//        console.log('Your Service may be closed');

    }
    
}
companyOpeningTimes(5, 6, 23);






// media query change dropdown
function resetCompToolbar(mq) {
  if (mqc.matches) {
//    appDC.tableServicePrice.style.display = "none";
    appDC.tableServiceName.style.display = "block";
    appDC.tableServiceCategory.style.display = "block";  
//    appDC.tableServiceTime.style.display = "none";
      }
    else {        
        console.log('i did this mqelse');
    appDC.tableServicePrice.style.display = "block !important";
    appDC.tableServiceName.style.display = "block";
    appDC.tableServiceCategory.style.display = "block";  
    appDC.tableServiceTime.style.display = "block !important";
    }
}

function loadBlogPosts(){

//<input type="text" class="blogSearch" placeholder="search">
appDC.blogSection.innerHTML = '';
var input = document.createElement('INPUT');
    input.setAttribute('type', 'text');
    input.classList.add('blogSearch');
    input.setAttribute('placeholder', 'search...');
    appDC.blogSection.appendChild(input);

var blogList = { 
            "post": [ 
                  {
                "company": "delkopro",
                "logo": "images/icons/delkoLogo.png",
                "blogImage": "images/deliverOO.png",
                "blogHeader": "DelkoPro is Delivery Compare",
                "blogText": "This is a recent blog post shared by deliveroo and re shared by delkopro",
                "blogDAte": "26/3/17",
                "linkBlog": "delkopro.co.uk",
                "linkText": "delkopro.co.uk",
                "keywords": "Deliveroo, New Services, Offers, London"
                },
                {
                "company": "deliveroo",
                "logo": "images/deliverooLogo.png",
                "blogImage": "images/deliverOO.png",
                "blogHeader": "Deliveroo Top 10",
                "blogText": "This is a recent blog post shared by deliveroo and re shared by delkopro",
                "blogDAte": "26/2/17",
                "linkBlog": "Deliveroo.co.uk",
                "linkText": "Delivero.co.uk",
                "keywords": "Deliveroo, New Services, Offers, London"
                },
                {
                "company": "justEat",
                "logo": "images/justEatLogo.png",
                "blogImage": "images/deliverOO.png",
                "blogHeader": "Delivery bots – coming to a street near you",
                "blogText": "We’ve all been there – you’ve ordered takeaway, the doorbell rings, and you suddenly realise you’re five-episodes into a Netflix binge, still sat in your pjs and totally unprepared for human contact.",
                "blogDAte": "16/7/16",
                "linkBlog": "JustEat.co.uk",
                "linkText": "JustEat.co.uk",
                "keywords": "Just Eat, Delivery Robot, New last mile delivery, London"
                }
                ]
};

var x, blogP = blogList.post;
        for(x in blogP){

        
        var companyInfo  = blogP[x].company;
        var logoInfo  = blogP[x].logo;
        var blogImageInfo  = blogP[x].blogImage;
        var JSONblogHeader = blogP[x].blogHeader;
        var JSONblogText = blogP[x].blogText;
        var blogDAteInfo = blogP[x].blogDAte;
        var JSONlinkBlog = blogP[x].linkBlog;
        var linkTextInfo  = blogP[x].linkText;
        var JSONkeywords = blogP[x].keywords;
//            console.log(company, logo, blogHeader, blogText, blogDAte, linkText);
        var blogTextInfo  = JSON.stringify(JSONblogText);
            blogTextInfo = blogTextInfo.replace(/\"/g, "");
        var blogHeaderInfo = JSON.stringify(JSONblogHeader); 
            blogHeaderInfo = blogHeaderInfo.replace(/\"/g, "");
        var linkBlogInfo  = JSON.stringify(JSONlinkBlog); 
        var keywordsInfo  = JSON.stringify(JSONkeywords);
            keywordsInfo = keywordsInfo.replace(/\"/g, "");
        
var blogPost = document.createElement('Div');
    blogPost.id = 'blogPostContainer';
    blogPost.classList.add('blogPost');
    appDC.blogSection.appendChild(blogPost);
var icon = document.createElement('LI');
    icon.classList.add('serviceBlog', companyInfo , 'blogIcon');
    blogPost.appendChild(icon);
var logoImg = document.createElement('IMG');
    logoImg.src = logoInfo ;
    logoImg.classList.add('delkoLogoImgage');
    icon.appendChild(logoImg);
var blogImg = document.createElement('IMG');
    blogImg.id = "blogImage";
    blogImg.classList.add('blogImageMain', 'delkoProPost');
    blogImg.src = blogImageInfo ;
    blogPost.appendChild(blogImg);
var date = document.createElement('DIV');
    date.classList.add('blogDate');
    date.id = "blogDate";
    date.innerHTML = blogDAteInfo ;
    blogPost.appendChild(date);
var blogHeader = document.createElement('DIV');
    blogHeader.id = "blogHeader";
    blogHeader.innerHTML = blogHeaderInfo ;
    blogHeader.classList.add('blogHeader');
    blogPost.appendChild(blogHeader);
var blogText = document.createElement('DIV');
    blogText.id = "blogText";
    blogText.classList.add('blogMainText');
    blogText.innerHTML = blogTextInfo ;
    blogPost.appendChild(blogText);
var link = document.createElement('A');
    link.id = "linkBlog";
    link.href = linkBlogInfo ;
    link.classList.add('linkBlog');
    link.innerHTML = linkTextInfo  ;
    blogPost.appendChild(link);
var keywords = document.createElement('H4');
    keywords.classList.add('blogKeyWords');
    keywords.id = "blogKeywords";
    keywords.innerHTML = keywordsInfo ;
    blogPost.appendChild(keywords);
}
}

function proflesPageLoad() {
    appDC.profilesPage.innerHTML = '';
}

function AboutPageLoad() {
    appDC.aboutPage.innerHTML = '';
    var head = document.createElement('H2');
        head.classList.add('pageTitle', 'Contact');
        head.id = "aboutPageHeader";
    appDC.aboutPage.appendChild(head); 
    var pageContent = document.createElement('DIV');
        pageContent.classList.add('pageContent', 'aboutSection');
        appDC.aboutPage.appendChild(pageContent); //TODO FIX
    var threeAdd = document.createElement('DIV');
        threeAdd.classList.add('threeAdditives');
        pageContent.appendChild(threeAdd);
    
        var speedAdd = document.createElement('IMG');
            speedAdd.src = '/images/stats.png';
            speedAdd.id = 'speedAdd';
            speedAdd.classList.add('speedAdd');
            speedAdd.alt = 'delivery speed icon';
            threeAdd.appendChild(speedAdd);
    
         var watchAdd = document.createElement('IMG');
            watchAdd.src = '/images/stopwatch.png';
            watchAdd.id = 'categAdd';
            watchAdd.classList.add('categAdd');
            watchAdd.alt = 'delivery timing icon';
            threeAdd.appendChild(watchAdd);
    
        var ideaAdd = document.createElement('IMG');
            ideaAdd.src = '/images/resultChip.png';
            ideaAdd.id = 'ideaAdd';
            ideaAdd.classList.add('ideaAdd');
            ideaAdd.alt = 'delivery service ideas icon';
            threeAdd.appendChild(ideaAdd);
    
    var results = document.createElement('DIV');
        results.classList.add('resultAdditives');
        pageContent.appendChild(results);
    
        var resultOne= document.createElement('IMG');
            resultOne.src = '/images/ideaIcon.png';
            resultOne.id = 'resultAddOne';
            resultOne.alt = 'delivery speed icon';
            resultOne.classList.add('resultAdd', 'One');
            results.appendChild(resultOne);
         var resultTwo = document.createElement('IMG');
            resultTwo.src = '/images/cashIcon.png';
            resultTwo.id = 'resultAddTwo';
            resultTwo.alt = 'delivery service rewards result icon';
            resultTwo.classList.add('resultAdd', 'Two');
            results.appendChild(resultTwo);
        var resultThree = document.createElement('IMG');
            resultThree.src = '/images/adviceIcon.png';
            resultThree.id = 'resultAddThree';
            resultThree.classList.add('resultAdd', 'Three');
            resultThree.alt = 'delivery service advice result icon';
            results.appendChild(resultThree);
    
    var grindMac = document.createElement('DIV');
        grindMac.classList.add('grindMac');
    var grindImg = document.createElement('IMG');
        grindImg.src = '/images/grinder.png';
        grindImg.id = 'machgrind';
        grindImg.classList.add('grindIcon', 'machineShake');
        grindImg.alt = 'filter comparison delivery services app';
        grindMac.appendChild(grindImg);
        pageContent.appendChild(grindMac);
    
    var pageInfo = document.createElement('DIV');
        pageInfo.classList.add('about', 'pageInfo');
        pageInfo.id = "pageInfoAbout";
        pageContent.appendChild(pageInfo);
    
        pageInfo.innerHTML = '<b>Welcome!</b><br><br>DelkoPro brings all your favourite home delivery services to one place.<br><br>Find the best company for you in seconds.<br>Save time trolling the web trying to find new services or promotions.<br><br>This tool was developed for personal use to save time deciding.<br>When it comes to choosing a delivery service for dinner.<br>It can take more time deciding on the Delivery company, than to recieve the delivery of the food.<br><br>The majority of delivery decisions will come down to just a few main properties.Speed, category of delivery, price, opening hours, reviews and available promotions.<br><br>DelkoPro is a free service that offers an immediate answer to this decision.<br><br>Save time, save money, have a fun user experince doing it.<br><br>To add a service you think should be displayed, please contact us using the form. Thank you for checking us out, your feedback will help imrprove this service.<br><br><i>This site is currently in  development stages.</i><br><br>DelkoPro';
    
    
}




function mainPageText() {
	var centerLogo = document.getElementsByClassName('centerLogo');
	var i;
    var tooltipSpan = document.getElementsByClassName('categoryTip');
    var catImages = ["/images/hotFood.png", "/images/postal.png", "/images/electronics.png", "/images/grocery.png", "/images/fashion.png", "/images/drinks.png"];
	var catArrayNameEN = ["Hot Food", "Postal", "Electronics", "Grocery", "Fashion", "Drinks"]; {
		centerLogo[0].innerHTML = "DelkoPro";
		var i;
		for (i = 0; i < tooltipSpan.length; i++) {
			tooltipSpan[i].firstElementChild.innerHTML = catArrayNameEN[i];
            var catImg = document.createElement('IMG');
            catImg.src = catImages[i];
            catImg.classList.add('logoCat');
            tooltipSpan[i].appendChild(catImg);
		}
		appDC.speedTab.innerHTML = "SPEED";
		appDC.typeTab.innerHTML = "TYPE";
		if (appDC.resultTab.classList.contains('tabVote')) {
			appDC.resultTab.innerHTML = "VOTE";
		} else {
			appDC.resultTab.innerHTML = "OPTIONS";
		};
		appDC.speedInfoTextOne.innerHTML = "INSTANT";
		appDC.speedInfoTextTwo.innerHTML = "SAME DAY";
		appDC.speedInfoTextThree.innerHTML = "SAME WEEK";
		appDC.speedInfoTextFour.innerHTML = "ANY TIME";

		appDC.aboutLink.innerHTML = "About";
		appDC.homeLink.innerHTML = "Home";
		appDC.promoLink.innerHTML = "Offers and Promotions";
		appDC.voteLink.innerHTML = "Vote";
		appDC.contactLink.innerHTML = "Contact";
		appDC.termsLink.innerHTML = "Terms of Service";
		appDC.tableServiceName.innerHTML = "Service Name";
		appDC.tableServicePrice.innerHTML = "Price";
		appDC.tableServiceCategory.innerHTML = "Categories";
		appDC.tableServiceTime.innerHTML = "Hours";
		appDC.tableLetsGo.innerHTML = "Let's Go!";
		
	
}
};

var notemodal = document.getElementById('myNoteModal');
var notebtn = document.getElementById("notifLink");

notebtn.addEventListener('click', notificationModal);

function notificationModal() {
    var myNoteModal = document.getElementById('myNoteModal');
    appDC.mainIcon.click();
    
    myNoteModal.innerHTML = '<div class="modal-content"><div class="modal-header" id="myModalHeader"><span class="close" id="closeNote" onclick="noteClose();">&times;</span>Notifications</div><div class="modal-body"><div id="notificationModalText"><div class="coingSoonText">Coming Soon</div><div class="cominSoonMain"><div class="loginForNotifications" id="notifcationLoginSection"><button class="submitModalcontact googleButton" id="googleAuthBut">Verify with Google<img src="/images/gmailicon.png" class="gmailicon"></button><button class="submitModalcontact googleButton" id="emailAuthButNotifications">Verify with Email Login</button></div><div id="emailLoginSectionNofications"><form id="emailNotifForm"><label id="loginLabelEmail"><b>Email</b></label><input type="text" placeholder="Email" name="uname" autocomplete="email" required id="emailLogin"><label id="loginLabelPassword"><b>Password</b></label><input type="password" placeholder="Enter password" name="psw" autocomplete="name" required id="passLogin"><button type="button" class="submitModalcontact" id="notifLoginBut">Login</button></form></div><div class="toggleSubscriptionsButton" id="toggleSubscriptionsButton"><button class="submitModalcontact googleButton" id="promptSubscriptions">Prompt Subscriptions</button></div><div class="toggleSubscriptions" id="toggleSubscriptions"><br><p>Your device has been registered for notifications</p><label class="switch"><input type="checkbox" id="notifSwitch"><div class="slider round"></div></label></div></div></div></div><div class="modal-footer"><button id="noteCloseModal">Close</button></div></div>}';
  
//     notifUser();
    notemodal.style.display = "block";
}
function noteClose(){
    notemodal.style.display = "none";
    myNoteModal.innerHTML = '';
};
    
function notifUser(){ 
var user = firebase.auth().currentUser;


  if (user) {
      // User is signed in.
    appDC.logOutButton.style.display = "block";  
    var isAn = user.isAnonymous;
      console.log(isAn); 
      console.log(user)
      console.log(user.providerId);
      var provider = user.providerId;
      notemodal.style.display = "block";
      appDC.notifcationLoginSection.style.display = "none";
      appDC.toggleSubscriptionsButton.style.display = "block";  
       appDC.notifcationLoginSection.style.display = "none";
      appDC.emailLoginSectionNofications.style.display = "none";
  }else {
    
	notemodal.style.display = "block";
    appDC.toggleSubscriptions.style.display = "none";
    appDC.toggleSubscriptionsButton.style.display = "none";
    appDC.notifcationLoginSection.style.display = "block";
    appDC.emailLoginSectionNofications.style.display = "none";
    //emailAuthButNotifications
//    notificationAlert();
}
}
//noteClose.onclick = function() {
//	notemodal.style.display = "none";
//}
//noteCloseModal.onclick = function() {
//    notemodal.style.display = "none";
//}
//window.onclick = function(event) {
//		if (event.target == notemodal) {
//			notemodal.style.display = "none";
//		}
//	}


function contactPage() {

   
    var contactImages = document.getElementById('contactFormImages');
        
    var mailImg = document.createElement('IMG');
        mailImg.alt = "Contact delkopro mail icon";
        mailImg.classList.add('contIcon');
        mailImg.src = "/images/contactIcon.png";
        contactImages.appendChild(mailImg);
//    var logoutImg = document.createElement('IMG');
//        logoutImg.alt = "logout of delkopro icon";
//        logoutImg.classList.add('logoutIcon');
//        logoutImg.id = "logOutButton";
//        logoutImg.src = "/images/logoutIcon.png";
//        contactImages.appendChild(logoutImg);
    var anonIcon = document.createElement('IMG');
        anonIcon.classList.add('logoutIcon', 'Anon');
        anonIcon.alt = "logout of delkopro anonymous icon";
        anonIcon.src = "/images/logoutIconAnon.png";
        anonIcon.id = "buttonAnonIcon";
        contactImages.appendChild(anonIcon);
    
//    var googlauthIcon = document.createElement('IMG');
//        googlauthIcon.src = "/images/loggedInGoogle.png";
//        googlauthIcon.alt = "google auth login icon";
//        googlauthIcon.classList.add('logoutIconAnon');
//        googlauthIcon.id = "googleSignedIn";
//        contactImages.appendChild(googlauthIcon);
    
   
    
        messagingAuth();
}
var openIcons = document.getElementById('openIcons');
openIcons.addEventListener('click', showMenuIcons);
function showMenuIcons(e){
    e.preventDefault();
    var i, noteIcon = document.getElementsByClassName('noteIcon');
    for(i = 0;i < noteIcon.length;i++){
        noteIcon[i].classList.toggle('noteIcon-show');
    }
   
}


//function iframePop (){
//    var ifrCont = document.getElementById('ifrCont');
//    var URL = this.getAttribute('URL');
//    var iframe = document.createElement('IFRAME');
//    iframe.id = 'dynamicIframe';
//    iframe.src = URL;
//    ifrCont.appendChild(iframe);
////    iframe.animate(); // animate opening iframe preview;
//    var closeIframe = document.createElement('Button');
//    ifrCont.appendChild(closeIframe);
//    closeIframe.addEventListener('click', closeIframePop);
//}
//
//function closeIframePop() {
//    var ifrCont = document.getElementById('ifrCont');
//    ifrCont.innerHTML = '';
//    
//    iframe.animate(); //animate closing iframe;
//    
//}
