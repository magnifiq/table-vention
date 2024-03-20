import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";

import FirstTaskPageContent from "./FirstTaskPageContent";

const FirstTaskPage = () => {
  const { products } = useLoaderData();

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Await resolve={products}>
        {(resolvedProducts) => (
          <FirstTaskPageContent products={resolvedProducts} />
        )}
      </Await>
    </Suspense>
  );
};

export default FirstTaskPage;
