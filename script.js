// Variables of grabbed HTML elements
let mainTitle = document.getElementById("main_title");
let title = document.getElementById("title_input");
let submitButton = document.getElementById("submit_button");
let formContainer = document.querySelector("form");
let requiredForms = document.querySelectorAll("input");

// Form complete flag
let requiredFromsCompleted = false;

// Displays user-typed adlib title to screen
title.addEventListener("input", (event) => {
    console.log(event);
    mainTitle.innerText = title.value;
})

// If form is filled > show adlib story. Else > throw alert()
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("SUBMITTING");

    // Checks if each form has text
    for(const form of requiredForms){
        console.log("form value: ", form.value);

        // If one has no text.. alert
        if (form.value == ""){
            window.alert("One or more forms are empty. Please fill them all.");
            requiredFromsCompleted = false;
            break;
        }
        else { // repeatedly sets to true (that's fine)
            requiredFromsCompleted = true;
        }
    }

    // Removes form when COMPLETE and SUBMITTED
    if (requiredFromsCompleted){
        formContainer.style.display = "none";

        while (formContainer.firstChild) {
            formContainer.removeChild(formContainer.firstChild);
          }
    }

    // 
    let adlibStory = document.createElement("p");
    adlibStory.innerText = `Last night I ate a ${requiredForms[1].value}, and today I just had to ${requiredForms[2].value}. What a ${requiredForms[3].value} day!`;
    formContainer.appendChild(adlibStory);
    formContainer.style.display = "block";
    console.log(formContainer.firstChild);

})
