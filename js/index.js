// NOTE: Don't use this token, replace it with your own client access token.

$(document).ready(function () {


$.jribbble.setToken('73b16733daf6c021c5d51fd2f1f0ab2c44b65950fd35e418a4d45b8b7f200398');

$.jribbble.users('timothyblake').shots({per_page: 36}).then(function(shots) {
  var html = [];

  shots.forEach(function(shot) {
    html.push('<div>');
    html.push('<a href="' + shot.html_url + '" target="_blank">');
    html.push('<img src="' + shot.images.normal + '">');
    html.push('</a></div>');
  });

  $('.gallery').html(html.join(''));
});

});
