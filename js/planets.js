const requestURL = 'https://dragonball-api.com/api/planets?limit=20';

async function fetchPlanetJson(){
    const response = await fetch(requestURL);
    try{
        if (!response.ok) {
            throw new Error(`Fail to request Json ${response.status}`);
        }
        return await response.json();
    }
    catch (error){
        console.error('Fail to obtain the planets in Api : ', error);
        return null;
    }
   
}

function createPlanetsCard ({name, image, description}){
    return `
        <div class="card">
            <img src="${image}" class="cardImgTop" alt="...">
            <div class="cardBody">
                <h5 class="cardTitle">${name}</h5>
                <p class="cardText">${description}</p>
            </div>
`;
}

async function displayPlanets() {
    const planetSection = document.getElementById('planetSection');
    const planetsData = await fetchPlanetJson();

    if (planetsData && planetsData.items){
        const planetCards = planetsData.items.map(createPlanetsCard).join('');
        planetSection.innerHTML = planetCards;
    }
    else
    {
        planetSection.innerHTML = `<p>Fail to charge planets Json</p>`;    
    }
}


displayPlanets();