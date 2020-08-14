$(document).ready(function() {

  
$('[data-toggle="collapses"]').click(function() {
  $(this).toggleClass( "active" );
  if ($(this).hasClass("active")) {
    $(this).text("Hide");
  } else {
    $(this).text("See More");
  }
});

});
