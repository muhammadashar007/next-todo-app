"use client";
import React, { useState } from "react";

const page = () => {
  const [todo, setTodo] = useState("");
  const [desc, setDesc] = useState("");
  const [main, setMain] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMain([...main, { todo, desc }]);
    setTodo("");
    setDesc("");
  };

  const deleteHandler = (key) => {
    let copy = [...main];
    copy.splice(key, 1);
    setMain(copy);
  };
  return (
    <div>
      <h1 className="font-bold text-3xl bg-pink-600 text-white text-center p-8">
        To-Do App
      </h1>
      <form
        className="flex gap-5 justify-center w-full items-center mt-8"
        onSubmit={submitHandler}
      >
        <input
          type="text"
          placeholder="Enter your Todo"
          className="p-2 border-grey-500 rounded border-2 text-center"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter Description"
          className="p-2 border-grey-500 rounded border-2 text-center"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="rounded border-1 px-5 bg-green-500 text-white py-2 text-center">
          Submit
        </button>
      </form>
      <div className="text-center mt-10 h-full">
        {main.length > 0 ? (
          main.map((to, key) => {
            return (
              <ul className="mx-auto w-4/6 p-4 bg-pink-400 flex flex-col justify-center items-center rounded-xl mb-2">
                <li key={key} className="text-white">
                  <span className="text-xl">{key + 1 + ") "}</span>
                  <span className="text-xl">{to.todo}</span> -{" "}
                  <span className="text-xl">{to.desc}</span>
                  <button
                    onClick={() => {
                      deleteHandler(key);
                    }}
                    className="bg-red-500 rounded px-3 py-1 ml-8"
                  >
                    Delete
                  </button>
                </li>
              </ul>
            );
          })
        ) : (
          <ul className="mx-auto w-4/6 p-4 bg-red-400 flex flex-col justify-center items-center rounded-xl">
            <li className="text-white">No Todo</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default page;
