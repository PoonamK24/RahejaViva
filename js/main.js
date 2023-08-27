function openForm() {
    document.getElementById("popupForm").style.display = "block";
  }
  function closeForm() {
    document.getElementById("popupForm").style.display = "none";
  }
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    let modal = document.getElementById('loginPopup');
    if (event.target == modal) {
      closeForm();
    }
  }

  window.addEventListener("load", function(){
    setInterval(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        10000 
    )
});


document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});

var tablinks = document.getElementsByClassName('tab-links')
        var tabcontents = document.getElementsByClassName('tab-contents')

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove('active-link');
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove('active-tab');
            }

            event.currentTarget.classList.add('active-link');
            document.getElementById(tabname).classList.add('active-tab');
        }

        var sidemenu = document.getElementById('sidemenu');

        function openmenu(){
            sidemenu.style.right = '0';
        }

        function closemenu(){
            sidemenu.style.right = '-200px';
        }

        // Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}