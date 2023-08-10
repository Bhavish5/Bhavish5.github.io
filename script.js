if(localStorage.getItem("icon") == null)
localStorage.setItem("icon", "&#9790;");
setTheme();
function themeChange(){
    if(localStorage.getItem("theme") == "#161616"){
        localStorage.setItem("theme", "#EFEFEF");
        localStorage.setItem("color", "#161616");
        localStorage.setItem("icon", "&#9790;");
    }
    else{
        localStorage.setItem("theme", "#161616");
        localStorage.setItem("color", "#EFEFEF");
        localStorage.setItem("icon", "&#9788;");
    }
    setTheme();
}
function setTheme(){
    background = localStorage.getItem("theme");
    color = localStorage.getItem("color");
    icon = localStorage.getItem("icon");
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
    document.getElementById("theme-change").innerHTML = icon;
    //console.log(background, color, icon);
}