import { fetchCharacters } from "./api.js";

async function loadApp() {
    console.log('App: initializing...');

    try {
        const characters = await fetchCharacters();

        console.log('App: Dasta received successfully', characters);

        if (characters.length > 0) {
            console.log(`Success! Loaded ${characters.length} characters.`);
        }

    }  catch (error) {
        console.error('App: Fatal error during initialization', error);
    }
}

loadApp();