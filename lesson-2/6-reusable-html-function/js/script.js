// Change the html to put in new text that shows on the page

//const messageContainer = document.querySelector(".message-container");

//messageContainer.innerHTML = `<div class="message">some message</div>`;

//reusable HTML function

const messageSuccessContainer = document.querySelector(".message-success");
const messageInfoContainer = document.querySelector(".message-info");
const messageErrorContainer = document.querySelector(".message-error");
const messageWarningContainer = document.querySelector(".message-warning");

messageSuccessContainer.innerHTML = createToaster("SUCCESS", "Files is uploaded congrats")
messageInfoContainer.innerHTML = createToaster("INFO", "Files uploaded but we have something to say")
messageErrorContainer.innerHTML = createToaster("ERROR", "sorry :(")
messageWarningContainer.innerHTML = createToaster("WARNING", "Files must be less than 5mb")
