import React, { useState, useEffect } from "react";
import StyledReportButton from "./Styles";
import Card from "../../Card";
import Button from "../../Button";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { BsFileMedicalFill, BsFileArrowDownFill } from "react-icons/bs";

function ReportCard({ reportList }) {
  const [startIndex, setStartIndex] = useState(0);
  const [showList, setShowList] = useState(
    reportList.slice(startIndex, startIndex + 3)
  );

  const updateShowList = (startIndex) => {
    if (startIndex < 0) return;
    if (startIndex + 3 <= reportList.length)
      setShowList(reportList.slice(startIndex, startIndex + 3));
  };
  const handleUpClick = () => {
    if (startIndex == 0) return;
    setStartIndex((prevStartIndex) => prevStartIndex - 1);
  };
  const handleDownClick = () => {
    if (startIndex + 3 >= reportList.length) return;
    setStartIndex((prevStartIndex) => prevStartIndex + 1);
  };

  useEffect(() => updateShowList(startIndex), [startIndex]);

  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-4 justify-center items-center px-[50px]">
        <Button
          icon={<FaAngleUp />}
          id="btn_up"
          isCustom={true}
          onClick={handleUpClick}
          classNames={`text-2xl hover:bg-lightGrey rounded-[100px] p-3 ${
            startIndex === 0 ? "text-disabledGrey" : "text-primaryGrey"
          }`}
        />
        <div className="w-full flex flex-col gap-3">
          {showList.map((report) => (
            <StyledReportButton link={report.link}>
              <span>
                <BsFileMedicalFill className="text-3xl" />
              </span>
              <span>{report.text}</span>
              <span>
                <BsFileArrowDownFill className="text-3xl" />{" "}
              </span>
            </StyledReportButton>
          ))}
        </div>
        <Button
          icon={<FaAngleDown />}
          onClick={handleDownClick}
          id="btn_down"
          isCustom={true}
          classNames={`text-2xl hover:bg-lightGrey rounded-[100px] p-3 
          ${
            startIndex + 3 >= reportList.length
              ? "text-disabledGrey"
              : "text-primaryGrey"
          }
          `}
        />
      </div>
    </div>
  );
}

export default ReportCard;
