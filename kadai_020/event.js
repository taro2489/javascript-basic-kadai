//btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById("btn")
//ボタンがクリックされれば、「ボタンをクリックしました」が表示される
btn.addEventListener("click",() => {
  //textというidを持つHTML要素を取得し、定数に代入する
  const text = document.getElementById("text")
  //textのテキストを「ボタンをクリックしました」に書き換え
  text.textContent = "ボタンをクリックしました"
  console.log(text);
});