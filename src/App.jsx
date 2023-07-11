import { Game } from "./components/Game";
import { NewGameForm } from "./components/NewGameForm";
import { UseGameCollection } from "./hooks/UseGameCollection";

export function App() {
  const { games, addGame, removeGame } = UseGameCollection();

  return (
    <div id="app">
      <h1>Biblioteca de jogos</h1>
      <NewGameForm addGame={addGame} />
      <div className="games">
        {games.map((game) => (
          <Game
            key={game.id}
            cover={game.cover}
            title={game.title}
            onRemove={() => removeGame(game.id)}
          />
        ))}
      </div>
    </div>
  );
}
