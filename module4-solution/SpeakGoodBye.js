(function (mainwindow){
  var speakWord = "Good Bye";
  var byeSpeaker = {
    speak : function(name) {
      console.log(speakWord + " " + name);
      
    }
  }
  mainwindow.byeSpeaker=byeSpeaker;
})(window);

