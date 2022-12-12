import "./scss/main.scss";
import Cards from './components/Cards'
import Form from './components/Form';


function App() {
  return (
    <div className="App">
      <div className="background-container">
        <div className="cards">
          <Cards />
        </div>
      </div>
      <div className="form-container">
      	<Form />
      </div>
    </div>
  );
}

export default App;
