/* typing style */
var typed = new Typed(".typing", {
    strings:["","Web Designer","web Developer","Graphic Designer","Logo Creater"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})
/* Aside */
const nav = document.querySelector(".nav"),
      navlist = nav.querySelectorAll("li"),
      totalnavlist = navlist.length;
const allsection = document.querySelectorAll(".section"),
      totalsection = allsection.length;
      for(let i = 0; i<totalnavlist; i++)
      {
            const a = navlist[i].querySelector("a");
            a.addEventListener("click", function()
            {
                removebacksection();
                for(let j = 0; j<totalnavlist; j++)
                {
                    if(navlist[j].querySelector("a").classList.contains("active"))
                    {
                        addbacksection(j);
                    }
                    navlist[j].querySelector("a").classList.remove("active");
                }
                this.classList.add("active");
                showSection(this);
                if(window.innerWidth < 1200)
                {
                    asidesectiontogglebtn();
                }
            })

      }
      function removebacksection()
      {
            for(let i=0; i<totalsection; i++)
            {
                allsection[i].classList.remove("backsection");
            }
      }
      function addbacksection(num)
      {
            allsection[num].classList.add("backsection");
      }
      function showSection(element)
      {
            for(let i=0; i<totalsection; i++)
            {
                allsection[i].classList.remove("active");
            }
            const target = element.getAttribute("href").split("#")[1];
            document.querySelector("#" + target).classList.add("active");
            
      }
      function updatenav(element)
      {
            for(let i=0; i<totalnavlist; i++)
            {
                navlist[i].querySelector("a").classList.remove("active");
                const target = element.getAttribute("href").split("#")[1];
                if(target === navlist[i].querySelector("a").getAttribute("href").split("#")[1])
                {
                    navlist[i].querySelector("a").classList.add("active");
                }

            }
      }
      document.querySelector(".hire-me").addEventListener("click", function()
      {
            const sectionindex = this.getAttribute("data-section-index");
            showSection(this);
            updatenav(this);
            removebacksection();
            addbacksection(sectionindex);
      })
      const navtogglebtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navtogglebtn.addEventListener("click", () => 
            {
                asidesectiontogglebtn();
            })
            function asidesectiontogglebtn()
            {
                aside.classList.toggle("open");
                navtogglebtn.classList.toggle("open");
                for(let i=0; i<totalsection; i++)
                {
                    allsection[i].classList.toggle("open")
                }
            }