"use strict";

var checkBowser = false;
if(bowser.mobile || bowser.tablet || /SymbianOS/.test(window.navigator.userAgent)) checkBowser = true;
window.console.log("%cCoded by Mn", "color:#34408f;  font-size: 10px; background:#000; padding:20px;");
function _(el){return document.querySelector(el); }
function __(el){return document.querySelectorAll(el); }

function overIcon(c, e, t){ t.setAttribute('src', 'img/ic/' + e + c + '.svg'); }
function menu(c){
  var menu = _('.menu'),
      nav = _('#nav'),
      btClose = _('#nav>a'),
      bts = [_('#nav>a>.ham'),_('#nav>a>.close')],
      main = _('#main');

  if(c === 'open'){
    menu.style.left = "0";
    animationLinks('in');
    swipeClass('showDisplayFlex', 'hideDisplay', bts);
    btClose.setAttribute('onclick', 'menu("close", this)');
    if(!checkBowser){
      main.style.left = "300px";
      nav.style.left = "calc(2% + 300px)";
    }
  } else {
    menu.style.left = "-100vw";
    animationLinks('out');
    swipeClass('hideDisplay', 'showDisplayFlex', bts);
    btClose.setAttribute('onclick', 'menu("open", this)');
    if(!checkBowser) {
      main.style.left = "0";
      nav.style.left = "2%";
    }
  }
}
function animationLinks(c){
  var l = __('.lineslinks'),
      p = __('.plinks');
  if(c === 'in'){
    setTimeout(function(){
      for (var i = 0; i < l.length; i++) {
        l[i].style.width = "100%";
        l[i].style.opacity = "0.7";
      }
      setTimeout(function(){
        for (var i = 0; i < l.length; i++) {
          l[i].style.bottom = "5px";
          l[i].style.opacity = "1";
          p[i].style.opacity = "1";
        }
      },700);
    },400);
  } else {
    setTimeout(function(){
      for (var i = 0; i < l.length; i++) {
        l[i].style.width = "0";
        l[i].style.opacity = "0";
        l[i].style.bottom = "30px";
        p[i].style.opacity = "0";
      }
    },500)
  }
}
function overClose(c, t){
  var l = [t.children[0], t.children[1]];
  if(c === 'over'){
    swipeClass('cw45', 'ccw45', l);
  } else {
    swipeClass('ccw45', 'cw45', l);
  }
}

function swipeClass(c1, c2, arr){
  arr[0].classList.remove(c1);
  arr[0].classList.add(c2);
  arr[1].classList.remove(c2);
  arr[1].classList.add(c1);
}
function contact(c){
  var wr = _('#contact'),
      m = _('#nav');
  if(c === 'open'){

    wr.style.display = "block";
    setTimeout(function(){
      m.style.opacity = "0";
      wr.style.opacity = "1";
    },550);
  } else {
    m.style.opacity = "1";
    wr.style.opacity = "0";
    setTimeout(function(){
        wr.style.display = "none";
    },550);
  }
}


var cSlider = 0;
function bullets(c){
  cSlider = c;
  sliderCover(cSlider);
}

function sliderCount(c){
  if(c === 'next'){
    cSlider++;
    if(cSlider > 4) cSlider = 0;
    sliderCover(cSlider);
  } else {
    cSlider--;
    if(cSlider < 0) cSlider = 4;
    sliderCover(cSlider);
  }
}

function sliderCover(c){
  var s = _('#sliderCover'),
      i = _('#interface>.navSlider>ul');
      s.style.left = '-' + c + '00vw';
      i.style.left = '-' + c + '00vw';
}
// setTimeout(function(){
// },550);
