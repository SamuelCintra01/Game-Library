import PropTypes from "prop-types";

Game.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  onRemove: PropTypes.func,
};

export function Game({ cover, title, onRemove }) {
  return (
    <div>
      <img src={cover} alt={cover} />
      <div>
        <h2>{title}</h2>
        <button onClick={onRemove}>Remover</button>
      </div>
    </div>
  );
}
