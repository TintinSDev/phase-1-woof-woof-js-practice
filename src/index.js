const BASE_URL = "http://localhost:3000";

async function getPups() {
    const pupsResponse = await fetch(`${BASE_URL}/pups`);
    const pups = await pupsResponse.json();
    return pups;
}

function pupSpan(dog) {
    const span = document.createElement("span");
    span.innerText = dog.name;
    span.addEventListener("click", () => {
        const dogInfo = document.querySelector("#dog-info");
        dogInfo.innerHTML =dogInfoElements(dog);
    })
    return span;
}
function dogInfoElements(dog) {
    return `
    <img src="${dog.image}" />
<h2>${dog.name}</h2>
<button>Good Dog!</button>
`;
}
document.addEventListener("DOMContentLoaded", () => {
    const dogBarDiv = document.getElementById("dog-bar");
    
    
    
    getPups().then(pups => { 
pups.map((dog) => {
    const span = pupSpan(dog);
    dogBarDiv.appendChild(span);
})
    })
    console.log(dogBarDiv)
})
