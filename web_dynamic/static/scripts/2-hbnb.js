$(document).ready(() => {
  const amenities = {}; 

  $('input[type="checkbox"]').on('change', function () {
    if (this.checked) {
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }

    $('div.amenities h4').text(Object.values(amenities).join(', '));
  });
});

$.get('http://0.0.0.0:5001/api/v1/status/', (data, textStatus) => {
  if (textStatus === 'success') {
    $('div#api_status').addClass('available');
  } else {
    $('div#api_status').removeClass('available');
  }
});
