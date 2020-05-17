// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };

    // TODO: this but in a better way when i'm not hungover 

    document.getElementById("button1").addEventListener("click", function () {
        playSound('shutup.wav');
    });

    document.getElementById("button2").addEventListener("click", function () {
        playSound('gotohell.wav');
    });

    document.getElementById("button3").addEventListener("click", function () {
        playSound('kissmybutt.wav');
    });

    function getFullMediaURL(s) {
        return  '/android_asset/www/sounds/' + s
    }

    function playSound(s) {
        let src = getFullMediaURL(s);
        var myMedia =
          new Media(src,
            function () { },
            function (e) { alert('Media Error: ' + JSON.stringify(e)); }
          );
        myMedia.play();
        myMedia.setVolume('1.0');
    }

})();