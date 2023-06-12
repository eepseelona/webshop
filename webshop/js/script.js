//# Oldalsáv elrejtése/megjelenítése
var sidebar = document.getElementById('sidebar');
var button = document.getElementById('sideButton');
var content = document.getElementById('content');
var localSidebar = localStorage.getItem('sidebar');

if(!localSidebar || localSidebar == true) {
    sidebar.style.width = "300px";
    content.style.marginLeft = "340px";
} else {
    sidebar.style.width = "21px";
    content.style.marginLeft = "41px";
}

function sideHidden() {
    if(localSidebar == true) {
        sidebar.style.width = "21px";
        content.style.marginLeft = "41px";

        localStorage.setItem("sidebar", false);
    } else {
        sidebar.style.width = "300px";
        content.style.marginLeft = "340px";

        localStorage.setItem("sidebar", true);
    }
}