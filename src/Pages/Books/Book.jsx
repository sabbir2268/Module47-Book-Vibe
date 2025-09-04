import React from "react";

const Book = ({ singleBook }) => {
  const {
    bookId,
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

  return (
    <div className="card bg-base-100 w-full md:w-80 shadow-sm">
      <figure className="p-15 bg-gray-100">
        <img
          className="h-[300px] transform rotate-y-[25deg] rotate-x-[10deg] shadow-2xl"
          src={image}
          alt="Shoes"
        />
      </figure>

      <div className="card-body grid">
        <div className="flex justify-between gap-2">
          <p className="bg-green-100 p-2 rounded-2xl text-center text-green-700">
            {tags[0]}
          </p>
          <p className="bg-green-100 p-2 rounded-2xl text-center text-green-700">
            {tags[1]}
          </p>
        </div>

        <div className="space-y-2">
          <h1 className="text-xl font-bold">{bookName}</h1>
          <h3 className="text-md opacity-70">By : {author}</h3>
        </div>

        <div className="flex justify-between mt-5 border-t border-dashed border-gray-300 pt-3">
          <p>{category}</p>
          <p className="text-right pr-2">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
