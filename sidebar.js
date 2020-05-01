var menuOpened = false;

function showMenu(){
  var menu = document.getElementById("left-menu");

  if (menuOpened){
    menu.style.left = "-300px";
    menuOpened = false;
  }
  else if (!menuOpened){
    menu.style.left = "0px";
    menuOpened = true;
  }
}