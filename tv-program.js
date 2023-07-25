// let data = {
//   "list": {
//     "g1": [
//       {
//         "id": "2022030428673",
//         "event_id": "28673",
//         "start_time": "2022-03-04T04:35:00+09:00",
//         "end_time": "2022-03-04T04:40:00+09:00",
//         "area": {
//           "id": "130",
//           "name": "東京"
//         },
//         "service": {
//           "id": "g1",
//           "name": "ＮＨＫ総合１",
//           "logo_s": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
//             "width": "100",
//             "height": "50"
//           },
//           "logo_m": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
//             "width": "200",
//             "height": "100"
//           },
//           "logo_l": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
//             "width": "200",
//             "height": "200"
//           }
//         },
//         "title": "みんなのうた「ごっつぉさま」／「超変身！ミネラルフォーマーズ」",
//         "subtitle": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
//         "content": "「ごっつぉさま」うた：須貝智郎／「超変身！ミネラルフォーマーズ」うた：鬼龍院翔ｆｒｏｍゴールデンボンバー",
//         "act": "",
//         "genres": [
//           "0409",
//           "0700",
//           "0504"
//         ]
//       },
//       {
//         "id": "2022030427069",
//         "event_id": "27069",
//         "start_time": "2022-03-04T23:05:00+09:00",
//         "end_time": "2022-03-04T23:10:00+09:00",
//         "area": {
//           "id": "130",
//           "name": "東京"
//         },
//         "service": {
//           "id": "g1",
//           "name": "ＮＨＫ総合１",
//           "logo_s": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-100x50.png",
//             "width": "100",
//             "height": "50"
//           },
//           "logo_m": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-200x100.png",
//             "width": "200",
//             "height": "100"
//           },
//           "logo_l": {
//             "url": "//www.nhk.or.jp/common/img/media/gtv-200x200.png",
//             "width": "200",
//             "height": "200"
//           }
//         },
//         "title": "パラスポーツ×アニメ「アニ×パラ」▽パラアルペンスキーテーマ曲江口寿史×ＡＣＣ",
//         "subtitle": "パラスポーツの魅力をアニメで伝える番組。高速滑走に挑む精神力が試されるパラアルペンスキーを描く。キャラ原案：江口寿史／曲：Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ",
//         "content": "パラスポーツの魅力をアニメで伝えるプロジェクトの第１３弾。圧倒的なスピードに挑む「パラアルペンスキー」の世界を江口寿史原案の魅力的なキャラクターで描く。平昌パラリンピック金メダリストの村岡桃佳選手への取材から生まれた主人公・桃は、スピードへの恐怖を克服していく。その壁を越えた先にあるものとは…　テーマ曲　♪「Ｏｎ　Ｙｏｕｒ　Ｍａｒｋ」はＡｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂが手掛けた。",
//         "act": "【声】松本まりか，【出演】Ａｗｅｓｏｍｅ　Ｃｉｔｙ　Ｃｌｕｂ，【監督】西村一彦，【脚本】加納新太，【原案】江口寿史",
//         "genres": [
//           "0700"
//         ]
//       }
//     ]
//   }
// };

/////////////////// 課題3-2 はここから書き始めよう

let s=document.querySelector('div#result'); 

let mess =document.createElement('li');
mess.textContent="g（チャンネルキー）1（ジャンル番号）のようにチャンネルとジャンルを指定してください.検索は同時に二つまで可能です(例→g1e2）";
s.insertAdjacentElement('beforeend',mess);
let message =document.createElement('li');
message.textContent="チャンネル　NHK総合1(g),Eテレ1(e)  ";
s.insertAdjacentElement('beforeend',message);
let message2 =document.createElement('li');
message2.textContent="ジャンル　ニュース(0)、スポーツ(1)、情報・ワイドショー(2)、ドラマ(3)、音楽(4)、バラエティ(5)、映画(6)、アニメ(7)、ドキュメンタリー・教養(8)、劇場・公演(9)、趣味・教育(10)、福祉(11)  ";
s.insertAdjacentElement('beforeend',message2);

let nyu=document.querySelector('input[name="ken"]');
let se=nyu.value;
console.log(se);
let ba = document.querySelector('#kensaku');
ba.addEventListener('click', sendRequest);
let read1=1;
let read2=1;
// 通信を開始する処理
function sendRequest() {


  if (read1===1&&read2===1){
    for(let xx=1;xx<4;xx++){
      let rmxx = document.querySelector('li' );
      rmxx.remove();
    }
  }
  if (read1>1){
    for(let xx=1;xx<9;xx++){
      let rmxx = document.querySelector('li');
      rmxx.remove();
    }
    if(read2>1){
      for(let ss=1;ss<8;ss++){
        let rmss = document.querySelector('li');
        rmss.remove();
      }
    }
  }

  



  let service; 
  let genre;
  let service2; 
  let genre2;
  let genr=['0000','0100','0205','0300','0409','0502','0600','0700','0800','0903','1000','1100'];
  if(se.charAt(0)==='g'){
    service='g1';
    let nan=se.charAt(1);
    nan=parseInt(nan);
    genre=genr[nan];
  }
  else if(se.charAt(0)==='e'){
    service='e1';
    let nan=se.charAt(1);
    nan=parseInt(nan);
    genre=genr[nan];
  }


    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+service+'-'+genre+'-j.json';
    
    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理 ul


}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof rt === 'string') {
        data = JSON.parse(data);
    }
    if(se.charAt(0)==='g'){

    read1=read1+1;
      let res = document.createElement('li');
      res.textContent = "1件目の検索結果"
      s.insertAdjacentElement('beforeend',res);


      let st = document.createElement('li');
      st.textContent = "番組開始時刻:"+data.list.g1[0].start_time;
      s.insertAdjacentElement('beforeend',st);

      let ed = document.createElement('li');
      ed.textContent = "番組終了時刻:"+data.list.g1[0].end_time;
      s.insertAdjacentElement('beforeend',ed);

      let sn = document.createElement('li');
      sn.textContent = "チャンネル:"+data.list.g1[0].service.name;
      s.insertAdjacentElement('beforeend',sn);

      let ti = document.createElement('li');
      ti.textContent = "番組名:"+data.list.g1[0].title;
      s.insertAdjacentElement('beforeend',ti);


      let  sub= document.createElement('li');
      sub.textContent = "番組サブタイトル:"+data.list.g1[0].subtitle;
      s.insertAdjacentElement('beforeend',sub);

      let  con= document.createElement('li');
      con.textContent = "番組説明文:"+data.list.g1[0].content;
      s.insertAdjacentElement('beforeend',con);

      let  act= document.createElement('li');
      act.textContent = "出演者:"+data.list.g1[0].act;
      s.insertAdjacentElement('beforeend',act);
    }

    else if(se.charAt(0)==='e'){
      read1=read1+1;

      let res = document.createElement('li');
      res.textContent = "1件目の検索結果"
      s.insertAdjacentElement('beforeend',res);

      let st = document.createElement('li');
      st.textContent = "番組開始時刻:"+data.list.e1[0].start_time;
      s.insertAdjacentElement('beforeend',st);

      let ed = document.createElement('li');
      ed.textContent = "番組終了時刻:"+data.list.e1[0].end_time;
      s.insertAdjacentElement('beforeend',ed);

      let sn = document.createElement('li');
      sn.textContent = "チャンネル:"+data.list.e1[0].service.name;
      s.insertAdjacentElement('beforeend',sn);

      let ti = document.createElement('li');
      ti.textContent = "番組名:"+data.list.e1[0].title;
      s.insertAdjacentElement('beforeend',ti);


      let  sub= document.createElement('li');
      sub.textContent = "番組サブタイトル:"+data.list.e1[0].subtitle;
      s.insertAdjacentElement('beforeend',sub);

      let  con= document.createElement('li');
      con.textContent = "番組説明文:"+data.list.e1[0].content;
      s.insertAdjacentElement('beforeend',con);

      let  act= document.createElement('li');
      act.textContent = "出演者:"+data.list.e1[0].act;
      s.insertAdjacentElement('beforeend',act);
    }
    if(se.charAt(2)==='g'||se.charAt(2)==='e'){
      genr=['0000','0100','0205','0300','0409','0502','0600','0700','0800','0903','1000','1100'];
      if(se.charAt(2)==='g'){
        service2='g1';
        let nan=se.charAt(3);
        nan=parseInt(nan);
        genre2=genr[nan];
      }
      else if(se.charAt(2)==='e'){
        service2='e1';
        let nan=se.charAt(3);
        nan=parseInt(nan);
        genre2=genr[nan];
      }    
      let url2= 'https://www.nishita-lab.org/web-contents/jsons/nhk/'+service2+'-'+genre2+'-j.json';
      axios.get(url2)
      .then(showResult2)   // 通信成功
      .catch(showError)   // 通信失敗
      .then(finish);   
    }
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}



function showResult2(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof rt === 'string') {
      data = JSON.parse(data);
  }
  if(se.charAt(2)==='g'){
    read2=read2+1;
    let res2 = document.createElement('li');
    res2.textContent = "2件目の検索結果"
    s.insertAdjacentElement('beforeend',res2);

    let st = document.createElement('li');
    st.textContent = "番組開始時刻:"+data.list.g1[0].start_time;
    s.insertAdjacentElement('beforeend',st);

    let ed = document.createElement('li');
    ed.textContent = "番組終了時刻:"+data.list.g1[0].end_time;
    s.insertAdjacentElement('beforeend',ed);

    let sn = document.createElement('li');
    sn.textContent = "チャンネル:"+data.list.g1[0].service.name;
    s.insertAdjacentElement('beforeend',sn);

    let ti = document.createElement('li');
    ti.textContent = "番組名:"+data.list.g1[0].title;
    s.insertAdjacentElement('beforeend',ti);


    let  sub= document.createElement('li');
    sub.textContent = "番組サブタイトル:"+data.list.g1[0].subtitle;
    s.insertAdjacentElement('beforeend',sub);

    let  con= document.createElement('li');
    con.textContent = "番組説明文:"+data.list.g1[0].content;
    s.insertAdjacentElement('beforeend',con);

    let  act= document.createElement('li');
    act.textContent = "出演者:"+data.list.g1[0].act;
    s.insertAdjacentElement('beforeend',act);
  }

  else if(se.charAt(2)==='e'){
    read2=read2+1;

    let res2 = document.createElement('li');
    res2.textContent = "2件目の検索結果"
    s.insertAdjacentElement('beforeend',res2);

    let st = document.createElement('li');
    st.textContent = "番組開始時刻:"+data.list.e1[0].start_time;
    s.insertAdjacentElement('beforeend',res2);

    let ed = document.createElement('li');
    ed.textContent = "番組終了時刻:"+data.list.e1[0].end_time;
    s.insertAdjacentElement('beforeend',ed);

    let sn = document.createElement('li');
    sn.textContent = "チャンネル:"+data.list.e1[0].service.name;
    s.insertAdjacentElement('beforeend',sn);

    let ti = document.createElement('li');
    ti.textContent = "番組名:"+data.list.e1[0].title;
    s.insertAdjacentElement('beforeend',ti);


    let  sub= document.createElement('li');
    sub.textContent = "番組サブタイトル:"+data.list.e1[0].subtitle;
    s.insertAdjacentElement('beforeend',sub);

    let  con= document.createElement('li');
    con.textContent = "番組説明文:"+data.list.e1[0].content;
    s.insertAdjacentElement('beforeend',con);

    let  act= document.createElement('li');
    act.textContent = "出演者:"+data.list.e1[0].act;
    s.insertAdjacentElement('beforeend',act);
  }
}
