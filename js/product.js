function changeImage(el) {

    document.getElementById("mainImage").src = el.src;

    document.querySelectorAll(".thumbnail").forEach(function(item){
        item.classList.remove("active");
    });

    el.classList.add("active");
}