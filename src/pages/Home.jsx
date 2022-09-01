import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState();

  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  const getTutorials = async () => {
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  // getTutorials();

  useEffect(() => {
    getTutorials();
  }, []);

  console.log(tutorials);

  //! POST (create)
  const addTutorial = async (tutorial) => {
    try {
      await axios.post(url, tutorial);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
