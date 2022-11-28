const xhr = new XMLHttpRequest,
container = document.querySelector(".cards");


xhr.addEventListener("readystatechange",()=>{
    if(xhr.readyState == 4){
      const personajes =  JSON.parse(xhr.responseText).results;

      console.log(personajes);

      personajes.forEach((personaje)=>{
        const card = document.createRange().createContextualFragment(
            // <section class="cards">
            // <div class="container">
            `<div class="card">
                <figure class="card-figure">
                  <img class="card-img" src="${personaje.image}" alt="">
                </figure>
                <div class="card-body">
                  <h3 class="card-name">${personaje.name}</h3>
                  <span class="card-status" data-status="live">${personaje.status} - ${personaje.species}</span>
                  <div class="card-last">
                    <span>Last known location:</span>
                    <p class="card-last-location">${personaje.location.name}</p>
                  </div>
                  <div class="card-first">
                    <span>First seen in:</span>
                    <p class="card-first-seen">Lawnmower Dog</p>
                  </div>
                </div>
              </div>`
          //   </div>
          // </section>
        )

        container.append(card);
      })
        
      
    }
})


xhr.open("GET","https://rickandmortyapi.com/api/character")

xhr.send()

