import React, { useState } from "react";
import MainHeading from "../../components/MainHeading";
import Wrapper from "../../components/Wrapper/Wrapper";
import BreadCrumbs from "../../components/BreadCrumbs";
import Button from "../../components/Button";
import Card from "../../components/Card";
import CardSlider from "../../components/CardSlider";
import { FaWindowClose } from "react-icons/fa";
import { RiCapsuleFill } from "react-icons/ri";
import PrescribeForm from "./prescribeForm/PrescribeForm";
import TextField from "../../components/TextInput";
import { prescriptionSchema } from "./prescribeForm/prescribeSchema";
import useForm from "../../hooks/useForm";

function Prescription({ prescriptions, handleRemove }) {
  return (
    <>
      <Card classNames="w-[500px] bg-primaryBlue flex flex-col">
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
          {prescriptions.map((presCard, index) => {
            return (
              <Card key={index} classNames="relative h-[200px]">
                <Button
                  icon={<FaWindowClose />}
                  id={presCard.id}
                  classNames="text-3xl ml-[10px] mt-[10px] absolute top-0 left-[10px]"
                  isCustom={true}
                  onClick={handleRemove}
                />
                <div
                  className="h-full flex gap-[20px] bg-white justify-between 
                        p-[10px] items-center rounded-[20px]"
                >
                  <RiCapsuleFill className="text-primaryGrey text-5xl" />

                  <div className="w-full">
                    <h1 className="text-primaryGrey font-montserrat text-lg font-bold truncate">
                      {presCard.medName}
                    </h1>
                    <div className="grid grid-cols-2 gap-x-[20px] mt-[5px]">
                      <h1 className="text-primaryGrey font-montserrat text-lg col-start-1 truncate">
                        Dosage
                      </h1>
                      <h1 className="text-primaryGrey font-montserrat text-lg col-end-3 truncate">
                        {presCard.dosage}
                      </h1>
                      <h1 className="text-primaryGrey font-montserrat text-lg col-start-1 truncate">
                        Frequency
                      </h1>
                      <h1 className="text-primaryGrey font-montserrat text-lg col-end-3 truncate">
                        {presCard.frequency}
                      </h1>
                      <h1 className="text-primaryGrey font-montserrat text-lg col-start-1 truncate">
                        Duration
                      </h1>
                      <h1 className="text-primaryGrey font-montserrat text-lg col-end-3 truncate">
                        {presCard.duration}
                      </h1>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </CardSlider>
      </Card>
    </>
  );
}

function DoctorPrescribe() {
  const [prescriptions, setPrescriptions] = useState([]);

  const { register, onSubmit } = useForm(
    {
      medName: "",
      dosage: "",
      frequency: "",
      duration: "",
    },
    prescriptionSchema
  );

  const handleRemovePresCard = (e) => {
    const cardId = e.currentTarget.id;

    const newPresCards = (cardId) => (prevPresCards) => {
      return prevPresCards.filter((presCard) => presCard.id !== cardId);
    };

    setPrescriptions(newPresCards(cardId));
  };

  const addNewPrescription = async (prescription) => {
    const isDuplicate =
      prescriptions.filter(
        (presCard) => presCard.medName === prescription.medName
      ).length !== 0;

    if (isDuplicate) {
      console.log(
        `Prescription for the medicine ${prescription.medName} exists.`
      );
      return;
    }

    const len = prescriptions.length;
    prescription.id = `${len + 1}`;

    setPrescriptions((prev) => [...prev, prescription]);
  };

  return (
    <Wrapper>
      <MainHeading>Prescribe</MainHeading>

      <BreadCrumbs list={["Appointments", "Prescribe"]} current={1} />

      <Card
        classNames="my-[40px] min-h-[600px] bg-white flex justify-between p-[30px] 
        gap-[30px]"
      >
        <div className="min-w-[400px]">
          <form
            onSubmit={(e) => {
              onSubmit(e, addNewPrescription);
            }}
          >
            <TextField
              text="Medicine Name"
              id="med-name"
              {...register("medName")}
            />
            <TextField text="Dosage" id="dosage" {...register("dosage")} />
            <TextField
              text="Frequency"
              id="frequency"
              {...register("frequency")}
            />
            <TextField
              text="Duration"
              id="duration"
              {...register("duration")}
            />
            <Button
              id="addPres"
              text="ADD PRESCRIPTION"
              classNames="p-[20px] text-xl w-full mb-[60px] rounded-[10px]"
            />
          </form>
          <PrescribeForm prescriptions={prescriptions} />
        </div>
        <Prescription
          prescriptions={prescriptions}
          handleRemove={handleRemovePresCard}
        />
      </Card>
    </Wrapper>
  );
}

export default DoctorPrescribe;
