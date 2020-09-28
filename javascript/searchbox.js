/* ============================================= */
/*              Search Button                    */
/* ============================================= */

// function searchGallery() {

    const searchBox = document.getElementById('search').value;
    let element = document.getElementsByClassName('item-gallery');
    
 
  for (i = 0; i < element.length; i++) {
    
    if (element[i].getAttribute('data-caption').toLowerCase().includes(searchBox.toLowerCase())) {
        element[i].classList.remove("non-matched-image")
    
    } else {
      element[i].classList.add("non-matched-image")
    }
 }
 
//  console.log(searchGallery);
 
// }
