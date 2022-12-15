import "./App.scss";
import Tile from "./Compenents/Tile/Tile";
import pokemonArray from "./Data/pokemon";

//const App = () => {
//const pokemonTileJsx = pokemonArray.map((pokemon) => (
//<Tile
//key={pokemon.id}
//name={pokemon.name}
//id={pokemon.id}
//types={pokemon.types}
//image={pokemon.sprite}
///>
//));

const App = () => {
  const pokemonTileJsxGround = pokemonArray
    .filter(
      (pokemonGround) =>
        pokemonGround.types == "water" && pokemonGround.id > 130
    )
    .map((pokemon) => (
      <Tile
        key={pokemon.id}
        name={pokemon.name}
        id={pokemon.id}
        types={pokemon.types}
        image={pokemon.sprite}
      />
    ));
  return (
    <div>
      <h1> Pokedom </h1>
      <main className="tile-container"> {pokemonTileJsxGround} </main>
    </div>
  );
};

export default App;
