/* eslint-disable no-undef */
$("#updateAdd").on("click", function () {
    var id = $("#id").text();
    console.log(id)
    console.log("/api/instructors/" + id);

   $.ajax("/api/instructors/" + id, {
      type: "PUT",
      data: 
      {
        rating: $("#rating").val().trim(),
        location: $("#location").val().trim(),
        hourlyRate: $("#hrate").val().trim()
        }
    }).then(
      function() {
        console.log("instructor details updated");
        location.href = "http://localhost:8080/index"
      }
    );
  });
