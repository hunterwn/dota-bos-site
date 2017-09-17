function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablink;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablink" and remove the class "current"
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" current", "");
    }

    // Show the current tab, and add a "current" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " current";
    
    if (window.innerWidth < 768 && tabName !== "home") {
        document.getElementById("navButton").click();
    }
    
}

function centerHeroSlider() {
    var leftpx = String(-(1375 - window.innerWidth) / 2) + "px";
    document.getElementById("heroSlider").style.left = leftpx;
}

window.onload = centerHeroSlider;
window.onresize = centerHeroSlider;
    
document.getElementById("defaultOpen").click();
