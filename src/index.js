
let theChosenOne;

fetch(`http://localhost:3000/ducks`)
    .then(res => res.json())
    .then(ducksArray => {
        renderDuckImages(ducksArray)
        duckDetails(ducksArray[0])})

const renderDuckImages = (ducksArray) => {
    ducksArray.forEach(duck => createImage(duck))
};

const createImage = (duck) => {
    const navBar = document.getElementById('duck-nav')
    const duckImg = document.createElement('img')

    duckImg.src = duck.img_url

    navBar.appendChild(duckImg)

    duckImg.addEventListener('click', (e) =>
    duckDetails(duck))

}

const duckDetails = (duck) => {
    const duckName = document.getElementById('duck-display-name')
    const duckDisplayImg = document.getElementById('duck-display-image')
    const duckLikes = document.getElementById('duck-display-likes')

    duckName.textContent = duck.name
    duckDisplayImg.src = duck.img_url
    duckLikes.textContent = duck.likes + " likes"

    theChosenOne = duck
}

   const updateLikesBtn = document.getElementById('duck-display-likes')
    updateLikesBtn.addEventListener('click', (e) => {
        console.log(theChosenOne.likes)
        updateLikesBtn.textContent = `${++theChosenOne.likes} likes`
})



const createDuckForm = () => {
    const form = document.getElementById('new-duck-form')
    const newName = document.getElementsByTagName('input')[0]
    const newImage = document.getElementsByTagName('input')[1]

    
    const newDuckObj = {
        name: newName.value,
        img_url: newImage.value,
        likes: 0
    }
    
    console.log(newDuckObj)
    createImage(newDuckObj)
    form.reset()
    
}

const createButton = document.getElementsByTagName('input')[2]
    createButton.addEventListener('click', (e) => {
        e.preventDefault()
        createDuckForm()
    })




/*

    Challenge 1:
        - Display all ducks in the bar - http://localhost:3000/ducks - complete

    Challenge 2:
        - Display details a duck when clicked along with a "likes" button and number of likes - complete

    Challenge 3:
        - Like button increments total likes of the specific duck.
            - "X likes"

    Challenge 4:
        - Create new duck with same behaviors as Challenges 2 & 3. Starts with 0 likes.
            - Persistance not necessary





*/
