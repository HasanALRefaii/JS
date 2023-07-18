const names = 
 [
    {'name':'Michael', 'age':'30', 'major':'en'},
    {'name':'Mila', 'age':'32', 'major':'AR'},
    {'name':'Paul', 'age':'29', 'major':'PH'},
    {'name':'Dennis', 'age':'25', 'major':'math'},
    {'name':'rashed', 'age':'25', 'major':'math'},
    {'name':'ahmed', 'age':'25', 'major':'math'},
    {'name':'hasan', 'age':'25', 'major':'math'}

]



tableInfe(names)
function tableInfe(data) {
    let table = document.getElementById('table')
    for (let i =0 ; i< data.length ; i++){
        
       let  info =`<tr>
        <td>${data[i].name}</td>
        <td>${data[i].age}</td>
        <td>${data[i].major}</td>
        </tr>`
        table.innerHTML += info
    }

}


