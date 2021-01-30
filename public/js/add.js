/* eslint-disable no-undef */
$("#add").on("click", function () {
    console.log($("#className").val().trim())
    
     $.ajax("/api/classes/", {
        type: "POST",
        data: 
        {
          classTitle: $("#className").val().trim(),
          danceID: $("#addDance").val().trim(),
          instructorID: $("#addTeacher").val().trim()
          }
      }).then(
        function() {
          console.log("class saved");
          location.href = "http://localhost:8080/index"
        }
      );
    });
  