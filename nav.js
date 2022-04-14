/*  
This is a Hello World comment
*/
alert('We are creative')

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  /*
Play sound on click
*/

  let sound = document.getElementById('beep')
  let play = document.getElementById('submit')
  
  play.onclick =
    function() {
          console.log('submit');
    sound.play();
          return false;
      };
      
  /* Accordion */
      var acc = document.getElementsByClassName("accordion");
      var i;
      
      for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          /* Toggle between adding and removing the "active" class,
          to highlight the button that controls the panel */
          this.classList.toggle("active");
      
          /* Toggle between hiding and showing the active panel */
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
        });
      } 