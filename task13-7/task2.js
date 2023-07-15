//task1

let par =document.getElementsByTagName('p')[0]
par.addEventListener('mouseout' , function(){
    par.innerHTML ='can I help you ?'
} )
par.addEventListener('mouseover' , function(){
    par.innerHTML ='Hello world !'
} )
par.style.background = 'yellow'
par.style.width= '300px'
par.style.height= '50px'
par.style.fontSize= '20px'
par.style.textAlign= 'center'
par.style.fontWeight= 'bold'
par.style.marginBottom = '300px'

//task 2

const country = document.getElementById('country');
const img = document.getElementById('img');
img.style.width = '400px'

country.onchange = function(){
    if (country.value ==='palestine'){
        img.setAttribute('src','img/pa.png')
    }
    else {
        img.setAttribute('src','img/jordan.png')
    }
}

