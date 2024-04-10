import { useLoaderData, Await } from "react-router-dom";
import { Suspense } from "react";

import FirstTaskPageContent from "./FirstTaskPageContent";

import { Navigate } from "react-router-dom";

import useAuthStoreSelectors from "../../stores/useAuthStore";

const FirstTaskPage = () => {
  const { products } = useLoaderData();

  const user = useAuthStoreSelectors.use.user();
  
  if (!user) return <Navigate to="/" />;
  
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
