$('.loginBtn').click(function(){
    $('.login').show();
    $('.signup').hide();
    $('loginbtn').css({'border-bottom' : '2px solid #ff4141'});
    $('.signupbtn').css({'border-style' :'none'});
});
$('.signupbtn').click(function(){
    $('.login').hide();
    $('.signup').show();
    $('.signupbtn').css({'border-bottm':'2px solid #ff4141'});
    $('.loginbtn').css({'border-style' :'none'});
});