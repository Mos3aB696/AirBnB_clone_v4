$(document).ready(function() {
    $('button').click(function() {
        var amenities = [];
        $('input[type="checkbox"]:checked').each(function() {
            amenities.push($(this).data('id'));
        });

        $.ajax({
            url: 'http://0.0.0.0:5001/api/v1/places_search',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({amenities: amenities}),
            success: function(data) {
                var placesSection = $('.places');
                placesSection.empty();
                data.forEach(function(place) {
                    var article = $('<article>');
                    var titleBox = $('<div class="title_box">');
                    titleBox.append($('<h2>').text(place.name));
                    titleBox.append($('<div class="price_by_night">').text('$' + place.price_by_night));
                    article.append(titleBox);
                    var information = $('<div class="information">');
                    information.append($('<div class="max_guest">').text(place.max_guest + ' Guest' + (place.max_guest != 1 ? 's' : '')));
                    information.append($('<div class="number_rooms">').text(place.number_rooms + ' Bedroom' + (place.number_rooms != 1 ? 's' : '')));
                    information.append($('<div class="number_bathrooms">').text(place.number_bathrooms + ' Bathroom' + (place.number_bathrooms != 1 ? 's' : '')));
                    article.append(information);
                    article.append($('<div class="description">').text(place.description));
                    placesSection.append(article);
                });
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});
