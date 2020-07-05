import React from "react";

const Button = React.lazy(() => import('shared_components/Button'));

const Page1 = () => (
  <div>
    <h1>Page 1</h1>
    <React.Suspense fallback="Loading Button...">
      <Button />
    </React.Suspense>
  </div>
);

export default Page1;
