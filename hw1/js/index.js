$('button').on('click', function() {
    var h = $('#h').val()
    var w = $('#w').val()

    h = Number(h) / 100
    w = Number(w)

    bmi = w / (h * h)

    $('#bmi').val(bmi)
})