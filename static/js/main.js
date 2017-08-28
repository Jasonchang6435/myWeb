log('begin')
$('.dom-btn-playbgm').on('click',function() {
    // play()
})

var bindLoginForm = function() {
    $('.a-viplogin').on('click',function(e) {
        e.preventDefault()
        $('#div-main').toggleClass('hidden')
        $('#vip').toggleClass('hidden')


    })
    $('#vip').on('click','.tab',function(e) {
        var target = $(e.target)
        console.log('target',target)
        $('.active').toggleClass('active')
        // $('.tab-content > div').not(target).hide();
        // $(target).fadeIn(600);


    })

}

var bindEvents = function() {
    bindLoginForm()
}

var __main = function () {
    bindEvents()
}
__main()
