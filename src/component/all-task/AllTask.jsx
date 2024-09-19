import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ShowAllTask from "../tasksUi/ShowAllTask";
import Header from "../Home/Header";
import TitleHeading from "../Home/TitleHeading";

const filterDataFunction = (route, data) => {
  if (route === "/all-tasks") {
    return data;
  } else if (route === "/important") {
    let importantData = data.filter((item) => item.isImportant === true);
    return importantData;
  } else if (route === "/completed") {
    let completeData = data.filter((item) => item.toDoStatus === "completed");
    return completeData;
  } else if (route === "/inprogress") {
    let inprogress = data.filter((item) => item.toDoStatus === "inprogress");
    return inprogress;
  } else if (route === "/not-started") {
    let notStartedData = data.filter((item) => item.toDoStatus === "pending");
    return notStartedData;
  }
};

function AllTask() {
  // const dispatch = useDispatch();
  const location = useLocation();
  const todoList = useSelector((state) => state.toDo.todoList);
  let routeFilteredData = filterDataFunction(location.pathname, todoList);
  const [inputSearch, setInputSearch] = useState("");

  const handleSearch = () => {
    return routeFilteredData.filter((item) =>
      item.content.toLowerCase().includes(inputSearch.toLowerCase())
    );
  };

  let searchedData = handleSearch();

  console.log(searchedData);

  return (
    <>
      <div className="p-3">
        <Header inputSearch={inputSearch} setInputSearch={setInputSearch} />
      </div>
      <div className="p-3">
        <TitleHeading />

        <div className="d-flex gap-4 flex-wrap">
          {searchedData.map((item, index) => (
            <ShowAllTask key={index} data={item} />
          ))}
          {searchedData.length === 0 && <h3>No task available to show</h3>}
        </div>
      </div>
    </>
  );
}

export default AllTask;
