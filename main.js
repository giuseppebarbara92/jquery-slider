$('.next').click(function(){
var activeImage = $('.images img.active');

$('.images img').removeClass('active');
var nextImage = activeImage.next('img');

if (nextImage.length != 0) {
  nextImage.addClass('active');
}
else {
  $('.images img').first().addClass('active');
}
});


$('.prew').click(function(){
var activeImage = $('.images img.active');

activeImage.removeClass('active');

var prewImage = activeImage.prev('img');

if (prewImage.length != 0) {
  prewImage.addClass('active');
}
else {
  $('.images img').last().addClass('active');
}
});
