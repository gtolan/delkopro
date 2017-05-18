


function messagingAuth(){
    

    
const state = {
    email: '',
    password: '',
}
    var contactImages = document.getElementById('contactFormImages');
    var anonIcon = document.createElement('IMG');
        anonIcon.classList.add('logoutIcon', 'Anon');
        anonIcon.alt = "logout of delkopro anonymous icon";
        anonIcon.src = "/images/logoutIconAnon.png";
        anonIcon.id = "buttonAnonIcon";
        contactImages.appendChild(anonIcon);


    appDC.anonMessageBut.addEventListener('click', e=> {
    event.preventDefault();
    firebase.auth().signInAnonymously();
    console.log('signed in anon');
    appDC.anonMessageBut.style.display = "none";
    appDC.messageAnonSection.style.display = "block";
    appDC.sendAnonMessageBut.style.display = "block";
    anonIcon.style.display = "block";
//    appDC.loginBut.style.display = "block";
    appDC.anonMessageBut.style.display = "none";

})

//    appDC.loginTab.innerHTML="Login";
//    appDC.signUpTab.innerHTML="Sign Up";
//    appDC.signUpPassword.innerHTML="<b>Password</b>";
//    appDC.anonTab.innerHTML="Anonymous";
//    appDC.signUpSubmit.innerHTML=" Sign Up";
//    appDC.anonMessageBut.innerHTML="SIGN IN ANONYMOUSLY";
//    appDC.sendAnonMessageBut.innerHTML="SEND ANONYMOUSLY";
//    appDC.sendUserMessageButton.innerHTML="Send Message";
//    appDC.loginBut.innerHTML="Login";
//    appDC.loginLabelPassword.innerHTML="<b>Password</b>";
//    appDC.passLogin.setAttribute('placeholder','Enter Password');
//    appDC.newUserPwd.setAttribute('placeholder','Password');
    
//appDC.loginBut.addEventListener('click', event => {
//    event.preventDefault();
//    console.log('loginBut Submitted');
//    const email = appDC.emailLogin.value || state.email;
//    const password = appDC.passLogin.value || state.password;
//    const message = appDC.messageLog.value;
////    appDC.emailNotifForm.reset();
//    console.log(email, password, message);
//    firebase.auth().signInWithEmailAndPassword(email, password)
//        .then(user => {
//        
//        state.email = email;
//        state.password = password;
//        var uid = user.uid;
//        toast("You're Successfully Logged In");
//        appDC.loginForm.reset();
//        appDC.emailLoginSectionNofications.style.display = "none";
//        appDC.loginBut.style.display = "block";
//        appDC.sendUserMessageButton.style.display = "block";
//    })
//    .catch(error => {
//        console.log(error);
//        var lang = localStorage.getItem('languageChoice');
//        if(lang === "English"){
//        toast("Login failed, Please try again");
//        } else if (lang === "Espanol"){
//        toast("Login failed, Please try againES");    
//        }else {
//        toast("Login failed, Please try againES");    
//        }
//    })
//});




//appDC.notifLoginBut.addEventListener('click', event => {
//    event.preventDefault();
//    console.log('loginBut Submitted');
//    const email = appDC.emailLogin.value || state.email;
//    const password = appDC.passLogin.value || state.password;
//    const message = appDC.messageLog.value;
////    appDC.emailNotifForm.reset();
//    console.log(email, password, message);
//    firebase.auth().signInWithEmailAndPassword(email, password)
//        .then(user => {
//        
//        state.email = email;
//        state.password = password;
//        var uid = user.uid;
//        toast("You're Successfully Logged In");
//        appDC.loginForm.reset();
//        appDC.emailLoginSectionNofications.style.display = "none";
//        appDC.loginBut.style.display = "block";
//        appDC.sendUserMessageButton.style.display = "block";
//    })
//    .catch(error => {
//        console.log(error);
//        var lang = localStorage.getItem('languageChoice');
//        if(lang === "English"){
//        toast("Login failed, Please try again");
//        } else if (lang === "Espanol"){
//        toast("Login failed, Please try againES");    
//        }else {
//        toast("Login failed, Please try againES");    
//        }
//    })
//});
//
//appDC.googleAuthBut.addEventListener('click', googleAuth);
//appDC.googleAuthButLogin.addEventListener('click', googleAuth);
//appDC.googleAuthButSignUp.addEventListener('click', googleAuth);

//function googleAuth(){
//  // Sign in Firebase using popup auth and Google as the identity provider.
//  var auth = firebase.auth();
//  var provider = new firebase.auth.GoogleAuthProvider();
//  auth.signInWithPopup(provider).then(function(result) {
//  // This gives you a Google Access Token. You can use it to access the Google API.
//  var token = result.credential.accessToken;
//  // The signed-in user info.
//  var user = result.user;
//    console.log(user.email);
//       console.log(user.providerId);
//      appDC.loginTab.click();
//      appDC.sendUserMessageButton.style.display = "block";
//      appDC.loginBut.style.display = "none";
//      appDC.googleSignedIn.style.display = "block";
//
//  // ...
//}).catch(function(error) {
//  // Handle Errors here.
//  var errorCode = error.code;
//  var errorMessage = error.message;
//  // The email of the user's account used.
//  var email = error.email;
//  // The firebase.auth.AuthCredential type that was used.
//  var credential = error.credential;
//  // ...
//});
////  var userName = user.displayName;
////    console.log(userName);
//}
//
//
////
////appDC.sendGoogleauthMessageButton.addEventListener('click', sendAuthMessage);
//  
//event.preventDefault();
//var user = firebase.auth().currentUser;
//    
//if (user) {
//    console.log(user.email);
//    firebase.database().ref('messages').push({
//            message, uid, email,
//        });
//        toast("You're message has been sent");
//        appDC.loginForm.reset();

    
//    
//   
    
appDC.sendUserMessageButton.addEventListener('click', event => {
    event.preventDefault();
    firebase.auth().signInAnonymously();
    toast('Your message has been sent /:)')
    console.log('loginBut Submitted and message sent');
    //login Anon
//    var user = firebase.auth().currentUser;
//    console.log(user);
//    if (user) {

        const email = appDC.emailLogin.value;
        const message = appDC.messageLog.value;
        const subject = appDC.messageLogsubject;

        console.log(email, message, subject);

        firebase.database().ref('messages').push({
                message, email,
            });
        appDC.loginForm.reset();
 



    
    
});


//
//firebase.auth().onAuthStateChanged(firebaseUser => {
////    var isAnonymous = firebaseUser.isAnonymous;
////    appDC.buttonAnonIcon.style.display = "none";
//   
//    if(firebaseUser) {
//        
//        appDC.logOutButton.style.display = "block";
//        console.log(firebaseUser.uid + 'user id');
//        console.log(firebaseUser.isAnonymous + 'anon val');
//        var isAn = firebaseUser.isAnonymous;
//        console.log(isAn);
//
//        
//        if(!isAn){
//            appDC.messageLoginSection.style.display = "block";
//            appDC.emailLoginSection.classList.add('hideLogin');
//            appDC.anonMessageBut.style.display = "block";
//            appDC.messageAnonSection.style.display = "none";
//            appDC.sendAnonMessageBut.style.display = "none";
//            appDC.buttonAnonIcon.style.display = "none";
//            
////            toast("You're Successfully Logged In");
//        }    
//
//       else if(isAn){
//            appDC.anonMessageBut.style.display = "none";
//            appDC.messageAnonSection.style.display = "block";
//            appDC.sendAnonMessageBut.style.display = "block";
//           appDC.logOutButton.style.display = "block !important";
////            appDC.anonMessageBut.innerHTML = "Send Anonymous Message";
//           appDC.buttonAnonIcon.style.display = "block";
//            toast("Anonymous Access granted");
//           
//
//        }
//        else {
//            console.log('neither anon or unanon');
////            appDC.logOutButton.style.display = "block";
//            appDC.messageAnonSection.style.display = "none";
//      
//        }
//    
//        
//    }
//    
//    else{
////        console.log('not logged in');
//        
//        appDC.emailLoginSection.classList.remove('hideLogin');
////        appDC.logOutButton.style.display = "none";
//        appDC.loginBut.innerHTML = "Log In";
//        appDC.logOutButton.style.display = "none";
//        appDC.messageAnonSection.style.display = "none";
////        appDC.anonMessageBut.innerHTML = "Sign in Anonymously";
//    }
//});
//
//////////////////////////////////////
////var user = firebase.auth().currentUser;
////
////if (user) {
////  // User is signed in.
////} else {
////  // No user is signed in.
//
////////////////////////////////////
//
//          
//          
//          
//
//var signUpSubmit = document.getElementById('signUpSubmit');
//var formSignUpEmail = document.getElementById('newUserEmail');
//var formSignUpPwd = document.getElementById('newUserPwd');
//signUpSubmit.addEventListener('click', event => {
//    event.preventDefault();
//    console.log('sign up user Submitted');
//    const email = formSignUpEmail.value || state.email;
//    const password = formSignUpPwd.value || state.password;
//
//    console.log(email, password);
//    firebase.auth().createUserWithEmailAndPassword(email, password)
//        .then(user => {
//        state.email = formSignUpEmail;
//        state.password = formSignUpPwd;
//        
//        toast("You Successfully signed up");
//        appDC.signUpForm.reset();
//        appDC.loginTab.click();
//        appDC.loginBut.style.display = "none";
//        appDC.sendUserMessageButton.style.display = "block";
//        firebase.auth().signInWithEmailAndPassword(email, password)
//        .then(user => {
//        
//        state.email = formSignUpEmail;
//        state.password = formSignUpPwd;
//        toast("You're Successfully Logged In");
//        appDC.loginForm.reset();
//        appDC.loginBut.style.display = "block";
//        appDC.sendUserMessageButton.style.display = "block";
//        appDC.emailLoginSection.style.display = "none";
//    })
//    .catch(error => {
//        console.log(error);
//        var lang = localStorage.getItem('languageChoice');
//        if(lang === "English"){
//        toast("Login failed, Please try again");
//        } else if (lang === "Espanol"){
//        toast("Login failed, Please try againES");    
//        }else {
//        toast("Login failed, Please try againES");    
//        }
//    })
//    })
//    .catch(error => {
//        console.log(error);
//    })
//    
//});


//
//appDC.logOutButton.addEventListener('click', event => {
//    event.preventDefault();
//    const auth = firebase.auth();
//    console.log('logged user Out');
//    auth.signOut();
//    appDC.loginBut.style.display = "block";
//    appDC.logOutButton.style.display = "none";
//    appDC.sendUserMessageButton.style.display = "none";
//    appDC.anonMessageBut.style.display = "block";
//    appDC.sendAnonMessageBut.style.display = "none";
//    appDC.googleSignedIn.style.display = "none";
//    appDC.buttonAnonIcon.style.display = "none";            
//    appDC.messageAnonSection.style.display = "none";
//    var lang = localStorage.getItem('languageChoice');
//    if(lang === "Espanol"){
//        toast('Logged outES');
//    } else if(lang === "English"){
//        toast('Logged Out');
//    } else {
//        toast('Logged outESFallback');
//    }
//    
//});

//

//firebase.auth().onAuthStateChanged(function(user) {
//appDC.sendAnonMessageBut.style.display = "none";
//appDC.logOutButton.style.display = "none"; 
//appDC.googleAuthButSignUp.style.display = "block";
//appDC.googleAuthButLogin.style.display = "block";
//  if (user) {
//    appDC.logOutButton.style.display = "block";  
//    appDC.googleAuthButSignUp.style.display = "none";
//    appDC.googleAuthButLogin.style.display = "none";
//    var isAn = user.isAnonymous;
//      console.log(isAn); 
//    // User is signed in.
//      console.log(user)
//      console.log(user.providerId);
//      var provider = user.providerId;
//      appDC.notifcationLoginSection.style.display = "none";
//      appDC.toggleSubscriptionsButton.style.display = "block";
//      
//      
//      
//    var user = firebase.auth().currentUser;
//
//if (user != null) {
//  user.providerData.forEach(function (profile) {
//   var newAuthprovider =  profile.providerId; 
//   var newAuthphoto = profile.photoURL;
//      
//   
//  
//      
// 
//      console.log(newAuthprovider);
//      console.log(provider);
//      appDC.toggleSubscriptions.style.display = "block";
//      appDC.buttonAnonIcon.style.display = "none";
//      appDC.emailLoginSection.style.display = "none";
//      appDC.loginBut.style.display = "none"
//      appDC.sendUserMessageButton.style.display = "block";
//      appDC.messageLog.style.display = "block";
//      appDC.messageLoginSection.style.display = "block";
////
//   
//      
//      
//        if(newAuthprovider === "google.com"){
//             
//              appDC.emailLoginSection.style.display = "none";
//              appDC.loginBut.style.display = "none"
//              appDC.sendUserMessageButton.style.display = "block";
//              appDC.messageLog.style.display = "block";
//              appDC.messageLoginSection.style.display = "block";
//              appDC.googleSignedIn.style.display = "block";
//              appDC.googleSignedIn.src = newAuthphoto || "/images/loggedInGoogle.png";
//              
//              toast("Logged in with gmail");   
//               console.log('provider id is firebase');
//          } else {
//              console.log('not google auth provider');
//              
//          }
//      
//      
//      
//        if(provider === "firebase"){
//              appDC.toggleSubscriptions.style.dispaly = "block";
//              appDC.emailLoginSection.style.display = "none";
//              appDC.loginBut.style.display = "none"
//              appDC.sendUserMessageButton.style.display = "block";
//              appDC.messageLog.style.display = "block";
//              appDC.messageLoginSection.style.display = "block";
////              appDC.googleSignedIn.style.display = "none";
//               console.log('firebase user auth provider settings');
//                  
//                
//          } else {
//              console.log('not firebase auth provider');
//          }
//      
//      
//      
//      
//              if(isAn === true)
//          {
//            appDC.emailLoginSection.style.display = "block";
//            appDC.loginBut.style.display = "block"
//            appDC.sendUserMessageButton.style.display = "none";
//            appDC.messageLog.style.display = "none";
//            appDC.messageLoginSection.style.display = "none";
//            appDC.googleSignedIn.style.display = "none";
//            appDC.anonMessageBut.style.display = "none";
//            appDC.messageAnonSection.style.display = "block";
//            appDC.sendAnonMessageBut.style.display = "block";
////            appDC.logOutButton.style.display = "block !important";
//            appDC.buttonAnonIcon.style.display = "block";
//            
//            toast("Anonymous Access granted");
//        }    
//          else {
//    // No user is signed in.
//console.log('not a anon user');
////      appDC.googleSignedIn.style.display = "none";
////             appDC.anonMessageBut.style = "none";
//             appDC.messageAnonSection.style.display = "none";
//          }
//        
//      
//        });
//}
//      
//      
//      user.providerData.forEach(function (profile) {
//            console.log("Sign-in provider: "+profile.providerId);
//            console.log("  Provider-specific UID: "+profile.uid);
//            console.log("  Name: "+profile.displayName);
//            console.log("  Email: "+profile.email);
//            console.log("  Photo URL: "+profile.photoURL);
//          
//          var provider = profile.provierId;
//          
//           console.log(provider);
//          if(provider === "google.com"){
//             
//              appDC.emailLoginSection.style.display = "none";
//              appDC.loginBut.style.display = "none"
//              appDC.sendUserMessageButton.style.display = "block";
//              appDC.messageLog.style.display = "block";
//              appDC.messageLoginSection.style.display = "block";
//              appDC.googleSignedIn.style.display = "block";
////              appDC.googleSignedIn.src = profile.photoURL || "/images/loggedInGoogle.png";
//              
//              toast("Logged in with gmail");   
//               console.log('provider id is firebase');
//          } else {
//              console.log('not google auth provider');
//              
//          }
//          
//          
//
//              
//
//      
//
//      });
//  } else {
//      appDC.emailLoginSection.style.display = "block";
//      appDC.loginBut.style.display = "block"
//      appDC.sendUserMessageButton.style.display = "none";
//      appDC.messageLog.style.display = "none";
//      appDC.messageLoginSection.style.display = "none";
//  }
//});

    
    var tabcontent = document.getElementsByClassName('tabMesgContent');
var tablink = document.getElementsByClassName('tablink');
//    console.log(tablink);

tabcontent[0].classList.add('active');    
    
}



//appDC.sendAnonMessageBut.addEventListener('click', sendAnonMessageToFbase)


//
//   
//const messaging = firebase.messaging();
//messaging.getToken().then(function(currentToken) {
//    if (currentToken) {
//        if(appDC.notifSwitch.checked === true){
//            console.log(firebase.auth().currentUser.email);
//            
//            console.log('Got FCM device token:', currentToken);
//            appDC.toggleSubscriptions.style.display = "block"; 
//            toast('subscription updated');
//            firebase.database().ref('/fcmTokens/Subscribed').child(currentToken)
//          .push(email);
//
//    } else if(appDC.notifSwitch.checked === false){
//            console.log('unsubscribed from notifcations');
//            console.log('Got FCM device token:', currentToken);
//            toast('Unsubscribed to notifcations');
//            var email = firebase.auth().currentUser.email;
//        console.log(currentToken);
//        console.log(email);
//            firebase.database().ref('/fcmTokens/Unsubscribe').child(currentToken)
//              .push(email);
//    } else {
//        console.log('error with sub or unsub of notes');
//        toast('error');
//    }
//} else {
//      // Need to request permissions to show notifications.
//      this.requestNotificationsPermissions();
//    }
//  }.bind(this)).catch(function(error){
//    console.error('Unable to get messaging token.', error);
//  });
//};


//
//appDC.promptSubscriptions.addEventListener('click', notificationAlert);
//function notificationAlert() {
//    const messaging = firebase.messaging();
//
//  messaging.getToken().then(function(currentToken) {
//    if (currentToken) {
//      console.log('Got FCM device token:', currentToken);
//        appDC.toggleSubscriptions.style.display = "block";
//        appDC.notifSwitch.checked = true;
//        toast('subscription updated');
//        
//        // Saving the Device Token to the datastore.
//      firebase.database().ref('/fcmTokens/Subscribed').child(currentToken)
//          .set(firebase.auth().currentUser.uid);
//    } else {
//      // Need to request permissions to show notifications.
//      this.requestNotificationsPermissions();
//    }
//  }.bind(this)).catch(function(error){
//    console.error('Unable to get messaging token.', error);
//  });
//};   


//
//appDC.emailAuthButNotifications.addEventListener('click', emailNoteLogin);
//
//function emailNoteLogin(){
//    appDC.loginBut.style.display = "block";
//    appDC.emailLoginSectionNofications.style.display = "block";
//}

