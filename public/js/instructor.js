/* eslint-disable no-unused-vars */

$(document).ready(function() {
	var classDetails = $(".classDetails");

	$("classDetails").on("click", function(event) {
		event.preventDefault();

		var id = $(this).data("id");
		var teacherName = $("#teacherName");
		var danceStyle = $("#danceStyle");
		var location = $("#location");
		var hourlyRate = $("#hourlyRate");
		var rating = $("#rating");

		var classDetails = {
			teacherName: this.instrName + this.instrLastName,
			location: this.location,
			hourlyRate: this.hourlyRate,
			rating: this.rating
		};

		var classType = {
			danceStyle: this.danceStyle,
			classTitle: this.classTitle
		};

		getInstructorDetails(id);
		getDanceType(id);
	});

	function getInstructorDetails(id) {
		$.ajax("/api/instructor" + id, {
			type: "GET",
			data: classDetails
		}).then(function() {
			console.log("Class info added");
			location.reload();
		});
	}

	function getDanceType(id) {
		$.ajax("/api/dances" + id, {
			type: "GET"
		}).then(function() {
			console.log("Dance style added");
			location.reload();
		});
	}
});
