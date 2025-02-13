const PokemonCard = () => {
    return <>
    <Card style={{ width:'18rem'}}>/
    <Card.Img variant="top" src={"https://img.pokemondb.net/artwork"+"pokemonB.name.jpg"} />
    <Card.Body Body>
        <Card.Title>{PokemonCard.name}</Card.Title>
        </Card.Body>
        </Card>
    </>;
}
 
export default PokemonCard;