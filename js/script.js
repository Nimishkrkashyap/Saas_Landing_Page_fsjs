let menu = document.getElementById('menu')
let listitem = document.getElementById('item-list')

menu.addEventListener('click',function(){
    if (listitem.style.display === 'none'){
    listitem.style.display = 'block'
    }
    else{
    listitem.style.display = 'none'

    }
})