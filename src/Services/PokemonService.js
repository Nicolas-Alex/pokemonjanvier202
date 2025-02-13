function fetchPokemons(){
    return axios.get ("https://pokeapi.co/api/v2/pokemon?limit=500003");
    
}
export default{
    fetchPokemons
}
function fetchPokemonByName(){
    return axios.get ('https://pokeapi.co/api/v2/pokemon/'+name);
}
}
  function fetchPokemonSpeciesByName (name) {
    return axios.get ('https://pokeapi.co/api/v2/pokemon')
  }
export default {
    fetchPokemonByName

}