import "./App.css";
import { Input, FormGroup, FormControl, Button } from "@mui/material";
import { useState } from "react";
import { setUserData } from "./api";
function App() {
  const defaultData = {
    text: "",
    description: "",
    file: "",
  };

  const [data, setData] = useState(defaultData);

  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (data) => {
	await setUserData(data);
  };
  return (
    <div className="App">
      <div>
        <FormGroup
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            margin: "auto",
          }}
        >
          <FormControl>
            <Input
              name="text"
              placeholder="Text"
              onChange={(e) => onChangeHandler(e)}
            />
          </FormControl>

          <FormControl>
            <Input
              name="description"
              placeholder="description"
              onChange={(e) => onChangeHandler(e)}
            />
          </FormControl>

          <FormControl>
            <Input
              type="file"
              name="file"
              placeholder="file"
              onChange={(e) => onChangeHandler(e)}
            />
          </FormControl>

          <Button onClick={submitHandler}>Submit</Button>
        </FormGroup>
      </div>
    </div>
  );
}

export default App;
