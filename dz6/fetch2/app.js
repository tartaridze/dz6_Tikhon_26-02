const contentBlock = document.querySelector('.block')

const api = "https://jsonplaceholder.typicode.com/photos"

const limit = 20

        fetch(`${api}?_limit=${limit}`)
            .then(response => response.json())
            .then(photos => {
                photos.forEach(photo => {
                    const photoElement = document.createElement('img')
                    photoElement.src = photo.url
                    photoElement.alt = photo.title
                    contentBlock.appendChild(photoElement)


                })
            })
