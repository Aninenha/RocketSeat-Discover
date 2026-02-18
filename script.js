function toggleMode(){
  const html = document.documentElement,
    img = document.querySelector("#profile img");


  /*
  if (html.classList.contains('light')){
    html.classList.remove('light');
  } else {
    html.classList.add('light');
  };
*/
  html.classList.toggle("light")


  if (html.classList.contains('light')){
    img.setAttribute('src', './assets/kakashilight.jpg');
    img.setAttribute('alt', 'Fanart do Kakashi muito top light version');
  } else {
    img.setAttribute('src', './assets/kakashidark.jpg');
    img.setAttribute('alt', 'Fanart do Kakashi muito top dark version');
  };

};