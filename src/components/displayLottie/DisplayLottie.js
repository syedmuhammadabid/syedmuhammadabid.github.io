import React, {lazy, Suspense} from "react";

const Lottie = lazy(() => import("lottie-react"));

export default function DisplayLottie({animationData}) {
  return (
    <Suspense fallback={<div style={{width: "100%", height: "400px"}} />}>
      <Lottie animationData={animationData} loop={true} />
    </Suspense>
  );
}
