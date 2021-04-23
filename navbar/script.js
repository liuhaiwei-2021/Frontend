const navSlide =()=>{
    const nav = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link,index)=>{
            console.log(index);
            if(link.style.animation){
                link.style.animation='';
            }else{
               link.style.animation =  `navLinkFade 0.5s ease forwards ${index/5 + 0.2}s`;
                console.log(link.style.animation)
            }

        });
    });
}

navSlide();
