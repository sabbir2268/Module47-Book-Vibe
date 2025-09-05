import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import BookDetails from "../Pages/Books/BookDetails";
import ReadList from "../Pages/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("/data/booksData.json"),
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/bookDetails/:bookId",
        loader: () => fetch("/data/booksData.json"),
        element: <BookDetails></BookDetails>,
      },
      {
        path: "readList",
        loader: () => fetch("/data/booksData.json"),
        element: <ReadList></ReadList>,
      },
    ],
  },
]);
