// javascript to handle the toggle function of the FAQ
   
      //declare the variable "plussSign" accordion to get the element with the class "cross"
      let plusSign = document.getElementsByClassName("cross");

      let i;

      for (i = 0; i < plusSign.length; i++) {
        // add eventListener for a click on each of the plus sign(cross)
        plusSign[i].addEventListener("click", function() {
          //make it active when clicked by a user if its not active
          this.classList.toggle("active");

          //make the parent class "faq" active if the plus sign is clicked
          this.parentElement.classList.toggle("active");

          // store the action into "answer" if the plus sign (question) is clicked 
          let answer = this.nextElementSibling;

          //if faq & answer is in block, don't display.
          if (answer.style.display === "block"){
            answer.style.display = "none";
          }else{
            answer.style.display = "block";
          }
        });
      }
   