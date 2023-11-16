import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function TableAll() {
  let [tableAll, setTableAll] = useState([]);
  useEffect(() => {
    axios.get("https://northwind.vercel.app/api/products").then((res) => {
      setTableAll(res.data);
    });
  }, []);
  console.log(tableAll);
  return (
    <TableContainer>
      <Table variant="striped">
        <Thead style={{ backgroundColor: "pink" }}>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>discontinued</Th>
            <Th>unitsInStock</Th>
            <Th>Edit Button</Th>
            <Th>Delete Button</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableAll.map((elem, i) => {
            return (
              <Tr
                key={i}
                style={{ color: elem.unitsInStock < 20 ? "red" : "black" }}
              >
                <Td>{elem.id}</Td>
                <Td>{elem.name}</Td>
                <Td>{elem.unitPrice}</Td>
                <Td>{elem.discontinued ? "TRUE" : "FALSE"}</Td>
                <Td>{elem.unitsInStock}</Td>
                <Td>
                  {" "}
                  <Button colorScheme="orange">Edit</Button>
                </Td>
                <Td>
                  {" "}
                  <Button colorScheme="red">Delete</Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
        <Tfoot style={{ backgroundColor: "pink" }}>
          <Tr>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>discontinued</Th>
            <Th>unitsInStock</Th>
            <Th>Edit Button</Th>

            <Th>Delete Button</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
}

export default TableAll;
