import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import TextInput from "../../TextInput";
import tw from "twin.macro";

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="p-[20px] w-[500px]">
      <TextInput
        noMargin={true}
        varient="table"
        text="Search"
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
}

export default GlobalFilter;
