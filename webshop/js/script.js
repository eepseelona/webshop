//# Oldalsáv elrejtése/megjelenítése
var sidebar = document.getElementById('sidebar');
var button = document.getElementById('sideButton');
var content = document.getElementById('content');
var localSidebar = localStorage.getItem('sidebar');
var degree;

if(!localSidebar || localSidebar == "true") {
    sidebar.style.width = "300px";
    content.style.marginLeft = "340px";

    degree = 0;
    localStorage.setItem("sidebar", "true");
    localSidebar = localStorage.getItem("sidebar");
} else {
    sidebar.style.width = "21px";
    content.style.marginLeft = "41px";

    degree = 180;
    localSidebar = localStorage.getItem("sidebar");
}
button.style.transform = `rotate(${degree}deg)`;

function sideHidden() {
    console.log(localSidebar)
    if(localSidebar == "true") {
        sidebar.style.width = "21px";
        content.style.marginLeft = "41px";

        localStorage.setItem("sidebar", "false");
        localSidebar = localStorage.getItem('sidebar');
    } else {
        sidebar.style.width = "300px";
        content.style.marginLeft = "340px";

        localStorage.setItem("sidebar", "true");
        localSidebar = localStorage.getItem('sidebar');
    }
    degree += 180;
    button.style.transform = `rotate(${degree}deg)`;
}



//# Filterek elrejtése/megjelenítése
function filters() {
    
}