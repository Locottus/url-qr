var carnet = "";
var url ="https://arcgis-web.url.edu.gt/incyt/api/qr/";

function setCarnetText(){
  document.getElementById("Carnet").value = carnet;
}

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function updateCookie(user,t){
  setCookie("username", user, t);
  carnet = user;
  console.log('carnet actualizado ' + carnet );
}


function checkCookie() {
  var user=getCookie("username");
  if (user != "") {
    //alert("Bienvenido nuevamente " + user);
    carnet = user;
    setCarnetText();
  } else {
     user = prompt("Ingrese su Carnet:","");
     if (user != "" && user != null) {
      updateCookie(user,30);
      setCarnetText();
     }
  }
}

  


