import React from "react";

const TypeScriptDialog = React.lazy(() => import("shared_components/Dialog"));

const Page2 = () => (
  <div>
    <h1>Page 2</h1>
    <React.Suspense fallback="Loading TypeScript Dialog...">
      <TypeScriptDialog />
    </React.Suspense>
  </div>
);

export default Page2;
