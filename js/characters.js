const requestURL = 'https://dragonball-api.com/api/characters?limit=58';

async function fetchCharactersJson(){
    const response = await fetch(requestURL);
    try{
        if (!response.ok) {
            throw new Error(`Fail to request Json ${response.status}`);
        }
        return await response.json();
    }
    catch (error){
        console.error('Fail to obtain the characters in Api : ', error);
        return null;
    }
   
}

function createCharacterCard ({name, gender, ki, maxKI, race, image, affiliation}){
    return `
        <div class="card" style="width: 550px;">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${race} - ${gender}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${ki}</li>
                <li class="list-group-item">${maxKI}</li>
                <li class="list-group-item">${affiliation}</li>
            </ul>
        </div>
`;
}

async function displayCharacters() {
    const charactersSection = document.getElementById('charactersSection');
    const charactersData = await fetchCharactersJson();

    if (charactersData && charactersData.items){
        const charactersCards = charactersData.items.map(createCharactersCard).join('');
        charactersSection.innerHTML = charactersCards;
    }
    else
    {
        charactersSection.innerHTML = `<p>Fail to charge characters Json</p>`;    
    }
}


displayCharacters();