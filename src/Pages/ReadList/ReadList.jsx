import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../Utilities/addToDB";
import Book from "../Books/Book";

const ReadList = () => {
  const data = useLoaderData();
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState("");
  // console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredData = storedBookData.map((id) => parseInt(id));
    // console.log(convertedStoredData);
    const myReadList = data.filter((book) =>
      convertedStoredData.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);
    if (type === "pages") {
      const sortedByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortedByPage);
    }
    if (type === "ratings") {
      const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating);
      setReadList(sortedByRatings);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center mt-4 mb-20">
        <details className="dropdown">
          <summary className="btn m-1">Sort By: {sort ? sort : ""}</summary>
          <ul className="menu dropdown-content bg-gray-200 rounded-box z-1 w-auto p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("ratings")}>Ratings</a>
            </li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel className="m-4 space-y-5">
          <h2>Total Listed Books: {readList.length}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
            {readList.map((b, index) => (
              <Book key={index} singleBook={b}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>My Wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
