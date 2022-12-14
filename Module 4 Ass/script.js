(function () {
   // Wrap the entire contents of script.js inside of an IIFE
   var names = ["Jsudhir","Dipesh", "Jay", "Jaya", "Jugul", "prasoon", "divyansh", "aakash", "jitendra", "anuj", "Jarasandh"];
  
  
  // Loop over the names array and say either 'Hello' or "Good Bye"
  // using the 'speak' method or either helloSpeaker's or byeSpeaker's
  // 'speak' method.
  
    for (var i = 0; i < names.length; i++) {
  
      
      // Retrieve the first letter of the current name in the loop.
      // Use the string object's 'charAt' function. Since we are looking for
      // names that start with either upper case or lower case 'J'/'j', call
      // string object's 'toLowerCase' method on the result so we can compare
      // to lower case character 'j' afterwards.
      
       var firstLetter = names[i].charAt(0).toLowerCase();
  
     
      // Compare the 'firstLetter' retrieved in STEP 11 to lower case
      // 'j'. If the same, call byeSpeaker's 'speak' method with the current name
      // in the loop. Otherwise, call helloSpeaker's 'speak' method with the current
      // name in the loop.
      if (firstLetter === 'j') {
         byeSpeaker.speak(names[i]);
      } else {
        helloSpeaker.speak(names[i]);
      }
    }
  })();