const app = document.getElementById("root")

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)


    const url = 'https://ghibliapi.herokuapp.com/films';
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {data.forEach(movie => {
        //console.log(movie.title)

        //For each movie, create a card
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        //for each create a h1 with the title
        const h1 = document.createElement('h1')
        h1.textContent = movie.title

        //for each, add a director
        const h3 = document.createElement('h3')
        h3.textContent = movie.director

        //add year
        const h5 = document.createElement('h5')
        h5.textContent = movie.release_date

        //for each, create a p and add the description
        const p = document.createElement('p')
        movie.description = movie.description.substring(0, 300) // Limit to 300 characters
        p.textContent = `${movie.description}...` // End with an ellipses

        // Append the cards to the container element
        container.appendChild(card)

        // Each card will have an h1 and a p
        card.appendChild(h1)
        card.appendChild(h3)
        card.appendChild(h5)
        card.appendChild(p)

    })
})
    .catch(function(error) {
      console.log(error);
    });   