import React from 'react';

type EmployeeProps = {
  employee: {
    id: number;
    name: string;
    position: string;
    phoneNumber: string;
    email: string;
  };
};

const EmployeeCard: React.FC<EmployeeProps> = ({ employee }) => {
  return (
    <>
      <li className="list-none border rounded-md p-4 m-4 w-64 h-40 text-center flex flex-col justify-center">
        <h3 className="text-xl font-bold">
          {employee.position}: {employee.name}
        </h3>
        <p>ID: {employee.id}</p>
        <p>Phone: {employee.phoneNumber}</p>
        <p>Email: {employee.email}</p>
      </li>
    </>
  );
};

export default EmployeeCard;

