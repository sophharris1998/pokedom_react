import "./Tile.scss";

const Tile = (props) => {
  return (
    <div className="tile">
      <img className="tile__image" src={props.image} alt="" />
      <div className="tile__content">
        <h2 className="tile__heading">{props.name}</h2>
        <p className="tile__text">
          {props.name} (#{props.id}) is a {props.types} type pokemon.
        </p>
      </div>
    </div>
  );
};

export default Tile;
