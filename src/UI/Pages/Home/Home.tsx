import React from "react";
import { useSelector } from "react-redux";
import Header from "../../Components/Header";

type Props = {};

const Home = (props: Props) => {
  const data: any = useSelector((state: any) => state);

  return (
    <Header>
      <div>{JSON.stringify(data)}</div>
    </Header>
  );
};

export default Home;
