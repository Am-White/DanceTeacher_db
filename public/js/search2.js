/* eslint-disable no-undef */
$("#add").on("click", function () {
    $("#search_results").empty();
    // eslint-disable-next-line no-unused-vars
    var instructor = $("#searchTeacher").val().trim()
    var danceID = $("#searchStyle").val();
    var location = $("#searchLocation").find(":selected").text();
    console.log(location);

    console.log(danceID)
    var searchedCriteria = {location: location, danceID: danceID};
    $.ajax("/api/classes/search", {
        method: "POST",
        data: searchedCriteria
    }).then(response => {
        // return response.json(); //
        console.log(response);
        console.log(response.length!=0)
        if(response.length!=0) {
          console.log(response[0].classTitle)
          console.log(response[0].Instructor.name + " " + response[0].Instructor.lastName );
          var clDiv = $("<div class='classes'>");
          for(var i= 0; i<response.length;i++) {
            console.log(response[i].classTitle)
            var a = $("<li>");
            var classTitle = a.text(response[i].classTitle);
            var classDetails = $("<p>").text("Instructor: " + response[i].Instructor.name + " " + response[i].Instructor.lastName + ", Rating: " + 
              response[i].Instructor.rating + ", Price per hour: " + response[i].Instructor.hourlyRate + " USD")
            clDiv.append(classTitle)
            clDiv.append(classDetails)
          }
          $("#search_results").append(clDiv);
        }
        else {
          // eslint-disable-next-line no-redeclare
          var clDiv = $("<div class='classes'>");
          var p2 = $("<p>").text("No classes are found for this location. Please choose another location")
          clDiv.append(p2);
          $("#search_results").append(clDiv);
        }

      
        })

  });

    $("#addByInstr").on("click", function () {
      $("#search_results").empty();
    var instructorID = $("#searchTeacher").val();
    console.log(instructorID);

    var searchedCriteria = {instructorID: instructorID};
    $.ajax("/api/classes/instructorIDSearch", {
        method: "POST",
        data: searchedCriteria
    }).then(response => {
        console.log(response);
        console.log(response[0].classTitle)
        var clDiv = $("<div class='classes'>");
            for(var i= 0; i<response.length;i++) {
            console.log(response[i].classTitle)
            var a = $("<li>");
            var classTitle = a.text(response[i].classTitle);
            var classDetails = $("<p>").text("Instructor: " + response[i].Instructor.name + " " + response[i].Instructor.lastName + ", Rating: " + 
              response[i].Instructor.rating + ", Price per hour: " + response[i].Instructor.hourlyRate + " USD")
            clDiv.append(classTitle)
            clDiv.append(classDetails)
          }
          $("#search_results").append(clDiv);

        })

  });

  $("#updateSearch").on("click", function () {
    location.reload();
  });
