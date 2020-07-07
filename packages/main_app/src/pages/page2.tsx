import React from 'react';
const Dialog = React.lazy(() => import('shared_components/Dialog'));

const Page2 = () => (
  <div>
    <h1>Page 2</h1>
    <React.Suspense fallback="Loading TypeScript Dialog...">
      <Dialog />
    </React.Suspense>
  </div>
);

export default Page2;
