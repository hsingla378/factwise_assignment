import { Toaster } from "react-hot-toast";
import Header from "../components/Header";
import UserList from "../components/UserList";

const Landing = () => {
  return (
    <>
      <Header />
      <UserList />
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Landing;
