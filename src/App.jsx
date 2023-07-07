export function App() {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div id="app">
      <h1>Biblioteca de jogos</h1>
      <form>
        <div>
          <label htmlFor="title">Título:</label>
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="cover">Capa:</label>
          <input type="text" name="cover" id="cover" />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Adicionar à biblioteca
        </button>
      </form>
    </div>
  );
}
