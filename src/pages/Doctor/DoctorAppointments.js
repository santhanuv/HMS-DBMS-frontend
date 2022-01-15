import React from "react";
import Badge from "../../components/Badge";
import MainHeading from "../../components/MainHeading";
import Wrapper from "../../components/Wrapper/Wrapper";
import { FaAngleRight } from "react-icons/fa";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Table from "../../components/Table";

// Creates mock data
const remove = () => {
  const list = [];
  const names = ["A", "B", "Z", "S", "M"];
  for (let i = 0; i < 10; i++) {
    list.push({
      id: i,
      pat_name: names[i % 5],
      date: `${10 + i}/01/2026`,
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
          icon={<FaAngleRight />}
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
      Header: "",
      accessor: "btns",
    },
  ]);

  return (
    <Wrapper>
      <MainHeading classNames="text-primaryGrey mb-[50px]">
        Appointments
      </MainHeading>
      <Card classNames="my-[40px] min-h-[600px]">
        <Table columns={columns} data={data} />
      </Card>
    </Wrapper>
  );
}

export default DoctorAppointments;
