const menuItems = document.getElementById('items')
const remove = document.getElementById('remove')
const toggle = document.getElementById('toggle')

const skills = document.querySelector('.skills')
const education = document.querySelector('.education')
const sub = document.querySelector('.subtitles-content')
const ed = document.querySelector('.ed')

const body = document.body

skills.addEventListener('click', display)
education.addEventListener('click', displayed)

function display(){
    sub.style.display = 'block'
}
function displayed(){
    ed.style.display = 'block'
}

body.addEventListener('click', (event) => {
    // Check if the clicked element is not the skills element or its children
    if (!event.target.closest('.skills')) {
      sub.style.display = 'none'; // Hide the sub content if clicked outside skills
    }
});
body.addEventListener('click', (event) => {
    if (!event.target.closest('.education')) {
      ed.style.display = 'none'; // Hide the sub content if clicked outside skills
    }
});

  

//for naviagtion
remove.addEventListener('click',()=>{
    menuItems.style.right = "-200px"
})

toggle.addEventListener('click',()=>{
    menuItems.style.right = "0px"
})