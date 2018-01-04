

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script type="text/javascript">
    $("button").on("click", function() {
      var person = $(this).attr("data-person");
      var apikey = "fecfa0341d564db69594e4b0f78fea8e"

      var queryURL = "http://api.nytimes.com/svc/archive/v1/" + year + "/" + month+ ".json?api-key=" + apiKey;

      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
          var results = response.data;

          for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img>");
            personImage.attr("src", results[i].images.fixed_height.url);

            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifs-appear-here").prepend(gifDiv);
          }
        });
    });
  </script>

