const totalEvents = 0;
const minDays = 0;

const totalEvents_span = document.getElementById("event-count"); //this gets the whole elem
const minDays_span = document.getElementById("min-days");

const makeEvent_div = document.querySelector(".make-event");
const newEvent_form = document.querySelector(".event-popup");
const close_button = document.getElementById("close-button");


makeEvent_div.addEventListener("click", function(){console.log("hey there :)")})


function makeEvent() {
  console.log("makeevent is called");
  newEvent_form.style.display = "inline-block";
}


function closeEventForm() {
  newEvent_form.style.display = "none";
}

function submitEventForm() {
  closeEventForm();
}
