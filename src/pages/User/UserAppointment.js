import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import MainHeading from "../../components/MainHeading";
import Table from "../../components/Table";
import { FaSearch, FaEdit, FaWindowClose } from "react-icons/fa";
import Card from "../../components/Card";
import CheckBox from "../../components/CheckBox";
import Wrapper from "../../components/Wrapper/Wrapper";
import SelectInput from "../../components/SelectInput";
import Select from "../../components/Select";
import TextInput from "../../components/TextInput";
import Form from "../../components/Form";

const docList = ["Doctor", "Doctor1", "Doctor2", "Doctor3"];

const formInputs = [
  <Select options={docList} text="Doctor" id="doc" varient="form" />,
  <TextInput text="Date" varient="date" id="date" name="date" />,
  <Button
    text="ADD"
    id="add_btn"
    classNames="text-4xl p-7 w-full rounded-[10px]"
  />,
];

const tableBody = [];

// Creates mock data
const remove = () => {
  const list = [];
  for (let i = 0; i < 10; i++) {
    list.push({
      id: i,
      doc_name: "Santhanu V",
      date: "25/01/2026",
      time: "10:00-11:00",
      price: "2500",
      btns: (
        <div className="flex w-full gap-5">
          <Button
            id={`edit_${i}`}
            icon={<FaEdit />}
            isCustom={true}
            classNames="text-3xl text-primaryBlue"
          />
          <Button
            id={`del_${i}`}
            icon={<FaWindowClose />}
            isCustom={true}
            classNames="text-3xl text-primaryBlue"
          />
        </div>
      ),
    });
  }
  return list;
};

// const data = React.useMemo(() => [
//   {
//     id: 1,
//     doc_name: "Santhanu V",
//     date: "25/01/2026",
//     time: "10:00-11:00",
//     price: "2500",
//     btns: (
//       <div className="flex">
//         <Button id={`edit_${i}`} icon={<FaEdit />} />
//         <Button id={`del_${i}`} icon={<FaWindowClose />} />
//       </div>
//     ),
//   },
// ]);

function UserAppointment() {
  const [addCardVisible, setAddCardVisible] = useState(false);
  const addCardRef = useRef(null);

  const handleExitCard = (e) => {
    if (
      (addCardRef &&
        addCardRef.current &&
        !addCardRef.current.contains(e.target)) ||
      e.currentTarget.id === "addCardClose"
    )
      setAddCardVisible(false);
  };

  const handleOpenCard = (e) => {
    e.preventDefault();

    setAddCardVisible(true);
  };

  useEffect(() => document.addEventListener("click", handleExitCard, true));

  const data = React.useMemo(() => remove());
  const columns = React.useMemo(() => [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Doctor",
      accessor: "doc_name",
    },
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Time",
      accessor: "time",
    },
    {
      Header: "Price",
      accessor: "price",
    },
    {
      Header: (
        <Button
          icon={<FaSearch />}
          id="search_btn"
          isCustom={true}
          classNames="text-3xl"
        />
      ),
      accessor: "btns",
    },
  ]);

  return (
    <Wrapper className="relative">
      <MainHeading classNames="text-primaryGrey mb-[50px]">
        APPOINTMENT
      </MainHeading>
      <Button
        text="Add Appointment"
        classNames="p-5 text-2xl rounded-[10px]"
        wrapperClassNames="mt-6"
        onClick={handleOpenCard}
      />
      <Card classNames="my-[40px] min-h-[600px]">
        <Table columns={columns} data={data} />
      </Card>
      {addCardVisible && (
        <div
          className="w-[1450px] h-[700px] absolute top-[160px] static"
          ref={addCardRef}
        >
          <span className="absolute text-primaryBlue z-10 top-[20px] right-[20px] text-5xl">
            <Button
              icon={<FaWindowClose />}
              isCustom={true}
              id="addCardClose"
              onClick={handleExitCard}
            />
          </span>
          <Card
            classNames="w-full h-full flex  bg-white
      justify-center items-center p-[50px] flex-col relative"
          >
            <div className="w-1/2">
              <h1 className="font-montserrat font-bold text-3xl mb-[30px] text-primaryGrey">
                Add Appointment
              </h1>
              <Form formInputs={formInputs} />
            </div>
          </Card>
        </div>
      )}
    </Wrapper>
  );
}

export default UserAppointment;
