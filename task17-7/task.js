let personal = document.getElementById("personal");
let submit = document.getElementById("submit")
let has = new XMLHttpRequest();
has.open("GET","task.json")
has.onload= function () {
    let personaljson= JSON.parse(has.responseText)
    let info = ` `
submit.onclick = function () {
    for(let key in personaljson){
        info +=`<tr>
        <td>${personaljson[key].name}</td>
        <td>${personaljson[key].age}</td>
        <td>${personaljson[key].major}</td>
        <td>${personaljson[key].university}</td>
        <td><img src="${personaljson[key].image}"  width="150px" height="150px"></td>
    </tr>`
}
personal.innerHTML=info
}}
has.send()