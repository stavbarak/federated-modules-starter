import React from "react";

const TypeScriptButton = React.lazy(() => import("ts_components/Button"));

console.log('TypeScriptButton', TypeScriptButton)

const Page3 = () => (
  <div>
    <h1>Page 3</h1>
    <React.Suspense fallback="Loading TypeScript App...">
      <TypeScriptButton>Button from TS APP</TypeScriptButton>
    </React.Suspense>
  </div>
);

export default Page3;
