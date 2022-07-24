$(function() {
    //画面の読み込み時に動かしたいソースコードを記述
});

$(window).on('load',function() {
    //画面が読み込まれた後に動かしたいソースコードを記入
});

$(window).on('scroll',function() {
    //画面がスクロールされたら動かしたいソースコードを記入
});

$('●●').on('click',function() {
    //クリックしたら動かしたいソースコードを記述する
});

$('●●').on('mouseenter',function() {
    //マウスが乗ったら動かしたいソースコードを記述する
});

$('●●').on('mouseleave',function() {
    //マウスが外れたら動かしたいソースコードを記述する
});

$('●●').on('touchstart',function() {
    //タッチされた時に動かしたいソースコードを記述する
});

$('●●').on('touchend',function() {
    //タッチして指が離れた時に動かしたいソースコードを記述する
});

$(window).on('mousemove',function() {
    //マウスが移動したら動かしたいソースコードを記入
});

$('●●').on('animationend',function() {
    //CSSアニメーションが終わった後に動かしたいソースコードを記述する
});

setTimeout(function () {
    //時間を遅らせて動かしたいソースコードを記述する
}, 1000);//この場合1秒後


//=====1.動くきっかけを独自の名前をつけて定義（ここでの関数名は：fadeAnime)

function fadeAnime() {
 //動きの指定
 $('.fadeInTrigger').each(function(){ //adeInTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
       $(this.addClass('fadeIn');//画面内に入ったらfadeInというクラス名を追記
       )else{
       $(this).removeClass('fadeIn');//画面外に出たらfadeInというクラス名を外す    
       } 
 });      
}

//=====2.定義した名前をページが読み込まれた後・スクロールした後それぞれのきっかけに指定

//画面をスクロールしたら動く場合の記述
$(window).on('scroll',function() {
    fadeAnime();/*アニメーション用の関数を呼ぶ*/
});//画面がスクロールされたら動かしたいソースコードを記入

//画面が読み込まれたらすぐに動く場合の記述
$(window).on('load',function() {
    fadeAnime();/*アニメーション用の関数を呼ぶ*/
});//ここまで画面が読み込まれたらすぐに動く場合の記述