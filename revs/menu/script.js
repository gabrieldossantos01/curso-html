const btn = document.getElementById('open_btn')
const side = document.getElementById('side')
btn.addEventListener('click' , open)
function open() {    
    side.style.width = '190px'
    btn.style.marginLeft = '130px'  
}

