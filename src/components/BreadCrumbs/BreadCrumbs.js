import React, { Fragment } from "react";
import { Wrapper, Button } from "./Styles";
import { FaAngleRight } from "react-icons/fa";

function BreadCrumbs({ list, current }) {
  return (
    <Wrapper>
      {list.map((item, index) => {
        const isCurrent = current === index;
        return (
          <Fragment key={index}>
            <Button {...{ isCurrent }}>{item}</Button>
            {index != list.length - 1 && (
              <span className="text-xl text-normal">
                <FaAngleRight />
              </span>
            )}
          </Fragment>
        );
      })}
    </Wrapper>
  );
}

export default BreadCrumbs;
