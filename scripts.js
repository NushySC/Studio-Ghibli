//Building the web elements

const app = document.getElementById("root")

const logo = document.createElement('img')
logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)


//New variable with a XMLH object assigned to it. XMLHttpRequest is a built-in method of making requests. There is also a Fetch API which can, which is simpler but has less browser support because it's newer.

var request = new XMLHttpRequest()

//New connection with GET request
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function() {

    var data = JSON.parse(this.response)

    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
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
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = `Damnit, it's not working!!`
        app.appendChild(errorMessage)
    }

}

request.send()


