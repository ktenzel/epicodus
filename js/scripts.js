$(document).ready(function() {

  $("#goal-button").click(function() {
      console.log("working");
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goals").val("");
  })
})
