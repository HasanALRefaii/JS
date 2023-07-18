let color = document.getElementById('color')

if(sessionStorage.length>0){
    document.body.style.background = sessionStorage.color
}

color.onclick =function(){
    sessionStorage.setItem('color', color.value)
    document.body.style.background = color.value}