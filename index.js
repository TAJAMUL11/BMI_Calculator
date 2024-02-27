// light dark toggle //
const ImageChange = document.querySelector('.home__Image img');
const icon = document.querySelector('.toggle-icon');
const img = document.querySelector('.toggle-icon img');
icon.onclick = function(){
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')){
        img.src ="./Images/sun.png";
        ImageChange.src = "./Images/basketballBg.jpg";
    }
    else{
        img.src ="./Images/moon.png";
        ImageChange.src = "./Images/basketballWhite.png";
        
    }
}



// MObile navbar

function showSideBar(){
    const menuIcon = document.querySelector('.forMobile');
    menuIcon.style.display = 'flex';
    
    }
    function removeMenu(){
        const menuIcon = document.querySelector('.forMobile');
        menuIcon.style.display = 'none';
        
        }

