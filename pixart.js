// Generated by CoffeeScript 1.9.3
(function() {
  var brush, btn, input;

  brush = $(".brush");

  input = $("#color-field");

  btn = $("#set-color");

  btn.on("click", function(e) {
    e.preventDefault();
    return brush.css("background-color", input.val());
  });

}).call(this);
