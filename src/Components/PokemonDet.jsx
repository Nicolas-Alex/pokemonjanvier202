import { useEffect } from "react"
import { BrowserRouter } from "react-router-dom"
import {useParams} from "react-router-dom"
import CanvasJSReact from "@canvasjs/react-charts"
const PokemonnCard = ({pokemonCard}) => {
    const navigate= useNavigate();
}

const PokemonDetails= () => {
    const {name} = useParams();
    const [pokemon, setPokemon] = useState ({});
    const CanvasJSChart= CanvasJSReact.CanvasJSChart;
     
    const CanvasJSChart = CanvasJSReact.CanvasJSChart;
    return <>
   <h1>PokemonDetails.jsx</h1>
    
    <BrowserRouter>
    <Route>/pokemon/:name</Route>
    </BrowserRouter>
    </>
    <CanvasJSChart options={options}>
        <div className="col-12"></div>
    </CanvasJSChart>
}


useEffect (()  =>{

    function fetch PokemonsByName= await async 
}
catch (error){
return("Informations du pokemon");
}
try{
    const response = await PokemonService.fetchPokemonByName(name);
    setPokemon ({...response.data, ...response.data}));
} catch (error)
  
return <Container className="d-flex flex-column align-items-center">
    <h1>{pokemon.names && pokemon.names[4].name}</h1>
    /*Je créer la div Gauche qui contient l'image et les stats*/
    <div id="gauche" className="col-5 d-flex flex-column align-items-center ">

      console.log()
        <div id="img">
            <img src={"https://img.pokemondb.net/artwork"+name+".jpg"} alt=(pokemon.name) 
        </div>
    </div>
    console.log(response.data.stats)
    console.log({y:stat.base_stat, label:stat.stat.name});
      <div>
    Stats
    </div>
    <div id="droite" className="col-5 d flex flex-column align-items-center">
        /*Si pokemon.flavor_text_entries existe alors j'affiche pokemon.flavor_text_entries[16].flavor_test */
        <p id="description">{pokemon.flavor_text_entries[16].flavor_text}</p>
    </div>
    <div id="games" className="d-flex gap-1 flex-wrap">
        <div id="global-info" className="d-flex col-12 justify-content-between bg-primary mt-3 gap-2">
            <div id="infos" className="d-flex flex-column col-5"></div>
            <h3>Taille:</h3>
            <p>{pokemon.height}</p>
            <h3>Poids:</h3>
        </div>
        {pokemon.game_indices && pokemon.game_indices.map(game, index)} => {
            return <button className="d-flex gap-1 flex-wrap"></button>
            return <button className="button" key={index}>{game.version.name + "button"}</button>
        }}}
        <div className="col-5 d-flex flex-column align-items-center gap2"></div>
        <h3>Compétences</h3>
         { pokemon.abilities && pokemon.abilities.map ((ability, index))     
        }
        return button className="button" key={index}>{ability.ability.name}</button>
        </div>
        {pokemon.types && pokemon.types.map(type, index)</button>
    </Container>

    const response=await TypeService.fetchTypesByName(response.data.types[0].type.name);
    const responseTer = await TypeService.fetchTypesName(response.data.types[0].type.name);
    <div>
       <div id="faiblesses" className="d-flex flex-wrap gap-2">
        {pokemon.damage_relations && pokemon.damage_relations.double_damage_from.map(type, index)} =>{
            return <button className="type.name"+"button"} key={index}> {type.name}</button>
            text:"Stats" de +pokemon.names && <pokemon className="names">
            
            const statLab=[];
            stabTab.push{y:stat.base_stat}
            setStats(stabTab);
        })}
    </div>


export default;