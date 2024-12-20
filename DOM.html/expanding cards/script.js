
function active(event){
    let panels = document.querySelectorAll('.panel'); 
    // Remove the "active","show" class from all panels

    panels.forEach((panel) => panel.classList.remove('active'));
    panels.forEach((show) => show.classList.remove('show'));
    // Add the "active","show" class to the clicked panel

    event.target.classList.add('active');
    event.target.classList.add('show');
}
