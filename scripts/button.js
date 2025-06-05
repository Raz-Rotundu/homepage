// Controls the home button, having it follow page on scroll


document.addEventListener("DOMContentLoaded", function(){
    let homeButton = document.getElementById("homeButton");

    // Call scrollfunction on scroll
    window.onscroll = function() {scrollFunction()};



    // Detect if mobile device or not
    /* Storing user's device details in a variable*/
    let details = navigator.userAgent;

    /* Creating a regular expression 
    containing some mobile devices keywords 
    to search it in details string*/
    let regexp = /android|iphone|kindle|ipad/i;

    /* Using test() method to search regexp in details
    it returns boolean value*/
    let isMobileDevice = regexp.test(details);

    if (isMobileDevice) {
        let headerLinks = document.getElementById("links");
        headerLinks.style.flexDirection = "column";

        console.log("You are using a Mobile Device");
    }

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

