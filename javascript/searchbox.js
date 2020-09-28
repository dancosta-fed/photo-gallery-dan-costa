/* ============================================= */
/*              Search Button                    */
/* ============================================= */
    
// Getting elements from the input
const searchBox = document.getElementById('search');
let gallery = document.getElementsByClassName('item-gallery');
    
    
// User input value
searchBox.addEventListener("keyup", e => { 
    const searchString = e.target.value.toUpperCase(); 
    
    // for any input check the data caption (upperCase sensitive)
    for (let i = 0; i < gallery.length; i++) {
        const userInput = gallery[i].getAttribute('data-caption').toUpperCase()

        // if user includes letters or name block the image on screen
        if (userInput.includes(searchString)) {
            gallery[i].style.display = 'block';
            
            // if nothing matches display no image
        } else {
            gallery[i].style.display = 'none';
        }
    }
});