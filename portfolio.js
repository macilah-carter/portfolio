const menuItems = document.getElementById('items')
const remove = document.getElementById('remove')
const toggle = document.getElementById('toggle')

remove.addEventListener('click',()=>{
    menuItems.style.right = "-200px"
})

toggle.addEventListener('click',()=>{
    menuItems.style.right = "0px"
})