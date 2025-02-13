import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import {useParams} from "react-router-dom"

const PokemonDetails= () => {
    const {name} = useParams();
    const [pokemon, setPokemon] = useState ({});
     
    return <>
   <h1>PokemonDetails.jsx</h1>
    
    <BrowserRouter>
    <Route>/pokemon/:name</Route>
    </BrowserRouter>
    </>
}


useEffect (() => {

    function fetch PokemonsByName= await async 
}
catch (error){
return("Informations du pokemon");
}
try{
    const response = await PokemonService.fetchPokemonByName(name);
    setPokemon ({...response.data, ...response.data}));
} catch (error)
  
function Poke{
    useEffect
}

export default;