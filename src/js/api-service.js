const BASE_URL = 'https://pokeapi.co/api/v2';

function fetchPakemonId(pakemonId) {
  return fetch(`${BASE_URL}/pokemon/${pakemonId}`).then(response => response.json());
}

export default { fetchPakemonId };
