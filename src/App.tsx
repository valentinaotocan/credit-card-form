import "./scss/main.scss";
import { useState } from "react";
import Cards from "./components/Cards";
import Form, { FormValues } from "./components/Form";


function App() {
  const [values, setValues] = useState<FormValues | null>(null);
  return (
    <div className="App">
      <div className="background-container">
        <div className="cards">
          <Cards values={values} />
        </div>
      </div>
      <div className="form-container">
        <Form onUpdateValues={(values) => {
            setValues(values);
          }}
        />
      </div>
    </div>
  );
}

export default App;
