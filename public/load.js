      
(()=> {
    document.addEventListener('DOMContentLoaded', () => {
        let v = document.getElementById("video");

        if (v) {
            v.classList.remove("hidden")
            v.classList.add("animate-in", "fade-in", "zoom-in")
        }
    })
})()
