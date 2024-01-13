import React from "react";

const Page = ({ route , setproductitem ,productitem }) => {
  const PageBody = route.component;
  return (
    <>
        <PageBody productitem={productitem}setproductitem={setproductitem} />
    </>
  );
};

export default Page;
