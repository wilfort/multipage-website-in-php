// if ('serviceWorker' in navigator) {
//    window.addEventListener('load', function () {
//      navigator.serviceWorker.register('service-worker.js').
//      then(function (registration) {
//        // Registration was successful
//        console.log('ServiceWorker registration successful with scope: ', registration.scope);
//      }, function (err) {
//        // registration failed :(
//        console.log('ServiceWorker registration failed: ', err);
//      });
//    });
//   }
  // if ('serviceWorker' in navigator) {
  //   navigator.serviceWorker
  //            .register('service-worker.js')
  //            .then(function() { console.log('Service Worker Registered'); });
  // }
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js', {scope: './'}) // Scope of the service worker
      .then(function(registration) {
        console.log('service worker is registered!');
      })
      .catch(function(error) {
        console.log('service worker registration failed ', error);
      });
  }
  else {
    console.log('service worker is not supported.');
  }