const contentBlock = document.querySelector('.block')
const btn = document.querySelector('.btn')

const api = "https://jsonplaceholder.typicode.com/photos"

let count = 0
const searchContent = () => {
    btn.addEventListener('click', () => {
        count++
        console.log(count)
        if (count > 20){
            count = 0
        }
        fetch(`${api}/${count}`)
            .then(response => response.json())
            .then(data => {
                contentBlock.innerHTML = `
                    <img src="${data.url}" alt="photo">    `
            })
    })
}
searchContent()