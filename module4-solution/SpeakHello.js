(function (mainwindow) {
  var speakWord = "Hello";
  var helloSpeaker = {
    speak : function (name) {
      console.log(speakWord + " " + name);
      
    }
  }
  mainwindow.helloSpeaker = helloSpeaker;
})(window);

