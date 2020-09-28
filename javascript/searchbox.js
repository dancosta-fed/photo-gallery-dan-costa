/* ============================================= */
/*              Search Button                    */
/* ============================================= */

    const searchBox = document.getElementById('search').value;
    let gallery = document.getElementsByClassName('item-gallery');
    let strainer = search.value.toUpperCase();

    
    for (let i = 0; i < gallery.length; i++) {
        const upperCaseInput = gallery[i].getAttribute('data-caption').toUpperCase()

        if (upperCaseInput.includes(strainer)) {
            gallery[i].style.display = 'block';
    
        } else {
            gallery[i].style.display = 'none';
        }

        console.log(upperCaseInput.includes(strainer));
    }