import React from "react";

const TypeScriptApp = React.lazy(() => import("app1/App"));

const Page2 = () => (
  <div>
    <h1>Page 3</h1>
    <React.Suspense fallback="Loading TypeScript App...">
      <TypeScriptApp />
    </React.Suspense>
  </div>
);

export default Page2;
