import React, { useState } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function App() {
  const [counter, setCounter] = useState(0);

  // useEffect(() => {});

  function reactCounter(number) {
    setCounter(counter + number);
  }

  return (
    <div>
      <Button
        variant="contained"
        onClick={(e) => {
          reactCounter(9);
        }}
      >
        Bushra
      </Button>
      <Button
        variant="contained"
        onClick={(e) => {
          setCounter(0);
        }}
      >
        Reset counter
      </Button>
      <Typography variant="h4" gutterBottom component="div">
        Count: {counter}
      </Typography>
    </div>
  );
}
