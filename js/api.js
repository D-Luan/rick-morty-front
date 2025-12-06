const API_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = async (page = 1) => {
  try {
    const response = await fetch(`${API_URL}/?page=${page}`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();

    return data.results; 
    
  } catch (error) {
    console.error('Failed to find characters:', error);
    return [];
  }
};