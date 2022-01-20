import React from "react";
import Button from "../../components/Button";
import CardSlider from "../../components/CardSlider";
import MainHeading from "../../components/MainHeading";
import InfoCard from "../../components/InfoCard";
import Wrapper from "../../components/Wrapper/Wrapper";
import Card from "../../components/Card";
import Badge from "../../components/Badge";
import Table from "../../components/Table";
import { FaAngleRight } from "react-icons/fa";

function UserPayments() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Bill Id",
        accessor: "id",
      },
      {
        Header: "Payed Date",
        accessor: "payedDate",
      },
      {
        Header: "Billed Date",
        accessor: "billedDate",
      },
      {
        Header: "Amount",
        accessor: "amount",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "",
        accessor: "btns",
      },
    ],
    []
  );

  const remove = () => {
    const list = [];
    for (let i = 0; i < 10; i++) {
      list.push({
        id: i,
        payedDate: "13/04/2016",
        billedDate: "14/04/2016",
        status:
          i % 2 === 0 ? (
            <Badge varient="success">Payed</Badge>
          ) : (
            <Badge varient="pending">Pending</Badge>
          ),
        amount: "2500",
        btns: (
          <Button
            id={`del_${i}`}
            icon={<FaAngleRight />}
            isCustom={true}
            classNames="text-3xl text-white bg-primaryBlue rounded-[100px]"
          />
        ),
      });
    }
    return list;
  };

  const paymentHistory = remove();

  // Remove This
  const billList = [
    {
      total: 2000,
      medicines: 250,
      appointment: 750,
      rooms: 1000,
      paidOn: "28/02/2021",
    },
    {
      total: 3000,
      medicines: 550,
      appointment: 150,
      rooms: 1300,
      paidOn: "17/03/2020",
    },
    {
      total: 4000,
      medicines: 550,
      appointment: 150,
      rooms: 1300,
      paidOn: "17/03/2020",
    },
    {
      total: 5000,
      medicines: 550,
      appointment: 150,
      rooms: 1300,
      paidOn: "17/03/2020",
    },
    {
      total: 6000,
      medicines: 550,
      appointment: 150,
      rooms: 1300,
      paidOn: "17/03/2020",
    },
  ];

  const createBillInfoList = (bill) => [
    { headText: "Total", headValue: bill.total },
    { text: "Medicines", value: bill.medicines },
    { text: "Appointment", value: bill.appointment },
    { text: "Rooms", value: bill.rooms },
    { text: "Paid On", value: bill.paidOn },
  ];

  return (
    <Wrapper>
      <MainHeading classNames="text-primaryGrey mb-5">Payments</MainHeading>

      <div className="mt-[40px]">
        <h1 className="text-xl font-montserrat text-primaryGrey font-semibold my-[20px]">
          Pending Bills
        </h1>
        <CardSlider cap="2">
          {billList.map((bill, index) => {
            const billInfoList = createBillInfoList(bill);
            return (
              <div className="flex" key={index}>
                <InfoCard
                  infoList={billInfoList}
                  hasBr={false}
                  classNames="rounded-l-[10px]"
                />

                <Button
                  isCustom={true}
                  text="PAY NOW"
                  classNames="font-montserrat text-white bg-primaryBlue h-full 
                rounded-r-[10px] text-xl font-bold"
                />
              </div>
            );
          })}
        </CardSlider>
      </div>
      <div className="my-[30px]">
        <Card>
          <Table columns={columns} data={paymentHistory} />
        </Card>
      </div>
    </Wrapper>
  );
}

export default UserPayments;
