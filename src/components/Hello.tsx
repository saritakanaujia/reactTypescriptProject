import React from "react";
interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => {
  return (
    <>
      <p>Hello {name}!</p>
    </>
  );
};
export default Hello;
