import React from "react";
import {
  StyledTable,
  StyledTHead,
  StyledTBody,
  StyledTH,
  StyledTD,
} from "./Styles";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import GlobalFilter from "./utils/GlobalFilter";

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy);

  const { globalFilter } = state;

  return (
    <>
      <div className="flex justify-center items-center bg-white">
        <GlobalFilter
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
      <StyledTable {...getTableProps()}>
        <StyledTHead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyledTH
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <span className="absolute top-[35%] right-[20%]">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaAngleDown />
                      ) : (
                        <FaAngleUp />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </StyledTH>
              ))}
            </tr>
          ))}
          <tr></tr>
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
