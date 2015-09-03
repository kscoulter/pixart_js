brush = $(".brush")
input = $("#color-field")
btn = $("#set-color")

btn.on "click", (e) ->
  e.preventDefault()
  brush.css("background-color", input.val())
