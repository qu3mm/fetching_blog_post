import React from "react";

type Params = {
    params: {
        productID: string;
    };
    };

const productsID = async ({ params }:  Params) => {

  const { productID } = await params;

  return <div>here is your products {productID}</div>;
};

export default productsID;
