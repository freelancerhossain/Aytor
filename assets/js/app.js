$(function(){

    // search section start ==================
    
    $('.search_open_btn').on('click', ()=>{
        $('#search').addClass('open');
    });
    $('.search_close_btn').on('click', ()=>{
        $('#search').removeClass('open');
    })

    // search section end ==================
    
    // Cart section start ==================
    
    $('.cart_open_btn').on('click', ()=>{
        $('#cart').addClass('open');
    })
    $('.cart_close_btn').on('click', ()=>{
        $('#cart').removeClass('open');
    })

    // Cart section end ==================
    
    // Popup section start ==================
    
    $('.popup_close_btn').on("click", ()=>{
        $('#popup').addClass('open')
    })

    // Popup section end ==================
});