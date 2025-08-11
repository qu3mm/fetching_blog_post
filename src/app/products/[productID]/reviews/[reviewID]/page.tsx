type ProductReviewPageProps = {
  params: {
    productID: string;
    reviewID: string;
  };
};

const page = async ({ params }: ProductReviewPageProps) => {
  const { productID, reviewID } = params;

  return <div>review of products {productID} with the review id of {reviewID}</div>;
};

export default page;
