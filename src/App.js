import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDecs] = useState("");

  const [makeTask, setMakeTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title);
    setMakeTask([...makeTask, { title, desc }]);
    console.log(makeTask);
    setTitle("");
    setDecs("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...makeTask];
    copyTask.splice(i, 1);
    setMakeTask(copyTask);
  };

  let renderView = (
    <h2 className="bg-[#1D263B] h-[10%] w-full flex justify-evenly  ">
      No Task Avilable...
    </h2>
  );

  if (makeTask.length > 0) {
    renderView = makeTask.map((t, i) => {
      return (
        <div
          key={i}
          className=" bg-gray-400 h-[8%] flex  justify-between items-center w-full"
        >
          <h5 className=" text-black font-medium text-2xl ml-5">{t.title}</h5>
          <h6 className="text-black font-medium text-xl">{t.desc}</h6>
          <button
            className="p-2 bg-red-400 text-white text-sm rounded-xl min-w-max w-[7vw] mr-5"
            onClick={() => deleteHandler(i)}
          >
            Delete
          </button>
        </div>
      );
    });
  }

  return (
    <div className="w-full h-screen bg-[#F2F5EA]">
      <form onSubmit={submitHandler}>
        <div className="h-20 flex justify-center items-center text-lg bg-[#001011] text-white font-medium w-full">
          <h1 className="">MY TODO-LIST</h1>
        </div>

        <div className="h-20   flex justify-evenly items-center bg-[#3AAFB9] ">
          <input
            className=" rounded-md border-red-400 p-2 border-spacing-6  w-[30vw] h-[50%]"
            type="text"
            value={title}
            placeholder="Enter your task"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            className=" border-red-400 rounded-md p-2 border-spacing-6 w-[30vw] h-[50%]"
            value={desc}
            type="text"
            placeholder="Enter your description"
            onChange={(e) => {
              setDecs(e.target.value);
            }}
          />
          <button className="p-2 bg-[#1c2d2c] text-white text-xl rounded-xl min-w-max w-[7vw]  ">
            submit
          </button>
        </div>
      </form>
      <br />
      <hr className=" border-black " />
      <div className="p-5 h-[100%] text-white">{renderView}</div>
    </div>
  );
}

export default App;
