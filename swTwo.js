/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': '284257239298'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = 'precache-v1';
const RUNTIME = 'runtime';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = [

        '/index.html',
        '/swTwo.js',
        '/images/favicon.ico',
        '/manifest.json',
        'styles/style.css',
        'styles/menuStyle.css',
        'scripts/JS/app.js',
        'scripts/JS/time.js',
        '/scripts/JS/translate.js',
        '/images/loggedInGoogle.png',
        '/images/logoutIconAnon.png',
        '/images/priceAvg.png',
        '/images/priceLow.png',
        '/images/dominosMiniLogo.png',
        '/images/asosMiniLogo.png',
        '/images/locationIcon.png',
        'scripts/JS/spa.js',
        'scripts/JS/onLoad.js',
        'scripts/JS/loadResults.js',
        'scripts/JS/loadSlider.js',
//        '/Roboto-Light.ttf',
        '/images/undefined.png',
        '/images/zaraLogo.png',
        '/images/logoutIcon.png',
        '/images/asospromo.png',
        '/images/dominospromo.png',
        '/images/icons/D128.png',
        '/images/icons/D144.png',
        '/images/icons/D152.png',
        '/images/icons/D192.png',
        '/images/icons/D256.png',
        '/images/adviceIcon.png',
        '/images/alcampoLogo.png',
        '/images/amazonLogo.png',
        '/images/adviceIcon.png',
        '/images/alcampoLogo.png',
        '/images/amazonLogo.png',
        '/images/amazonSlider3.png',
        '/images/anyTimeSpeed.png',
        '/images/anyTimeSpeedIcon.png',
        '/images/aravincLogo.png',
        '/images/papajohnsMiniLogo.png',
        '/images/asmLogo.png',
        '/images/bin.png',
        '/images/binReset.png',
        '/images/burgerKingLogo.png',
        '/images/camelGeo2.png',
        '/images/carrefourLogo.png',
        '/images/cashIcon.png',
        '/images/cashOIcon2.png',
        '/images/categoryIcon.png',
        '/images/cheetahgeo2.png',
        '/images/closeIcon.png',
        '/images/closeReset.png',
        '/images/contactIcon.png',
        '/images/deliverOO.png',
        '/images/deliverooLogo.png',
        '/images/deliverooo.png',
        '/images/deliverumLogo.png',
        '/images/dhlLogo.png',
        '/images/dominosLogo.png',
        '/images/drink3.png',
        '/images/drinks.png',
        '/images/elcorteLogo.png',
        '/images/electronics.png',
        '/images/electronics2.png',
        '/images/farfetchLogo.png',
        '/images/farfetchSlider.png',
        '/images/fashion.png',
        '/images/fashion3.png',
        '/images/fbook.gif',
        '/images/fbook.png',
        '/images/fnacLogo.png',
        '/images/googlePlus.png',
        '/images/grinder.png',
        '/images/grocery.png',
        '/images/grocery3.png',
        '/images/horseGeo2.png',
        '/images/hotDog.png',
        '/images/hotFood.png',
        '/images/ubereatsLogo.png',
        '/images/laundrappLogo.png',
        '/images/quipipLogo.png',
        '/images/taskrabbitLogo.png',
        '/images/hotFood2.png',
        '/images/amazonfreshLogo.png',
        '/images/shutlLogo.png',
        '/images/morrisonsLogo.png',
        '/images/maplinLogo.png',
        '/images/henchmanLogo.png',
        '/images/ideaIcon.png',
        '/images/instantSpeed.png',
        '/images/instantSpeedIcon.png',
        '/images/jinn.png',
        '/images/jinnLogo.png',
        '/images/justEatLogo.png',
        '/images/mediaMrktLogo.png',
        '/images/pixmaniaLogo.png',
        '/images/postal.png',
        '/images/hungryhouseLogo.png',
        '/images/resetIcon.png',
        '/images/restoInLogo.png',
        '/images/asdaLogo.png',
        '/images/marksandspencerLogo.png',
        '/images/netaporterLogo.png',
        '/images/sainsburysLogo.png',
        '/images/ondeliveryLogo.png',
        '/images/papajohnsLogo.png',
        '/images/resultChip.png',
        '/images/rocketGeo2.png',
        '/images/rocketGeo3.png',
        '/images/sameDaySpeed.png',
        '/images/sameDaySpeedIcon.png',
        '/images/sameWeekSpeed.png',
        '/images/sameWeekSpeedIcon.png',
        '/images/speedIcon.png',
        '/images/stats.png',
        '/images/logoDeliveryCompare.png',
        '/images/stopwatch.png',
        '/images/telepizzaLogo.png',
        '/images/thumbIconArrow.png',
        '/images/tickIcon.png',
        '/images/timeOIcon.png',
        '/images/transp.png',
        '/images/twitter.png',
        '/images/typeIcon.png',
        '/images/upsIcon.png',
        '/images/upsLogo.png'
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});