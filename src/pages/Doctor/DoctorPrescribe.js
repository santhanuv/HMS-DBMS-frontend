import React, { useState, useRef } from "react";
import MainHeading from "../../components/MainHeading";
import Wrapper from "../../components/Wrapper/Wrapper";
import BreadCrumbs from "../../components/BreadCrumbs";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CardSlider from "../../components/CardSlider";
import TextInput from "../../components/TextInput";
import Form from "../../components/Form";
import { FaWindowClose } from "react-icons/fa";
import { RiCapsuleFill } from "react-icons/ri";

function DoctorPrescribe() {
  const presCardFormRef = useRef(null);

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
      days: form.till.value,
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
    <TextInput text="Till" id="till" name="till" varient="date" />,
    <Button
      id="addPres"
      text="ADD PRESCRIPTION"
      classNames="p-[20px] text-xl w-full mb-[60px] rounded-[10px]"
      onClick={addPresCards}
    />,
    <TextInput
      text="Disease Description"
      id="disDesc"
      name="disDesc"
      varient="textArea"
    />,
    <Button
      id="finish"
      text="FINISH"
      classNames="p-[20px] text-2xl w-full mb-[60px] rounded-[10px]"
    />,
  ];

  return (
    <Wrapper>
      <MainHeading>Prescribe</MainHeading>

      <BreadCrumbs list={["Appointments", "Prescribe"]} current={1} />

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
    </Wrapper>
  );
}

export default DoctorPrescribe;
