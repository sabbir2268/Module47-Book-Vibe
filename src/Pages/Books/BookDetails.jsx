import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredDB } from "../../Utilities/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const params = useParams();
  const bookId = parseInt(params.bookId);

  const data = useLoaderData();

  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });
    addToStoredDB(id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 m-5">
      <div className="p-10 bg-gray-200 rounded-lg flex-1 flex items-center justify-center">
        <img className="w-[450px] h-[600px]" src={image} alt="" />
      </div>

      <div className="flex-2/6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p className="flex gap-2 border-b-2 border-gray-300 pb-2 border-dashed pb-3">
            <span className="font-bold">By:</span>
            <span className="text-gray-400">{author}</span>
          </p>
          <p className="text-sm font-semibold border-b-2 border-gray-300 pb-2 border-dashed pb-3 pt-1">
            {category}
          </p>
          <p className="py-2">
            <span className="font-bold pr-2">Review:</span>
            <span>{review}</span>
          </p>
          <p className="text-sm flex gap-2 border-b-2 border-gray-300 pb-2 border-dashed pb-4 flex items-center">
            <span className="font-semibold">Tags:</span>
            <span className="flex gap-2 ">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-green-100 p-2 rounded-2xl text-center text-green-700 font-bold"
                >
                  {tag}
                </span>
              ))}
            </span>
          </p>
        </div>

        <div>
          <table className="mt-4 text-sm font-semibold">
            <tbody className="grid grid-cols-1 gap-2">
              <tr className="grid grid-cols-2 gap-5">
                <td className=" text-gray-500">Number of Pages : </td>
                <td>{totalPages}</td>
              </tr>
              <tr className="grid grid-cols-2 gap-5">
                <td className=" text-gray-500">Publisher : </td>
                <td>{publisher}</td>
              </tr>
              <tr className="grid grid-cols-2 gap-5">
                <td className=" text-gray-500">Year Of Publishing : </td>
                <td>{yearOfPublishing}</td>
              </tr>
              <tr className="grid grid-cols-2 gap-5">
                <td className=" text-gray-500">Rating : </td>
                <td>{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="space-x-5 mt-5">
          <button onClick={() => handleMarkAsRead(bookId)} className="btn">
            Read
          </button>
          <button className="btn btn-accent">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
