const requestURL = 'https://dragonball-api.com/api/characters?limit=58';

async function fetchItemsJson(){
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
        <div class="card">
            <img src="${image}" class="cardImgTop" alt="Dragon Ball Character">
            <div class="cardBody">
                <h5 class="cardTitle">${name}</h5>
                <p class="cardText">${race} - ${gender}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="listGroupItem"><p>Base Ki: ${ki}</p></li>
                <li class="listGroupItem"><p>Max Ki: ${maxKi}</p></li>
                <li class="listGroupItem"><p>Affiliation: ${affiliation}</p></li>
            </ul>
        </div>
`;
}

async function displayItems() {
    const itemsSection = document.getElementById('itemsSection');
    const itemsData = await fetchItemsJson();

    if (itemsData && itemsData.items){
        const characterCards = itemsData.items.map(createCharacterCard).join('');
        itemsSection.innerHTML = characterCards;
    }
    else
    {
        itemsSection.innerHTML = `<p>Fail to charge characters Json</p>`;    
    }
}


displayItems();