const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const errors = document.querySelectorAll(".error-msg");
const query1 = document.getElementById("query1");
const query2 = document.getElementById("query2");
const radioBtn1 = document.getElementById("radio-button1");
const radioBtn2 = document.getElementById("radio-button2");
const messages = document.querySelector("textarea");
const consentText = document.querySelector(".icon-check");
const checkbox = document.getElementById("checkbox");
const successAlert = document.getElementById("success-message");
const form = document.getElementById("form");
const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;

//Selecting between the two radio buttons
const radioButton1 = query1.addEventListener("click", () => {
  radioBtn1.click();
  query1.style.backgroundColor = "#0c7d682f";

  radioBtn2.checked = false;
  query2.style.backgroundColor = "transparent";
});

const radioButton2 = query2.addEventListener("click", () => {
  radioBtn2.click();
  query2.style.backgroundColor = "#0c7d682f";

  radioBtn1.checked = false;
  query1.style.backgroundColor = "transparent";
});

const checkBoxField = consentText.addEventListener("click", () => {
  checkbox.click();
});

// Function to scroll to success message
function scrollToSuccessMessage() {
  successAlert.scrollIntoView({ behavior: "smooth" });
}

//Form validation
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const validEmail = email.value.trim().match(regex);
  const message = messages.value.trim();

  let isVlalid = true;

  // Condition 1: Checks if first name is valid
  if (!firstName.value.trim()) {
    firstName.style.border = "1px solid #d73c3c";
    errors[0].innerHTML = "This field is required";
    isVlalid = false;

    setTimeout(() => {
      errors[0].innerHTML = "";
      firstName.style.border = "1px solid #87a3a6";
    }, 2000);
  }

  // Condition 2: Checks if last name is valid
  if (!lastName.value.trim()) {
    lastName.style.border = "1px solid #d73c3c";
    errors[1].innerHTML = "This field is required";
    isVlalid = false;

    setTimeout(() => {
      errors[1].innerHTML = "";
      lastName.style.border = "1px solid #87a3a6";
    }, 2000);
  }

  // Condition 3: Checks if email is valid
  if (!email.value.trim()) {
    email.style.border = "1px solid #d73c3c";
    errors[2].innerHTML = "Please enter email address";
    isVlalid = false;

    setTimeout(() => {
      email.style.border = "1px solid #87a3a6";
      errors[2].innerHTML = "";
    }, 2000);
  } else if (!validEmail) {
    email.style.border = "1px solid #d73c3c";
    email.value = "email@example.com";
    email.style.color = "#d73c3c";
    errors[2].innerHTML = "Please enter valid email address";
    isVlalid = false;

    setTimeout(() => {
      email.value = "";
      email.style.color = "#000";
      email.style.border = "1px solid #87a3a6";
      errors[2].innerHTML = "";
    }, 2000);
  }

  // Condition 4: Checks if radio button is clicked
  if (!radioBtn1.checked && !radioBtn2.checked) {
    errors[3].innerHTML = "Please select a query type";
    isVlalid = false;

    setTimeout(() => {
      errors[3].innerHTML = "";
    }, 2000);
  }

  // Condition 5: Checks if message is provided
  if (!message) {
    messages.style.border = "1px solid #d73c3c";
    errors[4].innerHTML = "This field is required";
    isVlalid = false;

    setTimeout(() => {
      messages.style.border = "1px solid #87a3a6";
      errors[4].innerHTML = "";
    }, 2000);
  }

  // Condition 6: Checks if check box is checked
  if (!checkbox.checked) {
    errors[5].innerHTML =
      "To submit this form, please consent to being contacted";
    isVlalid = false;

    setTimeout(() => {
      errors[5].innerHTML = "";
    }, 2000);
  }

  // Condtion 7: Validates if all inputs are correct.
  if (isVlalid) {
    successAlert.style.display = "block";

    //Scroll to success message
    scrollToSuccessMessage();

    setTimeout(() => {
      successAlert.style.display = "none";
    }, 2000);
  }
});
