import React from "react";

const Banner = () => {
  return (
    <div
      className="grid
     grid-cols-1 md:grid-cols-2 gap-4 items-center p-10 bg-gray-100 rounded-lg my-8"
    >
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">
          We Don't Sale Books, We Share Knowledge
        </h1>
        <h1>
          Explore a wide range of books across various genres and topics. Find
          your next favorite read with us. And join our community of book lovers
          today!
        </h1>
        <button className="btn btn-success">Get Started</button>
      </div>
      <div>
        <img src="/books.jpg" alt="" />
      </div>
    </div>
  );
};

export default Banner;
