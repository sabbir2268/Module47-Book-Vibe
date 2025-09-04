import React, { Suspense } from "react";
import Book from "./Book";

const Books = ({ data }) => {
  return (
    <div className="px-10 space-y-5 flex flex-col items-center mb-15">
      <h1 className="text-2xl font-bold text-left">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Suspense fallback={<div>Loading...</div>}>
          {data.map((singleBook) => (
            <Book key={singleBook.bookId} singleBook={singleBook} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default Books;
