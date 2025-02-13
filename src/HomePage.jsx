import { useState } from "react";
import PokemonService from "./Services/PokemonService";
import PokemonCard from "./Components/PokemonCard";
const HomePage  = () => {}
    const [pokemons, setPokemons] = useState ([]);
    return <>
const fetchPokemons = async () ={
    try{
        const response = await PokemonService.fetchPokemons();
        console.log(response.data.results);
        setPokemons(response.data.resuts);
       
    }
        catch(error) {
        console.error(error);
};
useEffect(()=> {
    fetchPokemons();
},[]);


    return<>
    <Container classNam="d-flex flex-column align-items-center">
  
    <h1>Home Page</h1>

    <div className="d-flex justify-content-around gap2 flex-wrap">
    {pokemons.map((pokemon, index))=>{
        return <PokemonCard key={index} pokemonCard={pokemon} />
       
    })}
    </div>
    </Container>
    </>;
}
 
export default HomePage ;