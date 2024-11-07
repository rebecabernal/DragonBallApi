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

function createCharacterCard ({name, gender, ki, maxKi, race, image, affiliation}){
    return `
        <div class="cards">
            <img src="${image}" class="imgTop" alt="Dragon Ball character">
            <div class="body">
                <p class="name">${name}</p>
                <p class="text">${race} - ${gender}</p>
            </div>
            <div class="group">
                <p class="info">Base Ki: ${ki}</p>
                <p class="info">Max Ki: ${maxKi}</p>
                <p class="info">Affiliation: ${affiliation}</p>
            </div>
        </div>
`;
}

async function displayCharacters() {
    const charactersSection = document.getElementById('charactersSection');
    const charactersData = await fetchCharactersJson();

    if (charactersData && charactersData.items){
        const characterCards = charactersData.items.map(createCharacterCard).join('');
        charactersSection.innerHTML = characterCards;
    }
    else
    {
        charactersSection.innerHTML = `<p>Fail to charge characters Json</p>`;    
    }
}


displayCharacters();