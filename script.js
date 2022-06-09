const loadingBottom = document.querySelector('.loadingBottom')
const loadingTop = document.querySelector('.loadingTop')
const loadingLeft = document.querySelector('.loadingLeft')
const loadingRight = document.querySelector('.loadingRight')
const borderLeft = document.querySelector('.borderLeft')
const borderRight = document.querySelector('.borderRight')
var container = document.querySelector ('.container')
var chevron = document.getElementById('chevron')
var chevron1 = document.getElementById('chevron1')




// Links 
const menu = document.querySelector('.bodyMenu')
const projects = document.querySelector('.link-one')
const bodyProjects = document.querySelector('.bodyProjects')
const bodySkills= document.querySelector('.bodySkills')
const bodyContact= document.querySelector('.bodyContact')
const linkOne = document.querySelector('.link-one')
const linkTwo = document.querySelector('.link-two')
const linkThree = document.querySelector('.link-three')
const skillsLink = document.querySelector('.skillsLink')
const transition = document.querySelector('.bodyTransition')

const go = document.querySelector('.go')
const presentation = document.querySelector('.presentation')
const landingPage = document.querySelector('.landingPage')
const block1 = document.querySelector ('#block1')
const block2 = document.querySelector ('#block2')
const block3 = document.querySelector ('#block3')
const menuBackSkills = document.querySelector('.menuBackSkills')
const menuBackContact = document.querySelector('.menuBackContact')
const menuBackProject = document.querySelector('.menuBackProject')
const menuBackMenu = document.querySelector('.menuBackMenu')
const nextButton = document.querySelector('.nextButton')

const topRightProject = document.querySelector('.topRightProject')
const middleLeftProject = document.querySelector('.middleLeftProject')
const middleRightProject = document.querySelector('.middleRightProject')
const poTitle = document.querySelector('.poTitle')
const derekTitle = document.querySelector('.derekTitle')
const visuPo = document.querySelector('.visuPo')
const visuDerek = document.querySelector('.visuDerek')




go.addEventListener ('click',()=>{
    transition.style.display = ''
    block1.className= 'blue'
    block2.className= 'pink'
    block3.className= 'orange'
    
    setTimeout (function(){
        presentation.style.display = 'none'
        landingPage.style.display = 'none'
        menu.style.display = ''
        
    },1600);
    setTimeout (function(){
        transition.style.display ='none'
    },2700);
}, );

linkOne.addEventListener ('click',()=>{
    transition.style.display = ''
    block1.className= 'blue'
    block2.className= 'blue'
    block3.className= 'blue'
    
    setTimeout (function(){
        menu.style.display = 'none'
        bodyProjects.style.display = ''
 
    },1600);
    setTimeout (function(){
        transition.style.display ='none'
    },2800);
}, );
linkTwo.addEventListener ('click',()=>{
    transition.style.display = ''
    block1.className= 'pink'
    block2.className= 'pink'
    block3.className= 'pink'
    
    setTimeout (function(){
        menu.style.display = 'none'
        bodySkills.style.display = ''
        
 
    },1600);
    setTimeout (function(){
        transition.style.display ='none'
    },2800);
}, );
linkThree.addEventListener ('click',()=>{
    transition.style.display = ''
    block1.className= 'orange'
    block2.className= 'orange'
    block3.className= 'orange'
    
    setTimeout (function(){
        menu.style.display = 'none'
        bodyContact.style.display = ''
 
    },1600);
    setTimeout (function(){
        transition.style.display ='none'
    },2800);
}, );

menuBackSkills.addEventListener ('click',()=>{
    transition.style.display = ''
    block1.className= 'blue'
    block2.className= 'pink'
    block3.className= 'orange'
    
    setTimeout (function(){
        bodySkills.style.display = 'none'
        bodyContact.style.display = 'none'
        menu.style.display = ''
        
 
    },1600);
    setTimeout (function(){
        transition.style.display ='none'
    },2700);
}, );
menuBackContact.addEventListener ('click',()=>{
    transition.style.display = ''
    block1.className= 'blue'
    block2.className= 'pink'
    block3.className= 'orange'
    
    setTimeout (function(){
        bodyContact.style.display = 'none'
        menu.style.display = ''
        
 
    },1600);
    setTimeout (function(){
        transition.style.display ='none'
    },2700);
}, );
menuBackProject.addEventListener ('click',()=>{
    transition.style.display = ''
    block1.className= 'blue'
    block2.className= 'pink'
    block3.className= 'orange'
    console.log('fonctionne')
    
    setTimeout (function(){
        bodyProjects.style.display = 'none'
        menu.style.display = ''
    },1600);
    setTimeout (function(){
        transition.style.display ='none'
    },2700);
}, );
menuBackMenu.addEventListener ('click',()=>{
    transition.style.display = ''
    block1.className= 'blue'
    block2.className= 'pink'
    block3.className= 'orange'
    
    setTimeout (function(){
        menu.style.display = 'none'
        landingPage.style.display = ''
        presentation.style.display = ''
        
 
    },1600);
    setTimeout (function(){
        transition.style.display ='none'
    },2700);
}, );


const tstPo = document.querySelector ('.tstPo')
const tstDerek = document.querySelector ('.tstDerek')
const poLink = document.querySelector ('.poLink')
const derekLink = document.querySelector ('.derekLink')
const prevButton = document.querySelector ('.prevButton')
var a = 0
var tstArray = [tstPo, tstDerek]
var visuArray = [visuPo, visuDerek]
var titleArray = [poTitle, derekTitle]
var linkArray = [poLink, derekLink]

nextButton.addEventListener ('click',()=>{
    topRightProject.classList.add ('nextSlideAnimation')
    middleRightProject.classList.add ('nextSlideAnimation')
    middleLeftProject.classList.add ('nextSlideAnimationWindow')
    setTimeout (function(){
        tstArray[a].classList.toggle ('displayNone')
        visuArray[a].classList.toggle ('displayNone')
        titleArray[a].classList.toggle ('displayNone')
        linkArray[a].classList.toggle ('displayNone')
        
        a = a + 1
        if (a > (visuArray.length - 1)){
            a = 0
        } 
        tstArray[a].classList.toggle ('displayNone')
        visuArray[a].classList.toggle ('displayNone')
        titleArray[a].classList.toggle ('displayNone')
        linkArray[a].classList.toggle ('displayNone')
        
    },1000);
    setTimeout (function(){
        topRightProject.classList.remove ('nextSlideAnimation')
    middleRightProject.classList.remove ('nextSlideAnimation')
    middleLeftProject.classList.remove ('nextSlideAnimationWindow')
    },2100);
},);
prevButton.addEventListener ('click',()=>{
    topRightProject.classList.add ('nextSlideAnimation')
    middleRightProject.classList.add ('nextSlideAnimation')
    middleLeftProject.classList.add ('nextSlideAnimationWindow')
    setTimeout (function(){
        tstArray[a].classList.toggle ('displayNone')
        visuArray[a].classList.toggle ('displayNone')
        titleArray[a].classList.toggle ('displayNone')
        linkArray[a].classList.toggle ('displayNone')
        
        a = a - 1
        if (a < 0){
            a = (visuArray.length-1)
        } 
        tstArray[a].classList.toggle ('displayNone')
        visuArray[a].classList.toggle ('displayNone')
        titleArray[a].classList.toggle ('displayNone')
        linkArray[a].classList.toggle ('displayNone')
        
    },1000);
    setTimeout (function(){
        topRightProject.classList.remove ('nextSlideAnimation')
    middleRightProject.classList.remove ('nextSlideAnimation')
    middleLeftProject.classList.remove ('nextSlideAnimationWindow')
    },2100);
},);


/*
nextButton.addEventListener ('click', ()=> {
    tstArray[a].classList.toggle ('displayNone')
    visuArray[a].classList.toggle ('displayNone')
    a = a + 1
    array[a].classList.toggle ('displayNone')
    visuArray[a].classList.toggle ('displayNone')
})*/






/* container.addEventListener('', (event) => {
    
    
    
    setTimeout(function() {
        loadingLeft.style.height = '95.5%'
        loadingRight.style.height = '95.5%'
        loadingLeft.style.visibility = 'visible'
        loadingRight.style.visibility = 'visible'
        
        
    }, );
    setTimeout(function() {
        borderLeft.style.width = '50%'
        borderRight.style.width = '50%'
        loadingRight.style.width = '49%'
        loadingLeft.style.width = '49%'
        
    }, 2000);
    setTimeout(function() {
        loadingLeft.style.width = '2px'
        loadingRight.style.width = '2px'
        
        
    }, 4000);
    setTimeout(function() {
        
        container.style.display = 'none'
        menu.style.display = ''
        /*container.innerHTML = 
        '<div class="background-one"><div class="link-container"><a class="link-one" href="#">About</a></div></div><div class="background-two link-container"><a class="link-two" href="#">Skills</a></div><div class="background-three link-container"><a class="link-three" href="#">Contact</a></div>';
        */
        
       /* var node = document.querySelector('.horizontalLoading');
        var child = document.querySelector('.container');
        node.removeChild(child) ;*/
    /*
    }, 4000);
    setTimeout(function() {
        
        chevron.parentNode.removeChild(chevron);
        chevron1.parentNode.removeChild(chevron1);
        
        
    }, 6000);
  });

linkTwo.addEventListener ('click',()=>{
    menu.style.display = 'none'
    transition.style.display = ''
    setTimeout (function(){
        bodySkills.style.display = ''
        transition.style.display = 'none'
    },2200);
    
}, );

*/
