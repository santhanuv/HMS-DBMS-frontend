import React from "react";
import { Wrapper, Button } from "./Styles";
import { FaAngleRight } from "react-icons/fa";

function BreadCrumbs({ list, current }) {
  return (
    <Wrapper>
      {list.map((item, index) => {
        const isCurrent = current === index;
        return (
          <>
            <Button {...{ isCurrent }}>{item}</Button>
            {index != list.length - 1 && (
              <span className="text-xl text-normal">
                <FaAngleRight />
              </span>
            )}
          </>
        );
      })}
    </Wrapper>
  );
}

export default BreadCrumbs;
