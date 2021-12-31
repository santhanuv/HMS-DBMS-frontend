import React, { useState, useRef } from "react";
import Badge from "../../components/Badge";
import MainHeading from "../../components/MainHeading";
import Wrapper from "../../components/Wrapper/Wrapper";
import { FaSearch, FaEdit, FaWindowClose } from "react-icons/fa";
import { RiCapsuleFill } from "react-icons/ri";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Table from "../../components/Table";
import SelectInput from "../../components/SelectInput";
import TextInput from "../../components/TextInput";
import Form from "../../components/Form";
import CardSlider from "../../components/CardSlider";

// Creates mock data
const remove = () => {
  const list = [];
  for (let i = 0; i < 10; i++) {
    list.push({
      id: i,
      pat_name: "Santhanu V",
      date: "25/01/2026",
      time: "10:00-11:00",
      status:
        i % 2 === 0 ? (
          <Badge varient="success">Complete</Badge>
        ) : (
          <Badge varient="pending">Pending</Badge>
        ),
      btns: (
        <Button
          id={`del_${i}`}
          icon={<FaWindowClose />}
          isCustom={true}
          classNames="text-3xl text-primaryBlue"
        />
      ),
    });
  }
  return list;
};

function DoctorAppointments() {
  const data = remove();

  const columns = React.useMemo(() => [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Patient",
      accessor: "pat_name",
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
      Header: "Status",
      accessor: "status",
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

  const presCardFormRef = useRef(null);
  const [prescribe, setPrescribe] = useState(false);
  const [presCards, setPresCards] = useState([]);

  const handleRemovePresCard = (e) => {
    const cardId = e.currentTarget.id;

    const newPresCards = (cardId) => (prevPresCards) => {
      const list = prevPresCards.filter((presCard) => {
        return presCard.id !== cardId && presCard;
      });
      return list;
    };

    setPresCards(newPresCards(cardId));
  };

  const addPresCards = (e) => {
    e.preventDefault();

    const len = presCards.length;
    const form = presCardFormRef.current;
    if (!form) return;

    const presCard = {
      id: `${len}`,
      medName: form.medName.value,
      dosage: form.dosage.value,
      days: form.days.value,
      price: 4000,
    };

    const addPresCard = (presCard) => (prevPresCards) => {
      return [...prevPresCards, presCard];
    };

    setPresCards(addPresCard(presCard));
  };

  const formInputs = [
    <TextInput text="Medicine" id="medName" name="medName" />,
    <TextInput text="Dosage" id="dosage" name="dosage" />,
    <SelectInput
      options={["Till", "Date"]}
      text="No of Days"
      id="days"
      name="days"
    />,
    <Button
      id="addPres"
      text="ADD PRESCRIPTION"
      classNames="p-[20px] text-xl w-full mb-[60px] rounded-[10px]"
      onClick={addPresCards}
    />,
    <TextInput text="Disease Description" id="disDesc" name="disDesc" />,
    <Button
      id="finish"
      text="FINISH"
      classNames="p-[20px] text-2xl w-full mb-[60px] rounded-[10px]"
    />,
  ];

  return (
    <Wrapper>
      <MainHeading classNames="text-primaryGrey mb-[50px]">
        Appointments
      </MainHeading>

      {prescribe ? (
        <Card
          classNames="my-[40px] min-h-[600px] bg-white flex justify-between p-[30px] 
        gap-[30px]"
        >
          <div className="basis-4/6">
            <form ref={presCardFormRef}>
              <Form formInputs={formInputs} />
            </form>
          </div>

          <Card classNames="basis-2/6 bg-primaryBlue flex flex-col">
            <h1 className="text-xl text-white font-montserrat m-[20px] text-center font-bold">
              Current Prescriptions
            </h1>
            <CardSlider
              cap={3}
              varient={1}
              classNames="grow bg-primaryBlue rounded-b-[20px]"
              isDark={false}
              isJustifyBetween={false}
            >
              {presCards.map((presCard) => {
                return (
                  <Card classNames="relative h-[200px]">
                    <Button
                      icon={<FaWindowClose />}
                      id={presCard.id}
                      classNames="text-3xl ml-[10px] mt-[10px] absolute top-0 left-[10px]"
                      isCustom={true}
                      onClick={handleRemovePresCard}
                    />
                    <div
                      className="h-full flex gap-[20px] bg-white justify-between 
                        p-[10px] items-center rounded-[20px]"
                    >
                      <RiCapsuleFill className="text-primaryGrey text-5xl" />

                      <div className="grow">
                        <h1 className="text-primaryGrey font-montserrat text-lg font-bold">
                          {presCard.medName}
                        </h1>
                        <div className="grid grid-cols-2 gap-x-[20px] mt-[5px]">
                          <h1 className="text-primaryGrey font-montserrat text-lg col-start-1">
                            Dosage
                          </h1>
                          <h1 className="text-primaryGrey font-montserrat text-lg col-end-3">
                            {presCard.dosage}
                          </h1>
                          <h1 className="text-primaryGrey font-montserrat text-lg col-start-1">
                            Days
                          </h1>
                          <h1 className="text-primaryGrey font-montserrat text-lg col-end-3">
                            {presCard.days}
                          </h1>
                          <h1 className="text-primaryGrey font-montserrat text-lg col-start-1">
                            Price
                          </h1>
                          <h1 className="text-primaryGrey font-montserrat text-lg col-end-3">
                            {presCard.price}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </CardSlider>
          </Card>
        </Card>
      ) : (
        <Card classNames="my-[40px] min-h-[600px]">
          <Table columns={columns} data={data} />
        </Card>
      )}
    </Wrapper>
  );
}

export default DoctorAppointments;
