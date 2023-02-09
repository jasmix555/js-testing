{
    //let the program know what to read
    let img = document.querySelectorAll(".img img");
    let overlay = document.querySelector(".overlay");
    let pic = document.querySelector(".large");
    let lpic = document.querySelector(".large img")
    //how many images there are to read
    for (let i = 0; i < img.length; i++) {
        img[i].onclick = function () {
            //differentiate which image is being clicked
            overlay.classList.remove("hidden");
            pic.classList.remove("hidden");
            //src search
            let imgsrc = img[i].src
            //src write _l
            let aa = imgsrc.replace("_s","_l")
            //insert _l src in img
            lpic.src = aa
            }
        }
    //click background to back page
    overlay.onclick = function () {
        overlay.classList.add("hidden");
        pic.classList.add("hidden");
    }
}