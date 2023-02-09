/*
drill05 - 複数要素の設定
外部リンクと内部リンクが混在しているリンクがある。
外部リンクは、新しくwinodwを開き表示をしたい。
HTMLの情報は変更せず、JavaScriptで実現すること。
*/


{
    //read document
    let main = document.querySelectorAll("li a")
    for (let i = 0; i < main.length; i++) {
        //make function when clicked
        main[i].addEventListener("click",function(event){
            //to find if this element contains href or not
            let link = this.getAttribute('href')
            console.log(link);
            //if it consists of http , prevent it from doing anything
            if(link.indexOf("http") === 0){
                console.log("fuck! これは外部リンクだ！");
                //prevent its action from being done
                event.preventDefault()
                //Use only JavaScript to use the effect of moving to the link. This means no manipulation with HTML.
                window.open(link)
            }else {
                //when it is not http
                console.log("これは内部リンクだ");
            }
        })
        
    }
}   