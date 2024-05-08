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


// Event listener for sidebar toggle
// document.getElementById('toggle-sidebar').addEventListener('click', function() {
//     var sidebarOpen = document.getElementById('sidebar').classList.contains('open');
//     document.getElementById('checkbox').checked = sidebarOpen;
// });