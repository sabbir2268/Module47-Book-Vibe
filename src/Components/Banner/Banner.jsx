import React from "react";

const Banner = () => {
  return (
    <div
      className="grid
     grid-cols-1 md:grid-cols-2 gap-4 items-center p-10 bg-gray-100 rounded-lg my-8"
    >
      <div className="space-y-4">
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          culpa. Voluptas sequi repudiandae blanditiis atque corporis hic
          aliquid dolores. Nobis sequi consequatur labore temporibus? Facilis
          optio vero ullam corrupti praesentium.
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
