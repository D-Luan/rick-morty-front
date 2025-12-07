import { fetchCharacters } from "./api.js";

/**
 * @param {Object} char
 * @returns {string} 
 */
function createCharacterCard(char) {
    const statusClass = char.status === 'Alive' ? 'status-alive'
        : char.status === 'Dead' ? 'status-dead'
        : 'status-unknown';

    return `
        <article class="character-card">
            <img src="${char.image}" alt="${char.name}" class="card-image" loading="lazy">
            <div class="card-content">
                <h2 class="card-name">${char.name}</h2>
                <p class="card-info">
                    <span class="status-indicator ${statusClass}"></span>
                    ${char.status} - ${char.species}
                </p>
                <p class="card-info">Last know location:</p>
                <p class="card-info" style="color: #374151">${char.location.name}</p>
            </div>
        </article>    
    `;
}

/**
 * @param {Array}
 */
function renderCharacters(characters) {
    const appElement = document.getElementById('app');

    appElement.innerHTML = '';

    const htmlContent = characters.map(char => createCharacterCard(char)).join('');

    appElement.innerHTML = htmlContent;
}

async function loadApp() {
    console.log('App: initializing...');

    try {
        const characters = await fetchCharacters();
        renderCharacters(characters);
        console.log(`Rendered ${characters.length} characters.`);
    }  catch (error) {
        console.error('App: Fatal error', error);

        document.getElementById('app').innerHTML = '<p style="color:red; text-align:center">Error loading data.</p>';
    }
}

loadApp();