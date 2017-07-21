$('button').on('click', function() {
    var n = $('#n').val()
    var a = 0
    var b = 0

    for (var i = 2; i < (Number(n) - 1); i++) { a = a + (i * (i - 1) / 2) }
    for (var i = 2; i < (Number(n) + 1); i++) { b = b + (i * (i - 1) / 2) }


    $('#a').val(a)
    $('#b').val(b)
})