import React from "react";
import Card from "../Card";
import { Wrapper, HeadText, HeadTextValue, Text, TextValue } from "./Styles";

function InfoCard({ infoList, hasBr = true, classNames }) {
  console.log(infoList);
  return (
    <Card hasBr={hasBr} classNames={`w-full h-full py-3 px-6 ${classNames}`}>
      <Wrapper className="gap-x-14 gap-y-4">
        {infoList.map((info) => {
          return (
            <>
              {info.headText ? (
                <>
                  <HeadText>{info.headText}</HeadText>
                  <HeadTextValue>{info.headValue}</HeadTextValue>{" "}
                </>
              ) : (
                <>
                  <Text>{info.text}</Text>
                  <TextValue>{info.value}</TextValue>
                </>
              )}
            </>
          );
        })}
      </Wrapper>
    </Card>
  );
}

export default InfoCard;
