
const contenedorCards = document.getElementById("contenedor_cards");


function mostrarDigimon(digimonMostrados) {
    let cardsHTML = "";
    digimonMostrados.forEach(digimon => {
        cardsHTML += `
            
            <div class="card" style="width: 15rem; margin: 10px; background-color: green; padding: 5px">
            <img src="${digimon.image}" style="background-color:white" class="card-img-top" alt="${digimon.name}" >
            <div class="card-body" style="background-color: lightgreen"; >
            <p class="card-text nova-square-boldnormal"style="background-color: lightgreen";>${digimon.Type}</p>
                    <h5 class="card-title nova-square-bold" style="font-size: 15px ;background-color: lightgreen";">${digimon.name}</h5>
                    <p class="card-text nova-square-normal" style="margin-top: 10px ;background-color: lightgreen">${digimon.Attribute}</p>
                    <p class="card-text nova-square-normal" style="background-color: lightgreen";>Más información en: </p>
                    <a href="#" class="card-link"style="background-color: lightgreen">${digimon.descrip}</a>
            </div>
            </div>
        `;
    });
    contenedorCards.innerHTML = cardsHTML;
}
// Mostrar todo
mostrarDigimon(Digimons);
  