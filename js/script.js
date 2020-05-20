function klik(i){
    if(document.getElementById(i).className === "drinks-menu"){
        document.getElementById(i).className = "drinks-menu-active";
    }
    else{
        document.getElementById(i).className = "drinks-menu";
    }
}