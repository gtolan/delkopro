


function pageChange(page){

    
//    var currentSpeedImg = document.getElementById('currentSpeedIcon');
//        currentSpeedImg.style.display = "none";
//    var currntTypeImg = document.getElementById('currentTypeIcon');
//        currntTypeImg.style.display = "none";
//    var resetBut = document.getElementById("resetOptButton");
//        resetBut.style.display = "none";
  
    console.log(this.innerHTML);
    appDC.serviceListSec.innerHTML = '';
//    loadResults();
//    reset();
    

    var x, listItemVote = appDC.serviceListSec.getElementsByTagName('LI');
        for(x = 0; x < listItemVote.length;x++){
            listItemVote[x].addEventListener('click', voteCount);
            listItemVote[x].removeEventListener('click', clickShow);
        }
     
    
    var centerLogo = document.getElementsByClassName('centerLogo');
    centerLogo[0].innerHTML = "DelkoPro";
    
    var nextArrow = document.getElementsByClassName('next')[0];
    var prevArrow = document.getElementsByClassName('prev')[0];
        prevArrow.style.display = "none";
        nextArrow.style.display = "none";
    
    
    var binSection= document.getElementById('binSection');
//     appDC.logOutButton.style.display = "none";
     appDC.footer.style.display = "block";
     appDC.blogSection.style.display = "none";
     appDC.SPEED.classList.add('tabcConactive');
     appDC.TYPE.classList.remove('tabcConactive');
     appDC.RESULT.classList.remove('tabcConactive');
     appDC.serviceListSec.classList.remove('vote');
     appDC.speedCont.style.display = "block";
     appDC.choosePage.style.display = "none";
     appDC.aboutPage.style.display = "none";
     appDC.promoPage.style.display = "none";
     appDC.termsPage.style.display = "none";
     appDC.contactPage.style.display = "none";
     appDC.typeTab.style.display = "block";
     appDC.typeTab.classList.remove('active');
     
     appDC.speedTab.style.display = "block";
     appDC.speedTab.classList.add('active');
    
     appDC.slideSh[0].style.opacity = "1";
     appDC.slideSh[0].style.filter = "grayscale(0%)";
     appDC.slideSh[0].classList.remove('blur');
     appDC.infoTitleBar.style.opacity = 0;
    
    var iconToolCat = document.getElementById('iconToolCat');
    var iconToolSpeed = document.getElementById('iconToolSpeed');   
 
        iconToolSpeed.style.display = "none";
        iconToolCat.style.display = "none";
    
    
     appDC.resultTab.classList.remove('active', 'tabVote');
    
     var lis = appDC.serviceListSec.getElementsByTagName('LI');
     appDC.serviceListSec.classList.remove('vote');
     for(x = 0;x < lis.length;x++){
        lis[x].classList.remove('vote');
        lis[x].style.paddingBottom = "0px";
        lis[x].children[0].classList.remove('vote');
         console.log('this executed padding removal')
        }
    

     
        
if(page === 'Contact' || page === 'Contacto' ){

       appDC.contactPage.style.display = "block";
       appDC.mainIcon.click();
       appDC.slideSh[0].style.opacity = ".2";
       appDC.footer.style.marginTop = "1px";
        if(appDC.binRightSec === 'null'){
            console.log('im a bin thats not null');
        }else {
           appDC.binRightSec.style.display = 'none';
        }
        contactPage();
    if(page === 'Contact') {
        centerLogo[0].innerHTML = "Contact DelkoPro"
    }else {
        centerLogo[0].innerHTML = "DelkoPro";
    }
   }
else if(page === 'Terms of Service' || page === 'Terminos de Servico'){
      
       appDC.slideSh[0].style.opacity = ".2";
       appDC.termsPage.style.display = "block";
       appDC.footer.style.marginTop = "1px";
       appDC.mainIcon.click();
        if(appDC.binRightSec === 'null'){
            console.log('im a bin thats not null');
        }else {
           appDC.binRightSec.style.display = 'none';
        }
            if(page === 'Terms of Service') {
                centerLogo[0].innerHTML = "Terms of Service"
            }else if(page === 'Terminos de Servico'){
                centerLogo[0].innerHTML = "Terminos de Servico";
            }else {
                centerLogo[0].innerHTML = "DelkoPro";
            }
    termsOfService();
   }
else if(page === 'Offers and Promotions' || page === 'Ofertas y Promociones'){
//       loadPromos();
       appDC.promoPage.style.display = "block";
       appDC.mainIcon.click();
       appDC.slideSh[0].style.opacity = ".2";
        if(appDC.binRightSec === 'null'){
            console.log('im a bin thats not null');
        }else {
           appDC.binRightSec.style.display = 'none';
        }
//       setTimeout(pageAdjust,100); 
            if(page === 'Offers and Promotions') {
                centerLogo[0].innerHTML = "Offers and Promotions"
            }else if(page === 'Ofertas y Promociones'){
                centerLogo[0].innerHTML = "Ofertas y Promociones";
            }else {
                centerLogo[0].innerHTML = "DelkoPro";
            }
    appDC.footer.style.marginTop = "0px";
   }
else if(page === 'Vote' || page === 'Vota'){
appDC.serviceListSec.innerHTML = '';
loadVoteList();
appDC.infoTitleBar.classList.remove('fadeIn');
       prevArrow.style.display = "block";
       nextArrow.style.display = "block";
        if(appDC.binRightSec === 'null'){
            console.log('im a bin thats not null');
        }else {
           appDC.binRightSec.style.display = 'none';
        }
       appDC.choosePage.style.display = "block";
       appDC.mainIcon.click();
       appDC.TYPE.style.display = "none";
       appDC.SPEED.style.display = "none";
       appDC.SPEED.classList.remove('tabcConactive');
       appDC.TYPE.classList.remove('tabcConactive');
       appDC.typeTab.style.display = "none";
       appDC.speedTab.style.display = "none";
       appDC.RESULT.classList.add('tabcConactive');
       appDC.speedCont.style.display = "none";
       appDC.resultTab.classList.add('active', 'tabVote');
            if(page === 'Vote') {
                appDC.resultTab.innerHTML = "VOTE";
                centerLogo[0].innerHTML = "DelkoPro Vote"
            }else if(page === 'Vota'){
                centerLogo[0].innerHTML = "DelkoPro Vota";
                appDC.resultTab.innerHTML = "VOTA";
            }else {
                centerLogo[0].innerHTML = "DelkoPro";
                appDC.resultTab.innerHTML = "VOTA";
            }
       testExp = new RegExp('Android|webOS|iPhone|iPad|' +
    		       'BlackBerry|Windows Phone|'  +
    		       'Opera Mini|IEMobile|Mobile' , 
    		      'i');
       var x;
       var listItemVote = appDC.serviceListSec.getElementsByClassName('service', 'servicetip');
    console.log(listItemVote);
    var x, deleteMobileChip = document.getElementsByClassName('deleteMobileChip');
        for(x = 0; x < listItemVote.length;x++){
        
            listItemVote[x].addEventListener('click', voteCount);    
            listItemVote[x].setAttribute('type', 'radio');
            listItemVote[x].setAttribute('name', 'vote'); 
            listItemVote[x].setAttribute('value', x); 
            var val = listItemVote[x].getAttribute('value');
            console.log(val);
//            listItemVote[x].removeEventListener('click', clickShow);
            if(listItemVote[x].classList.contains('vote')){
               toast('Thank You! This is the ...')
               listItemVote[x].removeEventListener('click', voteCount);
               } else {
            listItemVote[x].addEventListener('click', voteCount);
            }
            
        }               
////     getVote(this.value);         runVoteScore();   voteCount(this.value);
               
    

   }
else if(page === 'Blog' || page === 'Blog'){
    appDC.blogSection.style.display = "block";
    appDC.mainIcon.click();
    appDC.slideSh[0].style.opacity = ".4";
    appDC.slideSh[0].style.filter = "grayscale(100%)";
            if(appDC.binRightSec === 'null'){
            console.log('im a bin thats not null');
        }else {
           appDC.binRightSec.style.display = 'none';
        }
    if(page === 'Blog') {
                centerLogo[0].innerHTML = "Blog"
            }else if(page === 'Sobre Nosotros'){
                centerLogo[0].innerHTML = "Blog";
            }else {
                centerLogo[0].innerHTML = "DelkoPro";
            }
    loadBlogPosts();
}
else if(page === 'Company Profiles') {
     if(appDC.binRightSec === 'null'){
            console.log('im a bin thats not null');
        }else {
           appDC.binRightSec.style.display = 'none';
        }
//        appDC.aboutPage.style.display = "block";
        appDC.mainIcon.click();
        appDC.slideSh[0].style.opacity = ".2";
        appDC.footer.style.marginTop = "0px";
//        window.onscroll = testScroll;
            if(page === 'Company Profiles') {
                centerLogo[0].innerHTML = "Company Profiles";
            }else {
                centerLogo[0].innerHTML = "DelkoPro";
            }
        proflesPageLoad();
    console.log('profiles page loaded');
}  
else if(page === 'About' || page === 'Sobre Nosotros'){     
        if(appDC.binRightSec === 'null'){
            console.log('im a bin thats not null');
        }else {
           appDC.binRightSec.style.display = 'none';
        }
        appDC.aboutPage.style.display = "block";
        appDC.mainIcon.click();
        appDC.slideSh[0].style.opacity = ".2";
        appDC.footer.style.marginTop = "0px";
//        window.onscroll = testScroll;
            if(page === 'About') {
                centerLogo[0].innerHTML = "About DelkoPro"
            }else if(page === 'Sobre Nosotros'){
                centerLogo[0].innerHTML = "Sobre Nosotros";

            }else {
                centerLogo[0].innerHTML = "DelkoPro";
            }
        AboutPageLoad();
   }
else if(page === 'Home' || page === 'Inicio' ){
    reset();
//    loadResults();
        if(appDC.binRightSec === 'null'){
            console.log('im a bin thats not null');
        }else {
           appDC.binRightSec.style.display = 'block';
        }
        iconToolSpeed.style.display = "block";
        iconToolCat.style.display = "block";
//        currntTypeImg.style.display = "inline-block";
//        currentSpeedImg.style.display = "inline-block";
//        resetBut.style.display = "inline-block";
        prevArrow.style.display = "block";
        nextArrow.style.display = "block";
        appDC.choosePage.style.display = "block";
        appDC.mainIcon.click();
        var lis = appDC.serviceListSec.getElementsByTagName('LI');
        appDC.serviceListSec.classList.remove('vote');

             for(y = 0;y < lis.length;y++) {
                 lis[y].classList.remove('vote');
                 lis[y].firstElementChild.classList.remove('vote');
                 lis[y].style.paddingRight = "0px";

             }
    if(binSection !== null){
        binSection.style.display = "block";
    } else {
        console.log('bin section not needed here');
    }
            if(page === 'Home') {
                centerLogo[0].innerHTML = "DelkoPro";
                appDC.resultTab.innerHTML = "OPTIONS";
            }else if(page === 'Inicio'){
                centerLogo[0].innerHTML = "DelkoPro";
                appDC.resultTab.innerHTML = "OPCIONES";
            }else {
                centerLogo[0].innerHTML = "DelkoPro";
                appDC.resultTab.innerHTML = "OPCIONES";
            }
   }
    

    
else {
        appDC.choosePage.style.display = "block";
        appDC.mainIcon.click();
   }
}

appDC.aboutLink.addEventListener("click", function(){
    pageChange('About')
}, false);


appDC.homeLink.addEventListener("click", function(){
    pageChange('Home')
}, false);
appDC.termsLink.addEventListener("click", function(){
    pageChange('Terms of Service')
}, false);

appDC.contactLink.addEventListener("click", function(){
    pageChange('Contact')
}, false);

appDC.promoLink.addEventListener("click", function(){
    pageChange('Offers and Promotions')
}, false);


appDC.voteLink.addEventListener("click", function(){
    pageChange('Vote')
}, false);

appDC.blogLink.addEventListener("click", function(){
    pageChange('Blog')
}, false);

appDC.promoIcon.addEventListener("click", function(){
    pageChange('Offers and Promotions')
}, false);

appDC.voteIcon.addEventListener("click", function(){
    pageChange('Vote')
}, false);

appDC.notificationsIcon.addEventListener('click', notificationModal);
appDC.contactIcon.addEventListener("click", function(){
    pageChange('Contact')
}, false);

appDC.blogIcon.addEventListener("click", function(){
    pageChange('Blog')
}, false);

appDC.aboutIcon.addEventListener("click", function(){
    pageChange('About')
}, false);


function removeAnimation() {
  
        appDC.aboutSpeed.classList.remove('speedAddMob');
        appDC.categAdd.classList.remove('categAddMob');
        appDC.ideaAdd.classList.remove('ideaAddMob');
        appDC.resultAddOne.classList.remove('Mob');
        appDC.resultAddTwo.classList.remove('Mob');
        appDC.resultAddThree.classList.remove('Mob');
        appDC.mach.classList.remove('machineShakeMob');
}

//
//function testScroll(ev){
//    if(window.pageYOffset > 100 || window.pageXOffset < 900) {
//  
//        
//        appDC.aboutSpeed.classList.add('speedAddMob');
//        appDC.categAdd.classList.add('categAddMob');
//        appDC.ideaAdd.classList.add('ideaAddMob');
//        appDC.resultAddOne.classList.add('Mob');
//        appDC.resultAddTwo.classList.add('Mob');
//        appDC.resultAddThree.classList.add('Mob');
//        appDC.mach.classList.add('machineShakeMob');
//
//    
//    }
//    setTimeout(removeAnimation, 6800);
//}

function voteCount() {
if (appDC.resultTab.innerHTML === "VOTA" || appDC.resultTab.innerHTML ===  "VOTE") {

var hasVoted = localStorage.getItem('hasVoted');
    console.log(hasVoted);
    if(hasVoted === 'true'){
    console.log(this.id);
    chosenVote = this.classList[1];
    chosenVote = chosenVote.toString();
    chosenVote.replace(/'ID'/g, "");
    console.log(chosenVote);
  var voteRef = firebase.database().ref().child("Votes");  
    voteRef.once('value')
        .then(function(snapshot) {
        var snapName = snapshot.key;
        var snapVal = snapshot.val();
        console.log(snapVal); // show object
        var myObj = snapVal;
        var companyArr = [];
        var voteArr = [];
        var listArr = [];
        var listIDArr = [];
var y, listArr = document.getElementsByClassName('service','servicetip');
for (x in snapVal) {
     
    var lisId = x + 'ID';
    var listArId = listArr;
    var padding = snapVal[x] * 5;
    document.getElementById(lisId).style.paddingRight = padding + "px";
    
    
    appDC.serviceListSec.classList.add('vote');
    }
        

        var lang = localStorage.getItem('languageChoice');
        if(lang === 'Espanol'){
        toast('Gracias, Ya has votado, aqui tiene el resultado mas reciente');
        } else if (lang === 'English'){
        toast('Thank you! Your have voted, here is the latest result');   
        } else {
        toast('Gracias, Ya has votado, aqui tiene el resultado mas reciente');  
        }
        
        
            setTimeout(function(){       
             for(y = 0;y < listArr.length;y++) {
                 listArr[y].classList.add('vote');
                 listArr[y].firstElementChild.classList.add('vote');
                 listArr[y].removeEventListener('click', voteCount);
             }
            }, 200 );

    chosenCompa = [chosenVote];    
    currentRank = snapVal[chosenVote];
    console.log(currentRank);
    console.log(chosenCompa);

}); 
    
    
    
    
    }
    else if(hasVoted === 'false' || hasVoted === 'null'){
        
         var lang = localStorage.getItem('languageChoice');
            
        
        if(lang === 'Espanol'){
        toast('Su voto ha sido an');
        } else if (lang === 'English'){
        toast('Your vote has been added, here is the result');   
        } else {
        toast('Su voto ha sido an');    
        }
        localStorage.setItem('hasVoted', true);
    
    
    
    console.log(this.id);
//
//    console.log(chosenVote);
    chosenVote = this.classList[1];
    chosenVote = chosenVote.toString();
    chosenVote.replace(/'ID'/g, "");
    console.log(chosenVote);
  var voteRef = firebase.database().ref().child("Votes");  
    voteRef.once('value')
        .then(function(snapshot) {
        var snapName = snapshot.key;
//          console.log(snapName);
        var snapVal = snapshot.val();
        console.log(snapVal); // show object
        var myObj = snapVal;
        var companyArr = [];
        var voteArr = [];
        var listArr = [];
        var listIDArr = [];
var y, listArr = document.getElementsByClassName('service');
        console.log(listArr);
for (x in snapVal) {

    var lisId = x + 'ID';
    var listArId = listArr;
//    console.log(lisId);
    console.log(lisId);
//    console.log(listArId);
    var padding = snapVal[x] * 5;
    
    document.getElementById(lisId).style.paddingRight = padding + 'px';
    appDC.serviceListSec.classList.add('vote');
    
}
 for(y = 0;y < listArr.length;y++) {
     listArr[y].classList.add('vote');
     listArr[y].firstElementChild.classList.add('vote');
     
		
 }

    chosenCompa = [chosenVote];    
    currentRank = snapVal[chosenVote];
    console.log(currentRank);
    console.log(chosenCompa);
//    return currentRank;
        

        

    var voteRef = firebase.database().ref().child("Votes/" + chosenCompa);
        console.log(voteRef);
        console.log('Now running Fbase transaction...');
    voteRef.transaction(function(currentAge) {
   return currentAge + 1;
        console.log('It worked!!');
}); 
    
        
});
}
    

    else {
            console.log('I am not sure if you voted previously')
        }
}
}












///////////////




function termsOfService() {
    


document.getElementById('sectionOneTerms').innerHTML = "OVERVIEW";

document.getElementById('sectionOneTerms').nextElementSibling.innerHTML = "<p>This website is operated by DelkoPro. Throughout the site, the terms “we”, “us” and “our” refer to DelkoPro. DelkoPro offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.<br><br>By visiting our site and/ or purchasing something from us, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply  to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.<br><br>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.<br><br>Any new features or tools which are added to the current store shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.<br><br>Our store is hosted on Firebase. They provide us with an SSL to serve our site securley, that allows us to provide thid tool to you.</p>"


document.getElementById('sectionTwoTerms').innerHTML = "SITE TERMS";
document.getElementById('sectionTwoTerms').nextElementSibling.innerHTML = "<p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.<br><br>You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).<br><br>You must not transmit any worms or viruses or any code of a destructive nature.<br><br>A breach or violation of any of the Terms will result in an immediate termination of your Services.<br><br></p>"

document.getElementById('sectionThreeTerms').innerHTML = "GENERAL CONDITIONS";

document.getElementById('sectionThreeTerms').nextElementSibling.innerHTML = "<p>We reserve the right to refuse service to anyone for any reason at any time.<br><br>You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.<br><br>You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the service is provided, without express written permission by us.<br><br>The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>"

document.getElementById('sectionFourTerms').innerHTML = "ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION";

document.getElementById('sectionFourTerms').nextElementSibling.innerHTML = "<p>We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.<br><br>This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.</p>"



document.getElementById('sectionFiveTerms').innerHTML = "MODIFICATIONS TO THE SERVICE AND PRICES";

document.getElementById('sectionFiveTerms').nextElementSibling.innerHTML ="<p>Prices for services are subject to change without notice.<br><br>We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.<br><br>We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.</p>";


document.getElementById('sectionSixTerms').innerHTML = "PRODUCTS OR SERVICES";

document.getElementById('sectionSixTerms').nextElementSibling.innerHTML = "<p>Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.<br><br>We have made every effort to display as accurately as possible the colors and images of the services that appear on this website. We cannot guarantee that your computer monitor's display of any color will be accurate.<br><br>We reserve the right, but are not obligated, to limit this Service to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or service made on this site is void where prohibited.<br><br>We do not warrant that the quality of any products, services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.</p>";


document.getElementById('sectionSevenTerms').innerHTML = "OPTIONAL TOOLS";

document.getElementById('sectionSevenTerms').nextElementSibling.innerHTML = "We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.<br><br>You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.<br><br>Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).<br><br>We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.</p>";


document.getElementById('sectionEightTerms').innerHTML = "THIRD-PARTY LINKS";

document.getElementById('sectionEightTerms').nextElementSibling.innerHTML = "Certain content, products and services available via our Service may include materials from third-parties.<br><br>Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.<br><br>We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.</p>";


document.getElementById('sectionNineTerms').innerHTML = "USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS";

document.getElementById('sectionNineTerms').nextElementSibling.innerHTML = "If, at our request, you send certain specific submissions (for example contest entries) or without a request from us you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us. We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.<br><br>We may, but have no obligation to, monitor, edit or remove content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party’s intellectual property or these Terms of Service.<br><br>You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website. You may not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead us or third-parties as to the origin of any comments. You are solely responsible for any comments you make and their accuracy. We take no responsibility and assume no liability for any comments posted by you or any third-party.</p>";


//document.getElementById('sectionTenTerms').innerHTML = "PERSONAL INFORMATION";
//
//document.getElementById('sectionTenTerms').nextElementSibling.innerHTML = "<p>Your submission of personal information through the store is governed by our Privacy Policy. To view our Privacy Policy.</p>";



document.getElementById('sectionElevenTerms').innerHTML = "ERRORS, INACCURACIES AND OMISSIONS";

document.getElementById('sectionElevenTerms').nextElementSibling.innerHTML = "<p>Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).<br><br>We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.</p>";


document.getElementById('sectionTwelveTerms').innerHTML = "PROHIBITED USES";

document.getElementById('sectionTwelveTerms').nextElementSibling.innerHTML = "<p>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.</p>";


document.getElementById('sectionThirteenTerms').innerHTML = "DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY";

document.getElementById('sectionThirteenTerms').nextElementSibling.innerHTML = "<p>We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.<br><br>We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.<br><br>You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.<br><br>You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.<br><br>In no case shall DelkoPro, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from your use of any of the service or any products procured using the service, or for any other claim related in any way to your use of the service or any product, including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of the use of the service or any content (or product) posted, transmitted, or otherwise made available via the service, even if advised of their possibility. Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.</p>";


document.getElementById('sectionFourteenTerms').innerHTML = "INDEMNIFICATION";

document.getElementById('sectionFourteenTerms').nextElementSibling.innerHTML = "<p> You agree to indemnify, defend and hold harmless DelkoPro and our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of your breach of these Terms of Service or the documents they incorporate by reference, or your violation of any law or the rights of a third-party.</p>";

document.getElementById('sectionFifteenTerms').innerHTML = "SEVERABILITY";

document.getElementById('sectionFifteenTerms').nextElementSibling.innerHTML = "In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.</p>";



document.getElementById('sectionSixteenTerms').innerHTML = "TERMINATION";

document.getElementById('sectionSixteenTerms').nextElementSibling.innerHTML = "The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.<br><br>These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.<br><br>If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).</p>";



document.getElementById('sectionSeventeenTerms').innerHTML = "ENTIRE AGREEMENT";

document.getElementById('sectionSeventeenTerms').nextElementSibling.innerHTML = "The failure of us to exercise or enforce any right or provision of these Terms of Service shall not constitute a waiver of such right or provision.<br><br>These Terms of Service and any policies or operating rules posted by us on this site or in respect to The Service constitutes the entire agreement and understanding between you and us and govern your use of the Service, superseding any prior or contemporaneous agreements, communications and proposals, whether oral or written, between you and us (including, but not limited to, any prior versions of the Terms of Service).<br><br>Any ambiguities in the interpretation of these Terms of Service shall not be construed against the drafting party.</p>";

document.getElementById('sectionEighteenTerms').innerHTML = "GOVERNING LAW";

document.getElementById('sectionEighteenTerms').nextElementSibling.innerHTML = "<p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Barcelona, Spain, Barcelona, CT, 08002, Spain.</p>";

document.getElementById('sectionNineteenTerms').innerHTML = "CHANGES TO TERMS OF SERVICE";

document.getElementById('sectionNineteenTerms').nextElementSibling.innerHTML = "<p>You can review the most current version of the Terms of Service at any time at this page.<br><br>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.</p>";



document.getElementById('sectionTwentyTerms').innerHTML = "CONTACT INFORMATION";

document.getElementById('sectionTwentyTerms').nextElementSibling.innerHTML = "Questions about the Terms of Service should be sent to us at deliveryComparePro@gmail.com.";

}


