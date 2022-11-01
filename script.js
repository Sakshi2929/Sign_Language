alert("To translate it into Sign Language, first type your sentence and then press Enter.");
var animationSpeed = 400;
function writeletter(userText) {
  var userTextL = userText.toLowerCase();
  var punc = /[ï¿½`~\"\/'_\-[\]{}()*+!?%&.,\\^$|#@<>|+=;:\u2018\u2019\u201C\u201D]/g;
  var noPunc = userTextL.replace(punc,"");
  var words = noPunc.split("");
  for (var i = 0; i < words.length; i++) {
    if (words[i] === " ") {
      words.splice(i, 1);
    } else if (words.indexOf(words[i]) == words.length) {
      return false;
    }
  }
  var allofEm = words;
  for (var i = 0; i < allofEm.length; i++) {
    if (allofEm[i] == "a") {
      title="a";
      allofEm[i] = "asl-a";
    } else if (allofEm[i] == "b") {
      allofEm[i] = "asl-b";
      title="b";
    } else if (allofEm[i] == "c") {
      title="c";
      allofEm[i] = "asl-c";
    } else if (allofEm[i] == "d") {
      title="d";
      allofEm[i] = "asl-d";
    } else if (allofEm[i] == "e") {
      title="e";
      allofEm[i] = "asl-e";
    } else if (allofEm[i] == "f") {
      title="f";
      allofEm[i] = "asl-f";
    } else if (allofEm[i] == "g") {
      title="g";
      allofEm[i] = "asl-g";
    } else if (allofEm[i] == "h") {
      title="h";
      allofEm[i] = "asl-h";
    } else if (allofEm[i] == "i") {
      title="i";
      allofEm[i] = "asl-i";
    } else if (allofEm[i] == "j") {
      title="j";
      allofEm[i] = "asl-j";
    } else if (allofEm[i] == "k") {
      title="k";
      allofEm[i] = "asl-k";
    } else if (allofEm[i] == "l") {
      title="l";
      allofEm[i] = "asl-l";
    } else if (allofEm[i] == "m") {
      title="m";
      allofEm[i] = "asl-m";
    } else if (allofEm[i] == "n") {
      title="n";
      allofEm[i] = "asl-n";
    } else if (allofEm[i] == "o") {
      title="o";
      allofEm[i] = "asl-o";
    } else if (allofEm[i] == "p") {
      title="p";
      allofEm[i] = "asl-p";
    } else if (allofEm[i] == "q") {
      title="q";
      allofEm[i] = "asl-q";
    } else if (allofEm[i] == "r") {
      title="r";
      allofEm[i] = "asl-r";
    } else if (allofEm[i] == "s") {
      title="s";
      allofEm[i] = "asl-s";
    } else if (allofEm[i] == "t") {
      title="t";
      allofEm[i] = "asl-t";
    } else if (allofEm[i] == "u") {
      title="u";
      allofEm[i] = "asl-u";
    } else if (allofEm[i] == "v") {
      title="v";
      allofEm[i] = "asl-v";
    } else if (allofEm[i] == "w") {
      title="w";
      allofEm[i] = "asl-w";
    } else if (allofEm[i] == "x") {
      title="x";
      allofEm[i] = "asl-x";
    } else if (allofEm[i] == "y") {
      title="y";
      allofEm[i] = "asl-y";
    } else if (allofEm[i] == "z") {
      title="z";
      allofEm[i] = "asl-z";
    }
  }
  allofEm.push("rest");
  return allofEm;
}

var userInput = document.getElementById("write").value;
var classArray = [];


function loopEm(putMeHere) {
  classArray = [];
  var classArray = ["asl-a","asl-b","asl-c","asl-d","asl-e","asl-f","asl-g","asl-h","asl-i","asl-j","asl-k","asl-l","asl-m","asl-n","asl-o","asl-p","asl-q","asl-r","asl-s","asl-t","asl-u","asl-v","asl-w","asl-x","asl-y","asl-z"];
  var userText2 = document.getElementById("write").value;
  classArray = writeletter(userText2);
  var cal = classArray.length;
  var classChanges = 0;
  (function nextClass() {
    setTimeout(function() {
      if (classChanges != 0) {
        classArray.push(classArray.shift());
      }
      var c = document.getElementById(putMeHere);
      c.className = "asl";
      c.classList.add(classArray[0]);
      classChanges++;
      if (classChanges < classArray.length + 1) {
        nextClass();
      } else {
        c.className = "";
        c.classList.add("asl");
        c.classList.add(classArray[classArray.length-1]);
        return false;
      }
    }, animationSpeed);
  })();document.getElementById("letter").innerHTML="";
  for (var i=0;i<classArray.length;i++){
    if(classArray[i]==="asl-u"||classArray[i]==="asl-w"||classArray[i]==="asl-r"||classArray[i]==="asl-k"||classArray[i]==="asl-z"||classArray[i]==="asl-v"||classArray[i]==="asl-b"||classArray[i]==="asl-f"||classArray[i]==="asl-d"){
      document.getElementById("letter").innerHTML += "<span class='asl3 " + classArray[i] + "' title='" + classArray[i].charAt(4) + "'></span><br/>";
    }else if(classArray[i]==="asl-g"||classArray[i]==="asl-h"){
      document.getElementById("letter").innerHTML += "<span class='asl4 " + classArray[i] + "' title='" + classArray[i].charAt(4) + "'></span><br/>";
    }else{
    document.getElementById("letter").innerHTML += "<span class='asl2 " + classArray[i] + "' title='" + classArray[i].charAt(4) + "'></span><br/>";
  }}}
function signContainer() {
  loopEm("signContainer");
}
document.getElementById("signContainer").addEventListener("click", signContainer);
document.addEventListener("keydown", keyDownHandler, false);
function keyDownHandler(e) {
  if (e.keyCode == 13) {
    loopEm("signContainer");
  }
}
