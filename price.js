function move(){
    document.getElementById('menu').style.marginLeft = "0px";
    document.getElementById('menu').style.transitionDuration = "1s";
}

function menuChange(){
    if(document.getElementById('menubtn').src.match("menu.png")){
        document.getElementById('menubtn').src = "cancel.png";
    }else if(document.getElementById('menubtn').src.match("cancel.png")){
        document.getElementById('menubtn').src = "menu.png";
        document.getElementById('menu').style.marginLeft = "-100%";
        document.getElementById('menu').style.transitionDuration = "1s";
    }else{
        document.getElementById('menubtn').src = "menu.png";
    }
}

function closeMenu(){
    if(document.getElementById('closeMenu')){
        document.getElementById('menubtn').src = "menu.png";
        document.getElementById('menu').style.marginLeft = "-100%";
        document.getElementById('menu').style.transitionDuration = "1s";
    }
}

function menuAnimation(){
    move();
    menuChange();
}