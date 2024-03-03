$(document).ready(() => {
  const amenities = {};

  $('input[type="checkbox"]').on("change", function () {
    if (this.checked) {
      amenities[$(this).data("id")] = $(this).data("name");
    } else {
      delete amenities[$(this).data("id")];
    }

    $("div.amenities h4").text(Object.values(amenities).join(", "));
  });
});
