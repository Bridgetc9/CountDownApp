let totalEvents = 0;
let minDays = 0;

let totalEvents_span = document.getElementById("event-count"); //this gets the whole elem
let minDays_span = document.getElementById("min-days");
let eventsTable_rows = document.querySelector(".events").getElementsByTagName("tr")
let numEvents = eventsTable_rows.length - 1;
let mostRecent_cell = eventsTable_rows[1].cells[1].innerHTML;

totalEvents_span.innerHTML = numEvents;


const makeEvent_div = document.querySelector(".make-event");
const newEvent_form = document.querySelector(".event-popup");
const close_button = document.getElementById("close-button");

const events_div = document.querySelector(".events");
const editEvent_form = document.querySelector(".event-edit-popup");


makeEvent_div.addEventListener("click", function(){console.log("hey there :)")})

function main() {
  if (numEvents > 0) {
    console.log("visible");
    events_div.style.display = "inline-block";
  } else {
    console.log("invisible");
    events_div.style.display = "none";
  }
  setMinDays();
}

function setMinDays() {
  if (numEvents == 0) {
    minDays_span.innerHTML = "?";
  } else {
    let today = new Date();
    today.setHours(0, 0, 0, 0);
    let dateList = mostRecent_cell.split('-');
    let nextEvent = new Date(dateList[0], dateList[1]-1, dateList[2])
    let msInDay = 24 * 60 * 60 * 1000;
    let diff = (nextEvent - today) / msInDay;
    console.log(today.getMinutes());
    console.log(today);
    console.log(nextEvent);
    minDays_span.innerHTML = diff;
  }
}


function makeEvent() {
  newEvent_form.style.display = "inline-block";
}


function closeEventForm() {
  newEvent_form.style.display = "none";
}


function closeEditForm() {
  editEvent_form.style.display = "none";
}

function deleteEvent() {

}

// let dateList = mostRecent_cell.split('-')
// let today = new Date();
// let nextEvent = new Date(dateList[0], dateList[1]-1, dateList[2])
// // console.log(nextEvent - today);
// console.log("offset is");
// today.setMinutes(0);
// console.log(today.getMinutes());
// console.log(nextEvent.getMinutes());


main();
