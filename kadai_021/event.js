//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById("btn")
//textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById("text")
//ボタンがクリックされれば、「ボタンをクリックしました」が表示される
btn.addEventListener("click",() => {
  // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  setTimeout(() => {
   //textのテキストを「ボタンをクリックしました」に書き換え
   text.textContent = "ボタンをクリックしました"
   console.log(text);
  }, 2000);
});