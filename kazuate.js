// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;


// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

// hantei();
// hantei();
// hantei();


// ボタンを押した後の処理をする関数 hantei() の定義
let ha=document.querySelector('#print');
ha.addEventListener('click', hantei);
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="nyuuryoku"]');
  let yoso = i.value;
 
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  kaisu=kaisu+1;
  let kais = document.querySelector('span#kaisu');
  kais=kaisu;
  document.getElementById('kaisu').textContent = kais;

  let ans = document.querySelector('span#answer');
  ans = yoso;
  document.getElementById('answer').textContent = ans;
   
  var re = document.querySelector('span#result');
  // console.log(kaisu+"回目の予想: "+yoso);
  if(kaisu<=3){
  if(kotae==yoso){
    re=("正解です。おめでとう！");
  }else if(kotae>yoso){
    re=("まちがい。答えはもっと大きいですよ");
  }else if(kotae<yoso){
    re=("まちがい。答えはもっと小さいですよ");
  }
  }else if(kaisu>=4){
    re=("答えは "+kotae+" でした。すでにゲームは終わっています。");
  }
  document.getElementById('result').textContent = re;
 
}

