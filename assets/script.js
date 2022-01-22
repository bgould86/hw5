// functions
// save tasks to local storage
function saveTask() {
  console.log($(this).parent());

  const time = $(this).parent().attr("id");
  const task = $(this).siblings("textarea").val();

  localStorage.setItem(time, task);
}
//change colors based on current time
function timeColorChange() {
  const now = moment().hours();
  $(".time-color").each(function () {
    const row = $(this);
    const rowHour = row.data("hour");
    if (rowHour < now) {
      $(this).addClass("past");
    } else if (rowHour === now) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

// event listeners
// show current date
$("#currentDay").text(moment().format("dddd, MMMM Do, YYYY"));

// retrieve tasks from local storage
function getScheduleFromLocalStoreage() {
  let hoursForScheduling = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  for (i = 0; i < hoursForScheduling.length; i++) {
    $(`${"#hour" + hoursForScheduling[i]} .js-task`).val(localStorage.getItem(`${"hour" + hoursForScheduling[i]}`));
  }
}

// user clicks save button
$(".js-saveBtn").on("click", saveTask);
timeColorChange();
getScheduleFromLocalStoreage();
