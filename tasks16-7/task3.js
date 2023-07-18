
let data1 = document.getElementById('data1')
let p1 = document.getElementById('p1')
p1.style.display='inline'
le
//  data1.onsubmit = function(){
//     let username = document.getElementById('name').value  ;
//     let namere = /[a-zA-Z]{1}/;
//     if (validresult===false){
//         return p1.textContent='wrong name'   let validresult = namere.test(username);
//  
//     }

//  }

document.getElementById('data1').onsubmit = function(){
    let nameInput =   document.getElementById('name').value ;
    let namere = /[a-zA-Z]{1}/;
    let validresult = namere.test(nameInput);
    if (validresult===false){
        // return console.log('wrong name')
    
    return p1.textContent='wrong name'
   

}}