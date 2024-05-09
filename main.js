// On page load
// used to restorethe state (sidebar & checkbox)
window.onload = function() {

    var toggleSidebar = localStorage.getItem('toggleSidebar');

    if (toggleSidebar === null) return;

    var isChecked = (toggleSidebar === 'true');
    document.getElementById('toggle-sidebar').checked = isChecked; //checkbox state restore
    document.querySelector('.abus').classList.toggle('move-right', isChecked); //sidebar state restore
};

// checkbox state change
document.getElementById('toggle-sidebar').addEventListener('change', function() {
    localStorage.setItem('toggleSidebar', this.checked);
    document.querySelector('.abus').classList.toggle('move-right', this.checked);
});

// document.getElementById('toggle-sidebar').addEventListener('click', function() {
//     document.getElementById('sidebar').classList.toggle('open');
// });


// // Event listener for sidebar toggle
// document.getElementById('toggle-sidebar').addEventListener('click', function() {
//     var sidebarOpen = document.getElementById('sidebar').classList.contains('open');
//     document.getElementById('checkbox').checked = sidebarOpen;
// });




//not select the same page

var sidebarLinks = document.querySelectorAll('.sidebar .menu a');

for (var i = 0; i < sidebarLinks.length; i++) {
   
    sidebarLinks[i].addEventListener('click', function(event) {
        var currentUrl = window.location.href.split('#')[0];
        var clickedUrl = this.href.split('#')[0];
        if (currentUrl === clickedUrl) {
            event.preventDefault();
        }
    });
}



// remove the causes the page to jump to the top when clicked.

document.querySelector('.toggle-icon').addEventListener('click', function(event) {
    event.preventDefault();
    var checkbox = document.querySelector('#toggle-sidebar');
    checkbox.checked = !checkbox.checked;
    document.querySelector('.sidebar').classList.toggle('active');
});