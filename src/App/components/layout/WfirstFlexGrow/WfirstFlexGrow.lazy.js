import React, { lazy, Suspense } from 'react';

const LazyWfirstFlexGrow = lazy(() => import('./WfirstFlexGrow'));

const WfirstFlexGrow = props => (
  <Suspense fallback={null}>
    <LazyWfirstFlexGrow {...props} />
  </Suspense>
);

export default WfirstFlexGrow;
