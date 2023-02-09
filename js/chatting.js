{
    let send = document.querySelector("#send")
    send.onclick = function () {
        add()
    }
    let text = document.querySelector("#text")
    text.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            add()
        }
    })

    function add() {
        let inputText = document.querySelector("")
    }
    

}