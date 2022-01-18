import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import TextInput from "../../TextInput";
import TextField from "../../TextInput/TextField";
import tw from "twin.macro";

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="p-[20px] w-[500px]">
      <TextField
        inTable={true}
        text="Search"
        name="SearchBar"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        wrapperClassName={`h-10`}
        className={`focus: outline-none focus: border-none`}
      />
    </div>
  );
}

export default GlobalFilter;
