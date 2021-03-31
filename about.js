// let menuOpen = document.getElementById('menubtn');

function openMenu(){
    if(document.getElementById('menubtn').src.match("menu.png")){
        document.getElementById('menubtn').src = "cancel.png";
    }else{
        document.getElementById('menubtn').src = "menu.png";
    }
}