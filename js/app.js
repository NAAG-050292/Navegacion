const hamburguerIcon = document.querySelector('.nav_hamburguer');
const navOverlay = document.querySelector('.nav_overlay');
let currentDropdown = navOverlay;

hamburguerIcon.addEventListener('click', ()=>{
hamburguerIcon.classList.toggle('nav_hamburguer--open');

    navOverlay.classList.toggle('nav_overlay--show');
});

//submenu//

navOverlay.addEventListener('click', (e)=>{
    e.preventDefault();
    const currentElement = e.target;
    //console.log(e.target.classList.value);

    if( isActive(currentElement, 'nav_parent') ){

        const subMenu = currentElement.parentElement.children[1];
        console.log(subMenu);


        if(window.innerWidth < 768){

            let height = (subMenu.clientHeight == 0)
                        ? subMenu.scrollHeight : 0;
            //console.log(subMenu.clientHeight);

            subMenu.style.height = `${height}px` ;

        }else{

            if( !isActive(subMenu, 'nav_inner--show') ) {
                closeDropdown(currentDropdown);
            }
            subMenu.classList.toggle('nav_inner--show');
            currentDropdown = subMenu;

        }
    }

});

function isActive(element, string){
    return element.classList.value.includes(string);
}

function closeDropdown(currentDropdown){
    if( isActive(currentDropdown, 'nav_inner--show')){
        currentDropdown.classList.remove('nav_inner--show');
    }
}

window.addEventListener('resize', ()=>{
    closeDropdown(currentDropdown);

    if(window.innerWidth > 768){
        const navInners = document.querySelectorAll('.nav_inner');

        navInners.forEach(navInner =>{
            navInner.style.height = '';
        });
    }
});