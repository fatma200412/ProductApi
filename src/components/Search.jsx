import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";
import { Button, ButtonGroup, WrapItem } from "@chakra-ui/react";

function Search() {
  return (
    <FormControl>
      <FormLabel>Search</FormLabel>
      <Input type="text" />

      <Button
        colorScheme="purple"
        type="submit"
        style={{ margin: "10px auto" }}
      >
        Search
      </Button>
    </FormControl>
  );
}

export default Search;
