import React from "react";

const TypeScriptButton = React.lazy(() => import('ts_components/Button'));

const Page1 = () => (
  <div>
    <h1>Page 1</h1>
    <React.Suspense fallback="Loading TypeScript Button...">
      <TypeScriptButton />
    </React.Suspense>
  </div>
);

export default Page1;
