import { useEffect, useState } from "react";

import "./App.css";

import Search from "./components/Search";
import TableAll from "./components/TableAll";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Search />
      <TableAll />
    </ChakraProvider>
  );
}

export default App;
