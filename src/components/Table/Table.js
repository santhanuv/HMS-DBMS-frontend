import React from "react";
import {
  StyledTable,
  StyledTHead,
  StyledTBody,
  StyledTH,
  StyledTD,
} from "./Styles";
import { useTable } from "react-table";

function Table({ columns, data }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <StyledTable {...getTableProps()}>
        <StyledTHead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyledTH {...column.getHeaderProps}>
                  {column.render("Header")}
                </StyledTH>
              ))}
            </tr>
          ))}
        </StyledTHead>

        <StyledTBody {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr
                className={`${index % 2 === 0 ? "bg-lightGrey" : null}`}
                {...row.getRowProps()}
              >
                {row.cells.map((cell) => (
                  <StyledTD {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </StyledTD>
                ))}
              </tr>
            );
          })}
        </StyledTBody>
      </StyledTable>
    </>
  );
}

export default Table;
