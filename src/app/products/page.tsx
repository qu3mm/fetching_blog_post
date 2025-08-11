import Link from "next/link";
import React from "react";

const products = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>products list</h1>
      <Link href="products/1">Product 1</Link>
      <Link href='products/2'>Product 2</Link>
    </div>
  );
};

export default products;
