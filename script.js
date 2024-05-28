let date = document.getElementById("date");
let retDate = document.getElementById("return-date");

date.addEventListener("click", () => {
    date.type = 'date';
});
retDate.addEventListener("click", () => {
    retDate.type = 'date';
})


const tabs = document.querySelectorAll('.tab-btn');
const allContent = document.querySelectorAll('.content');

tabs.forEach((tab, index)=> {
    tab.addEventListener('click', () => {
        tabs.forEach(tab=>{tab.classList.remove('active')});
        tab.classList.add('active');

        allContent.forEach(content=>{content.classList.remove('active')});
        allContent[index].classList.add('active')
    })
})

const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if(bar) {
    bar.addEventListener("click", ()=> {
        nav.classList.toggle("active");
    })
}

if(close) {
    close.addEventListener("click", ()=> {
        nav.classList.remove("active");
    })
}



