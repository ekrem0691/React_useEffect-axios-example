import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState();

  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  //! GET (Read).......
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

  //! POST (create).......
  const addTutorial = async (tutorial) => {
    try {
      await axios.post(url, tutorial);
    } catch (error) {
      console.log(error);
    }
    getTutorials(); //? GET(Read)
  };

  //! DELETE (delete)........
  const deleteTutorial = async (id) => {
    try {
      await axios.delete(` ${url}/${id} `);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  //! UPDATE( PUT(tamamını), PATCH(parçalarını) düzeltme yapar.. )
  const editTutorial = async (id, title, desc) => {
    const filtered = tutorials
      .filter((tutor) => tutor.id === id)
      .map(() => ({ title: title, description: desc }));
    console.log(filtered);

    try {
      await axios.put(`${url}/${id}`, filtered[0]);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList
        tutorials={tutorials}
        deleteTutorial={deleteTutorial}
        editTutorial={editTutorial}
      />
    </>
  );
};

export default Home;
