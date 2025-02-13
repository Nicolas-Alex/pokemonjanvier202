import { useState } from "react";
import PokemonService from "./Services/PokemonService";
import PokemonCard from "./Components/PokemonCard";
import { Form } from "react-bootstrap";
 
const HomePage  = () => {}
    const [pokemons, setPokemons] = useState ([]);
    const [searchValue, setSearchValue] = useState(null);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
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
    {pokemons.map((pokemon, index))=>{ pokemonCard={pokemon} />
       
        return <PokemonCard key={index}
    })}
    <Form className="col-12 m-3">
        <Form.Control type="text" placeholder="Rechercher"value={searchValue} onChange={handleChange} />

    </Form>
    </div className="d-flex">
    </Container>
    </>;
}
useEffect(() => {
    const filteredPokemons = pokemons.filter((toLowerCase().includes(searchValue.toLowerCase());
    console.log()
}}
  setFilteredPokemons(filteredPokemons);
  [searchValue]);
 
  
export default HomePage;