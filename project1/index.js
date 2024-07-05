const nav = document.getElementById("navbar");

window.addEventListener('scroll', () =>{
    if(window.scrollY >=100){
        nav.style.backgroundColor = 'black';
    }else{
        // nav.style.backgroundColor = 'transparent';
        nav.style.backgroundColor=  'rgba(44, 40, 40, 0.719)';
    }
})



