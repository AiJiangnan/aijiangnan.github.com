// XML read
function XMLPath(xmlpath) {
  if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {// code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.open("GET", xmlpath, false);
  xmlhttp.send();
  xmlDoc = xmlhttp.responseXML;
}


// 百度统计
var _hmt = _hmt || [];
(function () {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?3af5aea5e529dd6efeb462126425248a";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();

// Menu
function showMenu() {
  var menu = document.getElementById('menu');
  menu.style.display = 'block';
  menu.style.position = 'fixed';
  if (i < 1) {
    menu.style.opacity = i;
    i += 0.1;
    setTimeout('showMenu()', speed);
  }
}
function hiddenMenu() {
  var menu = document.getElementById('menu');
  if (i >= 0) {
    menu.style.opacity = i;
    i -= 0.1;
    setTimeout('hiddenMenu()', speed);
  }
  if (i >= 0 && i <= 0.1) {
    menu.style.display = 'none';
    menu.style.position = 'absolute';
  }
}