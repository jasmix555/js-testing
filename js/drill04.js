/*
drill04 - 消費税の出力
#priceに金額を入力し、消費税込みの値段を#resultに出力すること
以下の条件の場合は、該当する出力を表示すること。

[出力時の表示] ※1000と入力した場合
1000円の税込み価格は1100円です。

[出力時の表示] ※文字を入力した場合
数値を入力してください -> errクラスを追加し赤字表示にする

[出力時の表示] ※マイナスの値を入力した場合
有効な数値を入力してください -> errクラスを追加し赤字表示にする

複数回テストを行い、エラーでない場合は文字が黒色になるように設定すること。
*/
{
    //make tax rate
    let tax = 0.1;
    //make the screen or place for the result
    let resultForm = document.getElementById('result');
    console.log(resultForm);

    //when the element is being clicked = do the function
    document.querySelector('input[type="button"]').addEventListener('click', function () {
        let price = document.getElementById("price").value;

        //start by making rules
        //もし、マイナスだったら → マイナスダメ
        //もし、数値なら　→ 計算する
        //上の2つに当てはまらない（＝文字列だった）　→ 文字列ダメよん

        //rule begins
        //when minus is included in the textarea = error
        if (price.includes("-")) {
            //show that it is an error in the p element
            resultForm.classList.add("err")
            resultForm.innerText = "マイナスダメよん"
            console.log("マイナスダメよん");

            //looking if it is not a text // so if it is a text = error
        } else if (!isNaN(price)) {
            //remove the red color css style
            resultForm.classList.remove("err")
            //make it able to calculate // change text to number
            let priceNum = parseInt(price);
            //add tax to result^
            let result = priceNum * tax;
            //make sentence
            resultForm.innerText = `${price}円の税込み価格は${priceNum+result}円です。`
            //searching if it is not number and minus
            //only searching for text
        } else {
            //if it is a text
            //show that it is an error in the p element
            resultForm.classList.add("err")
            resultForm.innerText = "文字ダメよん"
            console.log("文字ダメよん");
        }
    })





}