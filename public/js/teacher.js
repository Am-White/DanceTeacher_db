/* eslint-disable no-undef */
$("#addTeach").on("click", function () {
    console.log($("#fname").val().trim())
    
     $.ajax("/api/instructors/", {
        type: "POST",
        data: 
        {
          name: $("#fname").val().trim(),
          lastName: $("#lname").val().trim(),
          rating: $("#rating").val().trim(),
          location: $("#location").val().trim(),
          hourlyRate: $("#hrate").val().trim()
          }
      }).then(
        function() {
          console.log("instructor saved");
          location.href = "http://localhost:8080/index"
        }
      );
    });
  