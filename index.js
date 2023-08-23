const api = {
    Bulbasaur:{
        desc : "Se dice que el fuego de Charizard arde con más fuerza cuantas más duras batallas haya vivido.",
        type : ["Fuego" , "Volador"],
        img : "imagenes/a1.png",
        debilidad: "Agua",
    },
    Ivysaur:{
        desc : "Se dice que el fuego de Charizard arde con más fuerza cuantas más duras batallas haya vivido.",
        type : ["Fuego" , "Volador"],
        img : "imagenes/a2.png",
        debilidad: "Agua",
    },
    Venusaur:{
        desc : "La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol.",
        type : ["Planta"],
        img : "imagenes/a3.png",
        debilidad: "Agua", 
    },
    Charmander:{
        desc : "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.",
        type : ["Fuego" , "Volador"],
        img : "imagenes/a4.png",
        debilidad: "Agua",
    },
    Charmeleon:{
        desc : "Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras.",
        type : ["Fuego" , "Volador"],
        img : "imagenes/a5.png",
        debilidad: "Agua",
    },

    Charizar: {
        desc : "Se dice que el fuego de Charizard arde con más fuerza cuantas más duras batallas haya vivido.",
        type : ["Fuego" , "Volador"],
        img : "imagenes/a6.png",
        debilidad: "Agua",
    },
    Squirtle:{
        desc : "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble.",
        type : ["Agua"],
        img : "imagenes/a7.png",
        debilidad: "Planta",
    },
    Wartortle:{
        desc : "Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón.",
        type : ["Agua"],
        img : "imagenes/a8.png",
        debilidad: "Planta",
    },
    Blastoise:{
        desc : "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón.",
        type : ["Agua"],
        img : "imagenes/a9.png",
        debilidad: "Planta",
    }
}

document.addEventListener("DOMContentLoaded", function () {
    console.log('modal?')
    const modal = document.getElementById("modal");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const pokemonImages = document.querySelectorAll(".pokemon-image");
    const pokemonName = document.getElementById("pokemon-name");
    const pokemonDesc = document.getElementById("pokemon-desc");
    const pokemonTypes = document.getElementById("pokemon-types");
    const pokemonDebilidad = document.getElementById("pokemon-debilidad");
    const pokemonImage = document.getElementById("pokemon-image");
  
    closeModalBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    pokemonImages.forEach(function (image) {
      image.addEventListener("click", function () {
        const pokemonInfo = api[image.alt];
        pokemonName.textContent = image.alt;
        pokemonDesc.textContent = pokemonInfo.desc;
        pokemonTypes.textContent = "Types: " + pokemonInfo.type.join(", ");
        pokemonDebilidad.textContent = "Debilidad: " + pokemonInfo.debilidad;
        modal.style.display = "block";
        pokemonImage.src = pokemonInfo.img; 
        pokemonImage.alt = image.alt; 
      });
    });
  
    
  });

 