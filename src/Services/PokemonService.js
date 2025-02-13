function fetchPokemons(){
    return axios.get ("https://pokeapi.co/api/v2/pokemon?limit=500003");
    
}
export default{
    fetchPokemons
}
function fetchPokmonByName(){
    return URL.get ("'https://pokeapi.co/api/v2/pokemon/'+name");
}
function PokemonService(){
    return URL.get (" 'https://pokeapi.co/api/v2/pokemon-species/'+name")
}