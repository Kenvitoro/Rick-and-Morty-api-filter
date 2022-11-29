
function getCards(){
  const xhr = new XMLHttpRequest(),
  container = document.querySelector(".cards");

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4) {
    const personajes = JSON.parse(xhr.responseText).results;

    // console.log(personajes);

    personajes.forEach((personaje) => {
      const card = document.createRange().createContextualFragment(
        `<div class="card">
                <figure class="card-figure">
                  <img class="card-img" src="${personaje.image}" alt="">
                </figure>
                <div class="card-body">
                  <h3 class="card-name">${personaje.name}</h3>
                  <span class="card-status" data-live='${personaje.status}'>${personaje.status} - ${personaje.species}</span>
                  <div class="card-last">
                    <span>Last known location:</span>
                    <p class="card-last-location">${personaje.location.name}</p>
                  </div>
                  <div class="card-first">
                    <span>Gender:</span>
                    <p class="card-first-seen">${personaje.gender}</p>
                  </div>
                </div>
              </div>`
      );

      container.append(card);
    });
  }
});

xhr.open("GET", "https://rickandmortyapi.com/api/character");

xhr.send();
}
getCards();


function getPages(){
  const xhr = new XMLHttpRequest(),
  container = document.querySelector(".pages");

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4) {
    const maxPages = JSON.parse(xhr.responseText).info.pages;

    // console.log(maxPages);

    const pages = [];

    for(let i=1;i<maxPages+1;i++){  
      if(i==1){
      pages.push(`https://rickandmortyapi.com/api/character`);
      }

      if(i!=1){ 
      pages.push(`https://rickandmortyapi.com/api/character?page=${i}`);
      }
    };

    // console.log(pages);

    pages.forEach((page,index)=>{
      const number = document.createRange().createContextualFragment(
        `<div class="number">
        ${index+1}
          </div>`
      );

      container.append(number);
    })


  }
});

xhr.open("GET", "https://rickandmortyapi.com/api/character");

xhr.send();
}
getPages();


function getPagesAll(){

 
  
  const pagesContainer = document.querySelector(".pages");

  
  pagesContainer.addEventListener("click",(e)=>{
    const pageClass = e.target.classList.value;
    const pages = document.querySelectorAll(".number");

    if(pageClass != "number"){
      return 
    }

    if(pageClass == "number"){

      pages.forEach((page)=>{
        page.classList.remove("number-focus")
      })
        
      
      const page = e.target;
      // console.log(page);


      page.classList.add("number-focus")



      const xhr = new XMLHttpRequest(),
      container = document.querySelector(".cards");



      container.innerHTML = "";



    
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4) {
        const personajes = JSON.parse(xhr.responseText).results;
    
        personajes.forEach((personaje) => {
          const card = document.createRange().createContextualFragment(
            `<div class="card">
                    <figure class="card-figure">
                      <img class="card-img" src="${personaje.image}" alt="">
                    </figure>
                    <div class="card-body">
                      <h3 class="card-name">${personaje.name}</h3>
                      <span class="card-status" data-live='${personaje.status}'>${personaje.status} - ${personaje.species}</span>
                      <div class="card-last">
                        <span>Last known location:</span>
                        <p class="card-last-location">${personaje.location.name}</p>
                      </div>
                      <div class="card-first">
                        <span>Gender:</span>
                        <p class="card-first-seen">${personaje.gender}</p>
                      </div>
                    </div>
                  </div>`
          );
    
          container.append(card);
        });
      }
    });
    
    xhr.open("GET", `https://rickandmortyapi.com/api/character?page=${e.target.innerText}`);
    
    xhr.send();
      
    }




  })
  
}

getPagesAll();

