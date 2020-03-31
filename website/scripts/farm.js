//リクエストのパラメーターセット
    const KEY = 'AIzaSyBhkSrte1Ho10X5Kf1jhYu4rdzC3fY7e78';
    let url = 'https://www.googleapis.com/youtube/v3/search?';
    url += 'type=video'; //動画を検索する
    url += '&part=snippet';//検索結果にすべてのプロパティを含む
    url += '&q=養鶏場';//検索ワード
    url += '&videoEmbeddable=true'; //ＷＥＢページに埋め込み可能な動画のみを検索
    url += '&videoSyndicated=true';//Ｙｏｕｔｕｂｅ以外で再生できる動画のみに限定
    url += '&maxResults=3';//最大動画取得件数
    url += '&key=' + KEY; //API KEY
//jQuelyのコード
$(function(){
    //youtubeの動画を検索して取得
    //ajaxによるAPI通信によるデータの取得方法 $.ajax({url:~,dataType:'~'})-> 通信成功時⇒.done(関数) 通信失敗時⇒.fail(関数)
    $.ajax({
        url: url,
        dataType: 'jsonp'
    }).done(function(data){
        console.log(data);
        if(data.items){
            setData(data);//データ取得時の処理
        }else{
            alert('該当するデータが見つかりませんでいた');
        }
    }).fail(function(data){
        alert('通信に失敗しました');
    });

     //データ取得時の処理
    function setData(data){
        let result = '';
        let video = '';
        //動画を表示するHTMLをつくる
        for(let i =0; i<data.items.length;i++){
            video = '<iframe src="https://www.youtube.com/embed/';
            video += data.items[i].id.videoId;
            video += '" allowfullscreen></iframe>';
            result += '<div class="video">' + video +'</div>'
        }
        //HTMLに反映する
        $('#videoList').html(result);
    }
//ハンバーガーメニュー
    $('#nav-toggle').click(function(){
        $(this).toggleClass('fa-times',800);
        $('#aside').toggleClass('aside-none',800);
    });
});

 /*  
//javascriptのコード
//リクエストのパラメーターセット
/*
const KEY = 'AIzaSyBhkSrte1Ho10X5Kf1jhYu4rdzC3fY7e78';
let url = 'https://www.googleapis.com/youtube/v3/search?';
url += 'type=video'; //動画を検索する
url += '&part=snippet';//検索結果にすべてのプロパティを含む
url += '&q=養鶏場';//検索ワード
url += '&videoEmbeddable=true'; //ＷＥＢページに埋め込み可能な動画のみを検索
url += '&videoSyndicated=true';//Ｙｏｕｔｕｂｅ以外で再生できる動画のみに限定
url += '&maxResults=6';//最大動画取得件数
url += '&key=' + KEY; //API KEY
url += '&callback=hoge';

//console.log(url);
//スクリプト文作成
var span = document.createElement('script');
span.src=url;
document.body.appendChild(span);

var span = ('<script>').src(url);
$('body').after(span);


//関数処理　ビデオ表示
function hoge(json){
    //console.log(json);
    //console.log(json.items);
    //console.log(json.items[0].id.videoId);
    var videoList = document.getElementById('video-list');
    var list ="";
    for(i = 0 ; i < 3 ; i++){
    list +='<iframe width="560" height="315" src="https://www.youtube.com/embed/'+json.items[i].id.videoId+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    };
    videoList.innerHTML = list;
    /*var video = createElement('iframe');
    for(i = 0 ; i < 6 ; i++){
        console.log(json.items[i].id.videoId);
        video.setAttribute("width","560");
        video.setAttribute("height","315");
        video.setAttribute("frameborder","0");
        video.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
        video.setAttribute("allowfullscreen","")

        video.src = 'https://www.youtube.com/embed/'+ json.items[i].id.videoId;
        document.videoList.appendChild(video);
    };*/
    //document.videoList.appendChild(p,null);

//}


//HTMLが読み込まれてから実行する処理
/*
$(function(){
    //youtubeの動画を検索して取得
    $.ajax({
        url : url,
        dataType : 'jsonp'
    })
});
*/