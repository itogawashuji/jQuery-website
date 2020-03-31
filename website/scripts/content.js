//javascriptのコード
/*
function textcount(){
    var text = document.forms.contact.text.value;
    var words = text.length;
    console.log(words);
    if(words===0){
        window.alert('入力文字数０：入力してください');
    }else if (words<=10){
        document.getElementById('sub').innerHTML = '<input type="submit" name="submit" value="送信する">'
    }else{
        var los = words - 10 ;
        window.alert('入力文字数'+words+'：'+los+'字オーバー');
    };
};*/

//jQuelyのコード
$(function(){
    //ハンバーガーメニュー
    $('#nav-toggle').click(function(){
        $(this).toggleClass('fa-times',800);
        $('#aside').toggleClass('aside-none',800);
    });
    //jQuely
    $('#countset').click(function(){
        var word = $('#text').val();
        var words = word.length;
        if(words===0){
            alert('入力文字数０：入力してください');
        }else if (words<=10){
            $('#sub').html('<input type="submit" name="submit" value="送信する">');
        }else{
            var los = words - 10 ;
            alert('入力文字数'+words+'：'+los+'字オーバー');
        };

    });
});