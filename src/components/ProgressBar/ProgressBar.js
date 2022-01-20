import React, { Fragment } from "react";
import { Circle, Line, CTWrapper, Text, Wrapper } from "./Styles";
import { FaCheck } from "react-icons/fa";

const getStructure = (textList, completedTill) => {
  return (
    <>
      {textList.map((text, index) => {
        let hasCompleted = index < completedTill;
        let lineComplete = index - 1 < completedTill;
        return (
          <Fragment key={index}>
            {index === 0 ? (
              <CTWrapper>
                <Circle {...{ hasCompleted, lineComplete }}>
                  {hasCompleted && <FaCheck className="text-white" />}
                </Circle>
                <Text {...{ hasCompleted, lineComplete }}>{text}</Text>
              </CTWrapper>
            ) : (
              <>
                <Line {...{ lineComplete }} />
                <CTWrapper>
                  <Circle {...{ hasCompleted, lineComplete }}>
                    {hasCompleted && <FaCheck className="text-white" />}
                  </Circle>
                  <Text {...{ hasCompleted, lineComplete }}>{text}</Text>
                </CTWrapper>
              </>
            )}
          </Fragment>
        );
      })}
    </>
  );
};

function ProgressBar({
  textList = ["Step1", "Step2", "Step 3", "Step 4"],
  completedTill = 1,
  classNames,
}) {
  return (
    <>
      <Wrapper className={classNames}>
        {getStructure(textList, completedTill)}
      </Wrapper>
    </>
  );
}

export default ProgressBar;
