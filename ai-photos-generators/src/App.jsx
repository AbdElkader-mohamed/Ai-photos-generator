import { useEffect, useState } from "react";
import Form from "./components/form/Form";
import Photos from "./components/photos/Photos";
import { getData } from "./api/api";

function App() {
  const [value, setValue] = useState("")
  const [data , setData] = useState([])
  const clickHandler = async ()=> {
   setData( await getData(value))
   setValue("")
  }
  return (
    <section>
      <h2>ai images generators </h2>

      <Photos res={data} />

      <Form value={value} setValue={setValue} clickHandler={clickHandler} />
    </section>
  );
}

export default App;
