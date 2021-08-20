import React, { FC, ChangeEvent, useState } from "react";

import { employees } from "../../utils/constants";

import { Table, Input } from "antd";


const TableEmployees: FC = () => {
  const [employeesList, setEmplayeesList] = useState<EmployeesList[]>(
    employees.map((prev) => ({
      ...prev,
      salary: prev.salaryOfDay * prev.workedDays,
    }))
  );

  const onChangeData = (
    { target: { value, name } }: ChangeEvent<HTMLInputElement>,
    record: EmployeesList
  ) => {
    if (value.match(/^\d+$/)) {
      if (name === "workedDays")
        setEmplayeesList((prevList) => {
          return prevList.map((employee) =>
            employee.key !== record.key
              ? employee
              : {
                  ...employee,
                  [name]: Number(value),
                  salary: employee.salaryOfDay * Number(value),
                }
          );
        });
      else
        setEmplayeesList((prevList) => {
          return prevList.map((employee) =>
            employee.key !== record.key
              ? employee
              : {
                  ...employee,
                  [name]: Number(value),
                  salary: employee.workedDays * Number(value),
                }
          );
        });
    } 

    if (value.length === 0) {
      setEmplayeesList((prevList) => {
        return prevList.map((employee) =>
          employee.key !== record.key
            ? employee
            : {
              ...employee,
              [name]: 0,
              salary: employee.workedDays * Number(value),
            }
        );
      });
    }
  };

  const renderColumn = (text: string, record: EmployeesList, name: string) => (
    <Input value={text} name={name} onChange={(e) => onChangeData(e, record)} />
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Surname",
      dataIndex: "surname",
      key: "surname",
    },
    {
      title: "Worked Days",
      dataIndex: "workedDays",
      key: "workedDays",
      render: (text: string, record: EmployeesList) =>
        renderColumn(text, record, "workedDays"),
    },
    {
      title: "Salary/day",
      dataIndex: "salaryOfDay",
      key: "salaryOfDay",
      render: (text: string, record: EmployeesList) =>
        renderColumn(text, record, "salaryOfDay"),
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={employeesList}
      pagination={false}
      summary={(employeesData) => {
        const totalSalary = employeesData
          .map((employee) => employee.salary)
          .reduce((prev, salary) => prev + salary, 0);

        return (
          <Table.Summary fixed>
            <Table.Summary.Row>
              <Table.Summary.Cell index={0}>Summary salary</Table.Summary.Cell>
              <Table.Summary.Cell index={1}>{totalSalary}</Table.Summary.Cell>
            </Table.Summary.Row>
          </Table.Summary>
        );
      }}
    />
  );
};

export default TableEmployees;
