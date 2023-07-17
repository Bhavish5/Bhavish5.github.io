var bgcolor = "";
var color = "";
var themeIcon = "";
function themeChange(){
    if(bgcolor=="#EFEFEF"){
        bgcolor = "#161616";
        color = "#EFEFEF";
        themeIcon = "&#9788;";
        document.getElementById("theme-change").style.color = "#EFEFEF";
    }
    else{
        bgcolor = "#EFEFEF";
        color = "#161616";
        themeIcon = "&#9790;";
        document.getElementById("theme-change").style.color = "#161616"; 
    }
    document.body.style.backgroundColor = bgcolor;
    document.body.style.color = color; 
    document.getElementById("theme-change").innerHTML = themeIcon;
}