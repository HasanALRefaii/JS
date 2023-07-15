let names = ['hasan' , 'ali' , 'hosam' , 'ahmed' , 'majed']
let ages = ['24' , '25' , '22' , '20']
let container = document.createElement('div')
document.body.appendChild(container)

function card (names,ages)
{
    let section = document.createElement('div')
    let name = document.createElement('h1')
    let age = document.createElement('h2')
    let img = document.createElement('img')

    let content = document.createTextNode(names)
    let content2 = document.createTextNode(ages)
    img.src = 'img/img1.jpg'
    name.appendChild(content)
    age.appendChild(content2)

    section.appendChild(name)
    section.appendChild(age)
    section.appendChild(img)

    img.style.width = '100%'
    img.style.height = '250px'
    section.style.height ='400px'
    section.style.width ='300px'
    section.style.background = 'gray'
    section.style.textAlign = 'center' 
    section.style.padding = '15px' 
    section.style.margin = '15px'
    section.style.display = 'inline-block'

    container.appendChild(section)
}



for (let i=0 ; i<names.length ; i++) {
    card (names[i],ages[i])
    
}
