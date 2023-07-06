const contentBlock = document.querySelector('.block')
const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')

const api = 'https://jsonplaceholder.typicode.com/todos'
let count = 198



const searchContent = () => {
    btn1.addEventListener('click', () => {
        count++
        if (count > 200){
            count = 1
        }
        fetch(`${api}/${count}`)
            .then(response => response.json())
            .then(data => {
                contentBlock.innerHTML = `
                    <h2>${data.title}</h2>
                    <span>${data.id}</span>
                    <span>${data.completed}</span>`

            })
    })
    btn2.addEventListener('click', () => {
        count--
        if(count < 1) {
            count = 1
        }   
        fetch(`${api}/${count}`)
            .then(response => response.json())
            .then(data => {
                contentBlock.innerHTML = `
                    <h2>${data.title}</h2>
                    <span>${data.id}</span>
                    <span>${data.completed}</span>`
            })
    })
}







searchContent()

