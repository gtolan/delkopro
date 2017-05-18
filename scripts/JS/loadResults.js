function loadVoteList() {
	var ref = firebase.database().ref().child("delkopro");
	var refcompany = ref.child("companies");
	var query = refcompany.orderByKey();
	query.once("value").then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var companyName = childSnapshot.key;
			var companyLogo = JSON.stringify(childSnapshot.val().logoIcon, null, 3);
			var logoSrc = companyLogo.replace(/\"/g, "");
			var companyStyleClass = JSON.stringify(childSnapshot.val().class, null, 3);
			var style = companyStyleClass.replace(/\"/g, "");
			var companySpeed = JSON.stringify(childSnapshot.val().speed, null, 3);
			var speed = companySpeed.replace(/\"/g, "");
			var companyType = JSON.stringify(childSnapshot.val().type, null, 3);
			var type = companyType.replace(/\"/g, "");
			var listI = document.createElement("LI");
			listI.classList.add('service', style, 'servicetip');
			listI.setAttribute("data-speed", speed);
			listI.setAttribute("data-type", type);
			listI.setAttribute("name", "vote");
			listI.setAttribute("draggable", "true");
			listI.setAttribute("ondragstart", "drag(event)");
			listI.setAttribute("ondrop", "drop(event)");
			listI.id = style + 'ID';
			testExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile', 'i');
			if (testExp.test(navigator.userAgent)) {
				console.log("Your device is a Mobile Device");
				listI.addEventListener('click', voteCount);
			} else {
				console.log("Your device is NOT a Mobile Device");
				console.log(navigator.userAgent);
				listI.addEventListener('click', voteCount);
			}
			var logo = document.createElement('IMG');
			logo.classList.add('logoService');
			logo.src = logoSrc;
			logo.setAttribute('draggable', 'false');
			listI.appendChild(logo);
			if (testExp.test(navigator.userAgent)) {
				console.log("Your device is a Mobile Device");
				appDC.binRightSec.style.display = "none";
			} else {
				console.log("Your device is NOT a Mobile Device");
				console.log(navigator.userAgent);
			}
			var insertHtml = document.getElementById('serviceListSec');
			insertHtml.appendChild(listI);
			console.log('elements added');
			var lis = insertHtml.getElementsByClassName('service', 'servicetip');
		});
	});
	testExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile', 'i');
	if (testExp.test(navigator.userAgent)) {
		console.log("Your device is a Mobile Device");
		console.log(navigator.userAgent);
		appDC.binRightSec.innerHTML = '';
	} else {
		console.log("Your device is NOT a Mobile Device");
		console.log(navigator.userAgent);
		var x, lis = document.getElementsByClassName('service', 'servicetip');
		var lisLen = lis.length;
		for (x = 0; x < lisLen; x++) {
			lis[x].addEventListener('click', clickShow);
		}
	}
}

function loadResults() {
	console.log();
	appDC.binRightSec.style.display = "block";
	var ref = firebase.database().ref().child("delkopro");
	var refcompany = ref.child("companies");
	var refPromo = ref.child("Promotions");
	ref.on('value', snap => {
		var header = document.createElement('h2');
		var insertHtml = document.getElementById('main');
		header.innerHTML = JSON.stringify(snap.val(), null, 3);
	});
	var query = refcompany.orderByKey();
	query.once("value").then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var companyName = childSnapshot.key;
			var companyLogo = JSON.stringify(childSnapshot.val().logoIcon, null, 3);
			var logoSrc = companyLogo.replace(/\"/g, "");
			var companyStyleClass = JSON.stringify(childSnapshot.val().class, null, 3);
			var style = companyStyleClass.replace(/\"/g, "");
			var companySpeed = JSON.stringify(childSnapshot.val().speed, null, 3);
			var speed = companySpeed.replace(/\"/g, "");
			var linkref = JSON.stringify(childSnapshot.val().link, null, 3);
			var link = linkref.replace(/\"/g, "");
			var companyType = JSON.stringify(childSnapshot.val().type, null, 3);
			var type = companyType.replace(/\"/g, "");
			var listI = document.createElement("LI");
			var companyLowPrice = JSON.stringify(childSnapshot.val().priceFrom, null, 3);
			var priceLow = companyLowPrice.replace(/\"/g, "");
			var companyAvgPrice = JSON.stringify(childSnapshot.val().priceAvg, null, 3);
			var priceAvg = companyAvgPrice.replace(/\"/g, "");
			var companyHoursArr = JSON.stringify(childSnapshot.val().hours, null, 3);
			var compHoursArr = companyHoursArr.split(",");
			var lang = localStorage.getItem('languageChoice');
			if (lang === "Espanol") {
				var newPrice = priceLow.replace(/Free/gi, "Gratis");
				var newAvgPrice = priceAvg.replace(/Free/gi, "Gratis");
			} else if (lang === "English") {
				var newPrice = priceLow;
				var newAvgPrice = priceAvg;
			} else {
				var newPrice = priceLow.replace(/Free/gi, "Gratis");
				var newAvgPrice = priceAvg.replace(/Free/gi, "Gratis");
			}
			var openDays = compHoursArr[0].replace(/\"/g, "");
			var openHour = compHoursArr[1].replace(/\"/g, "");
			var closeHour = compHoursArr[2].replace(/\"/g, "");
			listI.classList.add('service', style, 'servicetip');
			listI.setAttribute("data-speed", speed);
			listI.setAttribute("data-type", type);
			listI.setAttribute("name", "vote");
			listI.setAttribute("draggable", "true");
			listI.setAttribute("ondragstart", "drag(event)");
			listI.setAttribute("ondrop", "drop(event)");
			listI.id = style + 'ID';
			testExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile', 'i');
			if (testExp.test(navigator.userAgent)) {} else {
				listI.addEventListener('click', clickShow);
			}
			var logo = document.createElement('IMG');
			logo.classList.add('logoService');
			logo.src = logoSrc;
			logo.setAttribute('draggable', 'false');
			listI.appendChild(logo);
			var info = document.createElement('DIV');
			info.classList.add('info', 'slideInRight');
			info.setAttribute('name', 'info');
			var title = document.createElement('DIV');
			title.classList.add('title', 'nameList');
			title.setAttribute('name', 'nameList');
			title.innerHTML = companyName;
            info.appendChild(title);
            			
			var price = document.createElement('DIV');
			price.classList.add('title', 'price');
			price.setAttribute('name', 'priceList');
			info.appendChild(price);
			var priceSecParaLow = document.createElement('DIV');
			priceSecParaLow.innerHTML = "<img src='/images/priceLow.png' class='priceLowicon'>";
			priceSecParaLow.classList.add('priceSection', 'Low');
			price.appendChild(priceSecParaLow);
			var priceSectAvg = document.createElement('DIV');
			priceSectAvg.classList.add('priceSection', 'Avg');
			priceSectAvg.innerHTML = "<img src='/images/priceAvg.png' class='priceAvgIcon'>";
			price.appendChild(priceSectAvg);
			var priceSectLow = document.createElement('DIV');
			priceSectLow.classList.add('priceSection', 'Low');
			priceSectLow.innerHTML = newPrice;
			price.appendChild(priceSectLow);
			var priceSecParaAvg = document.createElement('DIV');
			priceSecParaAvg.innerHTML = newAvgPrice;
			priceSecParaAvg.classList.add('priceSection', 'Avg');
			price.appendChild(priceSecParaAvg);
			var categSec = document.createElement('DIV');
			categSec.id = "catSecIconRep";
			categSec.classList.add('title', 'catSecCol');
			categSec.setAttribute('name', 'categList');
			info.appendChild(categSec);
			var hours = document.createElement('DIV');
			hours.classList.add('title', 'price', 'hoursList');
			hours.innerHTML = HOURS(openDays, openHour, closeHour);
			hours.id = "timeOpen";
			hours.setAttribute('name', 'hoursList');
			info.appendChild(hours);
			var goBut = document.createElement('A');
			goBut.classList.add('title', 'name', 'go');
			goBut.setAttribute('name', 'goLinkBut')
			goBut.id = "goButCols";
			goBut.addEventListener('click', clickCounter);
			goBut.setAttribute('href', link);
			goBut.setAttribute('target', '_parent');
			goBut.setAttribute('linkRef', style);
			goBut.innerHTML = "<img class='letgoBut' src='/images/thumbIconArrow.png'>";
			info.appendChild(goBut);
			testExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile', 'i');
			if (testExp.test(navigator.userAgent)) {
				console.log("Your device is a Mobile Device");
				var mobileDeleteOption = document.createElement('BUTTON');
				mobileDeleteOption.innerHTML = '&times;';
				mobileDeleteOption.id = "deleteMobileChip";
				mobileDeleteOption.classList.add('hideCompanyMobile', 'showChip');
				mobileDeleteOption.addEventListener('click', mobTrashAnim);
			} else {
				mobileDeleteOption = document.createElement('BUTTON');
				mobileDeleteOption.innerHTML = '&times;';
				mobileDeleteOption.id = "deleteMobileChip";
				mobileDeleteOption.classList.add('hideCompanyMobile');
				mobileDeleteOption.addEventListener('click', function() {
					console.log('hideMobile')
				});
			}
			var insertHtml = document.getElementById('serviceListSec');
			insertHtml.appendChild(listI);
			listI.appendChild(mobileDeleteOption);
			insertHtml.appendChild(info);
			var lis = insertHtml.getElementsByClassName('service', 'servicetip');
			var x, deleteMobileChip = document.getElementsByClassName('deleteMobileChip');
			var lisLen = lis.length;
			if (testExp.test(navigator.userAgent)) {
				console.log("Your device is a Mobile Device");
				if (appDC.resultTab.innerHTML === "OPCIONES" || appDC.resultTab.innerHTML === "OPTIONS") {
					var hideB = document.getElementById('hideBin');
					if (hideB.classList.length === 3) {
						console.log('is a mobile and on options page');
						for (x = 0; x < deleteMobileChip.length; x++) {
							deleteMobileChip[x].classList.remove('showChip');
							lis[x].removeEventListener('click', clickShow);
							deleteMobileChip[x].removeEventListener('click', mobTrashAnim);
						}
					} else if (hideB.classList.length === 4) {
						for (x = 0; x < deleteMobileChip.length; x++) {
							deleteMobileChip[x].classList.remove('showChip');
							lis[x].addEventListener('click', clickShow);
							if (lis[x].classList.contains('trashMob')) {
								lis[x].classList.add('hide');
							}
						}
					} else {
						lis[x].removeEventListener('click', clickShow);
					}
				} else if (appDC.resultTab.innerHTML === "VOTA" || appDC.resultTab.innerHTML === "VOTE") {
					console.log('in vote and ... a mobile device');
					var x, lis = document.getElementsByClassName('service', 'servicetip');
					dropDown();
				} else {
					console.log('not in options and ... need to dcheck');
				}
			} else {
				if (appDC.resultTab.innerHTML === "OPCIONES" || appDC.resultTab.innerHTML === "OPTIONS") {
					var hideB = document.getElementById('hideBin');
					if (hideB.classList.length === 3) {
						for (x = 0; x < deleteMobileChip.length; x++) {
							deleteMobileChip[x].classList.remove('showChip');
							lis[x].removeEventListener('click', clickShow);
							deleteMobileChip[x].removeEventListener('click', mobTrashAnim);
						}
					} else if (hideB.classList.length === 4) {
						for (x = 0; x < deleteMobileChip.length; x++) {
							deleteMobileChip[x].classList.remove('showChip');
							lis[x].addEventListener('click', clickShow);
							if (lis[x].classList.contains('trashMob')) {
								lis[x].classList.add('hide');
							}
						}
					} else {
						lis[x].removeEventListener('click', clickShow);
					}
				} else if (appDC.resultTab.innerHTML === "VOTA" || appDC.resultTab.innerHTML === "VOTE") {
					console.log('in vote and ... web mode');
					lis[x].addEventListener('click', voteCount);
					deleteMobileChip[x].classList.remove('showChip');
				} else {
					console.log('not in options or vote web mode... need to dcheck');
				}
			}
		});
	});
	testExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile', 'i');
	if (testExp.test(navigator.userAgent)) {
		console.log("Your device is a Mobile Device");
		console.log(navigator.userAgent);
		appDC.binRightSec.innerHTML = '';
		var binSec = document.createElement('DIV');
		binSec.classList.add('binSec');
		binSec.id = "binSection";
		appDC.binRightSec.appendChild(binSec);
		var binCloseButton = document.createElement('BUTTON');
		binCloseButton.classList.add('bin', 'three', 'chip');
		binCloseButton.id = "hideBin";
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
		binResetBut.innerHTML = "binReset";
		binResetBut.addEventListener('click', resetDrag);
		var chipImgReset = document.createElement('IMG');
		chipImgReset.src = '/images/transp.png';
		chipImgReset.id = "chipImgResetID";
		binResetBut.appendChild(chipImgReset);
		binSec.appendChild(binResetBut);
	} else {
		var x, lis = document.getElementsByClassName('service', 'servicetip');
		var lisLen = lis.length;
		for (x = 0; x < lisLen; x++) {
			lis[x].addEventListener('click', clickShow);
		}
	}
	dropDown();
}

function loadPromos() {
	var promoPage = document.getElementById("promoSectionRep");
	promoPage.innerHTML = '';
	var ref = firebase.database().ref().child("delkopro");
	var refPromo = ref.child("Promotions");
	var query = refPromo.orderByKey();
	query.once("value").then(function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
		
			var cardDiv = document.createElement('DIV');
			cardDiv.classList.add('card');
			var promoImg = document.createElement('IMG');
			promoImg.classList.add('mainImgPromo');
			var promoImgSrc = JSON.stringify(childSnapshot.val().imgSrc, null, 3);
			var miniCompanyLogo = JSON.stringify(childSnapshot.val().miniLogo, null, 3);
			var promoCompanyName = JSON.stringify(childSnapshot.val().Company, null, 3);
			var paraFrase = JSON.stringify(childSnapshot.val().paraText, null, 3);
			var paraText = paraFrase.replace(/\"/g, "");
			var promolinkRef = JSON.stringify(childSnapshot.val().link, null, 3);
			var promolink = promolinkRef.replace(/\"/g, "");
			var promoImgSrcRep = promoImgSrc.replace(/\"/g, "");
			var promoMiniLogo = miniCompanyLogo.replace(/\"/g, "");
			var promoCompanyName = promoCompanyName.replace(/\"/g, "");
			promoImg.src = promoImgSrcRep;
			cardDiv.appendChild(promoImg);
			var promoIcon = document.createElement('IMG');
			promoIcon.classList.add('miniLogo');
			promoIcon.src = promoMiniLogo;
			cardDiv.appendChild(promoIcon);
			var cardContainer = document.createElement('DIV');
			cardContainer.classList.add('cardContainer');
			cardContainer.innerHTML = promoCompanyName;
			cardDiv.appendChild(cardContainer);
			var cardText = document.createElement('P');
			cardText.innerHTML = paraText;
			cardText.classList.add('discoInfo');
			cardDiv.appendChild(cardText);
			var buttonDiv = document.createElement('DIV');
			buttonDiv.classList.add('buttonDiv');
			cardDiv.appendChild(buttonDiv);
			var cardButton = document.createElement('A');
			cardButton.classList.add('getStartedPromo');
			cardButton.id = "promoButtonText";
			cardButton.innerHTML = "GET IT NOW!";
			cardButton.setAttribute('href', promolink);
			cardButton.setAttribute('target', '_blank');
			buttonDiv.appendChild(cardButton);
			var promoPage = document.getElementById("promoSectionRep");
			promoPage.appendChild(cardDiv);
			console.log('elements added to promo page');
		});
	});
};

function clickCounter() {
	if (appDC.resultTab.innerHTML === "OPCIONES" || appDC.resultTab.innerHTML === "OPTIONS") {
		console.log(this);
		var linkRef = this.getAttribute('linkRef');
		console.log(linkRef);
		var linkFBDBRef = firebase.database().ref().child("ClickCount/" + linkRef);
		linkFBDBRef.transaction(function(currentAge) {
			return currentAge + 1;
			console.log('click counter worked!!');
		});
	} else {
		console.log('user not on links page');
	}
}