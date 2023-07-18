
  let container = document.getElementById('container')
  let div = document.getElementById('div')
  let div2 = document.getElementById('div2')
  let div3 = document.getElementById('div3')
  let name = localStorage.getItem('name') ;
  let age = localStorage.getItem('age') ;
  let gender =localStorage.getItem('gender');
  let date = localStorage.getItem('date');
  let image = localStorage.getItem('image');
  let des = localStorage.getItem('des');
  let uni = localStorage.getItem('uni');
  let sib = localStorage.getItem('sib');
  let sib2 = localStorage.getItem('sib2');
 let card = ``;
 if(localStorage.length>0){
  card += `<div >
  <p>${name}</p>
  <p>${age}</p>
  <p>${gender}</p>
  <p>${date}</p>
  <p>${image}</p> 
  </div>`
  
 div.innerHTML=card;    
}
let card2 = ``;
 if(localStorage.length>0){
  card2 += `<div > 
  <p>${des}</p>
  <p>${uni}</p>
  </div>`
 div2.innerHTML=card2;    
}
let card3 = ``;
 if(localStorage.length>0){
  card3 += `<div >
  <p>${sib}</p>
  <p>${sib2}</p>
  </div>`
 div3.innerHTML=card3;    
}
 container.onsubmit = function(){
   let name = document.getElementById('name')
    localStorage.setItem('name' , name.value)

 let age = document.getElementById('age')
 localStorage.setItem('age' , age.value)

 let gender = document.getElementById('gender')
 localStorage.setItem('gender' , gender.value)

 let date = document.getElementById('date')
 localStorage.setItem('date' , date.value)

 let image = document.getElementById('image')
 localStorage.setItem('image' , image.value)

 let html=document.getElementById('html')
 if (html===checked.value){
  localStorage.setItem('html')
 }

 let des = document.getElementById('des')
 localStorage.setItem('des' , des.value)

 let uni = document.getElementById('uni')
 localStorage.setItem('uni' , uni.value)

 let sib = document.getElementById('sib')
 localStorage.setItem('sib' , sib.value)

 let sib2 = document.getElementById('sib2')
 localStorage.setItem('sib2' , sib2.value)
 }
