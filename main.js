let links = document.querySelectorAll("li")
let image = Array.from(document.images)

links.forEach((li) => {
    li.addEventListener("click", function() {
        // remove class
        links.forEach((e) => {
            e.classList.remove("active")
            this.classList.add("active")
        })
    })
    li.addEventListener("click", function() {
        
        image.forEach((img) => {
            img.style.display = 'none';
        });
        document.querySelectorAll(this.dataset.img).forEach((el) => {
            el.style.display = "block"
        })
    })
})
