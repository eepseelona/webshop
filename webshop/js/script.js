var i = 0;
var degree = 0;
function sideHidden() {
    var sidebar = document.getElementById('sidebar');
    var button = document.getElementById('sideButton');
    if(i == 0) {
        sidebar.style.width = "21px";
        i = 1
    } else {
        sidebar.style.width = "300px";
        i = 0;
    }
    degree += 180;
    sideButton.style.transform = `rotate(${degree}deg)`;
}