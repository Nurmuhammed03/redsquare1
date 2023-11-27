var elem = document.getElementById("elem");
var button = document.getElementById("button");
button.addEventListener("click", func);
function func() {
  alert(elem.clientTop);
}

var elem2 = document.getElementById("elem2");
var button2 = document.getElementById("button2");
button2.addEventListener("click", func2);
function func2() {
  alert(elem2.clientLeft);
}

var elem3 = document.getElementById("elem3");
var button3 = document.getElementById("button3");
button3.addEventListener("click", func3);
function func3() {
  alert(elem3.offsetWidth);
}

var elem4 = document.getElementById("elem4");
var button4 = document.getElementById("button4");
button4.addEventListener("click", func4);
function func4() {
  alert(elem4.offsetHeight);
}

var elem5 = document.getElementById("elem5");
var button5 = document.getElementById("button5");
button5.addEventListener("click", func5);
function func5() {
  alert(elem5.clientWidth);
}

var elem6 = document.getElementById("elem6");
var button6 = document.getElementById("button6");
button6.addEventListener("click", func5);
function func6() {
  alert(elem6.clientHeight);
}

var elem7 = document.getElementById("elem7");
var button7 = document.getElementById("button7");
button7.addEventListener("click", func7);
function func7() {
  alert(getComputedStyle(elem7).height + " " + getComputedStyle(elem7).width);
}

var elem8 = document.getElementById("elem8");
var button8 = document.getElementById("button8");
button8.addEventListener("click", func8);
function func8() {
  alert(elem8.scrollTop);
}

var elem9 = document.getElementById("elem9");
var button9 = document.getElementById("button9");
button9.addEventListener("click", func9);
function func9() {
  alert(elem9.scrollLeft);
}

var elem10 = document.getElementById("elem10");
var button10 = document.getElementById("button10");
button10.addEventListener("click", func10);
function func10() {
  elem10.scrollTop = 100;
}

var elem11 = document.getElementById("elem11");
var button11 = document.getElementById("button11");
button11.addEventListener("click", func11);
function func11() {
  elem11.scrollTop += 100;
}

var elem12 = document.getElementById("elem12");
var button12 = document.getElementById("button12");
button12.addEventListener("click", func12);
function func12() {
  alert(elem12.scrollHeight);
}

var elem13 = document.getElementById("elem13");
var button13 = document.getElementById("button13");
button13.addEventListener("click", func13);
function func13() {
  alert(elem13.scrollWidth);
}

var elem14 = document.getElementById("elem14");
var button14 = document.getElementById("button14");
button14.addEventListener("click", func14);
function func14() {
  var total_height = elem14.scrollHeight;
  var needed_height = total_height - 100;
  elem14.scrollTop = needed_height;
}

var elem15 = document.getElementById("elem15");
var button15 = document.getElementById("button15");
button15.addEventListener("click", func15);
function func15() {
  alert(pageYOffset);
}

var elem16 = document.getElementById("elem16");
var button16 = document.getElementById("button16");
button16.addEventListener("click", func16);
function func16() {
  alert(pageXOffset);
}

var button17 = document.getElementById("button17");
button17.addEventListener("click", func17);
function func17() {
  window.scrollTo(300, 500);
}

var button18 = document.getElementById("button18");
button18.addEventListener("click", func18);
function func18() {
  window.scrollBy(0, 300);
}

var button19 = document.getElementById("button19");
button19.addEventListener("click", func19);
function func19() {
  window.scrollTo(0, document.body.clientHeight);
}

var button20 = document.getElementById("button20");
button20.addEventListener("click", func20);
function func20() {
  window.scrollBy(0, 400);
}

var button21 = document.getElementById("button21");
button21.addEventListener("click", func21);
function func21() {
  var body = document.documentElement;
  if (body.scrollHeight - body.scrollTop == body.clientHeight) {
    window.scrollTo(0, 100);
  }
}

var elem22 = document.getElementById("elem22");
elem22.addEventListener("click", func22);
function func22() {
  var startWidth = this.offsetWidth;
  var startHeight = this.offsetHeight;
  this.style.width = startWidth * 2 + "px";
  this.style.height = startHeight * 2 + "px";
}

var button262 = document.getElementById("button262");
button262.addEventListener("click", func262);
function func262() {
  var heightWindow = window.innerHeight;
  window.scrollBy(0, heightWindow);
}
