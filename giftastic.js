//$(document).ready(function()
//{

$("#newButton").on("click", function(event) {
          // prevent form from trying to submit/refresh the page
        event.preventDefault();
            var comment = $("#comment-input").val().trim();
            console.log(comment);
            var comment1 = $("<button>").text(comment);
                comment1.addClass("setButtons", comment);
                comment1.attr("data-subject",comment);
            $("#pageButtons").append(comment1);
    });


    $(document).on("click", ".setButtons", function() {
          // Grabbing and storing the data-subject property value from the button
        var subject = $(this).attr("data-subject");
          // Constructing a queryURL using thec subject name
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        subject + "&api_key=dc6zaTOxFJmzC&limit=10";
          // Performing an AJAX request with the queryURL
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            // After data comes back from the request
       .done(function(response) {
            console.log(queryURL);
            console.log(response);
          
            // storing the data from the AJAX request in the results variable
            var results = response.data;
           // Looping through each result item
          for (var i = 0; i < results.length; i++) {
            // Creating and storing a div tag
            var subjectDiv = $("<div>");
            // Creating a paragraph tag with the result item's rating
            var p = $("<p>").text("Rating: " + results[i].rating);
            // Creating and storing an image tag
            var subjectImage = $("<img>");
            // Setting the src attribute of the image to a property pulled off the result item
            subjectImage.attr("src", results[i].images.fixed_height.url);
            // Appending the paragraph and image tag to the subjectDiv
            subjectDiv.append(p);
            subjectDiv.append(subjectImage);
            // Prependng the subjectDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(subjectDiv);
          }
        });
    });
// find the correct array in object.data [array]
// in the correct object.data find the id ""
// store the id ""
// put the object.data.arrayNumber."id" in this url: https://media2.giphy.com/media/"id"/200_s.gif
// in the .on function use ajax call to get still image of "data-subject"
// on image click have the ajax call get the data-animate file of "data-subject"
// on next click have it switch back to the still
//}