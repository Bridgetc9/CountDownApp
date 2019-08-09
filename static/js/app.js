const totalEvents = 0;
const minDays = 0;

const totalEvents_span = document.getElementById("event-count"); //this gets the whole elem
const minDays_span = document.getElementById("min-days");

const makeEvent_div = document.querySelector(".make-event");
const newEvent_form = document.querySelector(".event-popup");
const close_button = document.getElementById("close-button");

const events_div = document.querySelector(".events");

const editEvent_form = document.querySelector(".event-edit-popup");


makeEvent_div.addEventListener("click", function(){console.log("hey there :)")})


function makeEvent() {
  console.log("makeevent is called");
  newEvent_form.style.display = "inline-block";
}


function closeEventForm() {
  newEvent_form.style.display = "none";
}

function submitEventForm() {
  totalEvents = totalEvents + 1;
  if (totalEvents > 0) {
    events_div.style.display = "inline-block";
  }
  closeEventForm();
}


function closeEditForm() {
  editEvent_form.style.display = "none";
}
