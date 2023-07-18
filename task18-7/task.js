let personal = document.getElementById("personal")
let submit = document.getElementById("submit")
async function get(){
    const response = await fetch ("https://api.github.com/users/HasanALRefaii/repos")
    const data = await response.json()
    let info = ` `
    submit.onclick = function () {
    //     for(let key in data){
    //         info +=`<tr>
    //         <td>${data[key].full_name}</td>
    //         <td>${data[key].id}</td>
    //         <td>${data[key].url}</td>
    //         <tr> `
    //     }
    
    //     personal.innerHTML=info
    // }

    for (let i= 0 ; i<data.length ; i++){


        info +=`<tr>
             <td>${data[i].full_name}</td>
             <td>${data[i].id}</td>
             <td>${data[i].url}</td>
             <tr> `
         }
         personal.innerHTML=info
    }
} 
get()