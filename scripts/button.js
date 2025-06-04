// Controls the home button, having it follow page on scroll


document.addEventListener("DOMContentLoaded", function(){
    let homeButton = document.getElementById("homeButton");

    // Call scrollfunction on scroll
    window.onscroll = function() {scrollFunction()};


        // Function to follow button down
    function scrollFunction() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            homeButton.style.display = "block";    
        } else {
            homeButton.style.display = "none";
        }
    }

    // Function to send user back to top
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});

