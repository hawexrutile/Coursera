
(function(){ 
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var name;
  
  for (name of names) {
    var x=name.toLowerCase();
    if (x.charAt(0) == 'j') {
      byeSpeaker.speak(name);
    }
    else {
      helloSpeaker.speak(name);
    }
  }
})();