/* Toggle style switcher*/
const styleswitchertoggle = document.querySelector(".color-switcher-toggler");
styleswitchertoggle.addEventListener("click", () => {
    document.querySelector(".color-switcher").classList.toggle("open");
})
/* hide color-switcher on scroll*/
window.addEventListener("scroll", () => {
    if(document.querySelector(".color-switcher").classList.contains("open"))
    {
        document.querySelector(".color-switcher").classList.remove("open");
    }
})
/* theme colors */
const alternatestyle = document.querySelectorAll(".alter-color");
function setActiveStyle(color)
{
    alternatestyle.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}
/* dark and light change */
const daynight = document.querySelector(".day-night");
daynight.addEventListener("click", () => {
    daynight.querySelector("i").classList.toggle("fa-sun");
    daynight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark"))
    {
        daynight.querySelector("i").classList.add("fa-sun")
    }
    else
    {
        daynight.querySelector("i").classList.add("fa-moon")
    }
})