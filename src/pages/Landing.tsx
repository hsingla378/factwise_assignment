import React from "react";
import UserCard from "../components/UserCard";
import { celebrities } from "../util/constant";
import Header from "../components/Header";

const Landing = () => {
  const { id, first, last, dob, gender, email, picture, country, description } =
    celebrities[0];

  return (
    <>
      <Header />
      <UserCard
        id={id}
        name={`${first} ${last}`}
        age={dob}
        gender={gender}
        email={email}
        country={country}
        description={description}
        picture={picture}
      />
    </>
  );
};

export default Landing;
