import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonUsage() {
  return (
    <Button
      onClick={() => {
        alert("Clicked!!!")
        console.log('Funciona!!!')
      }}
    //   disabled
      variant="contained"
    >
      Click me!
    </Button>
  );
}
