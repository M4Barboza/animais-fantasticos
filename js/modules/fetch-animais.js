import AnimaNumeros from "./anima-numeros.js";


export default function initFetchAnimais() {
    async function fetchAnimais(url) {
        const animaisResponse = await fetch(url);
        const animaisJSON = await animaisResponse.json();
        const numerosGrid = document.querySelector('.numeros-grid')
        animaisJSON.forEach(animal => {
            const divAnimal = creatAnimail(animal);
            numerosGrid.appendChild(divAnimal);
        })
        const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo")

        animaNumeros.init();
    }

    function creatAnimail(animal) {
        const div = document.createElement('div');
        div.classList.add('numero-animal');

        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
        return div;

    }

    fetchAnimais('./animaisapi.json');
}

