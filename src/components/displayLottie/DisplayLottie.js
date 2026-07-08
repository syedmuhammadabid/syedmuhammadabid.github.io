import React, {Suspense, lazy} from "react";
import Loading from "../../containers/loading/Loading";

const Lottie = lazy(() => import("lottie-react"));

export default function DisplayLottie({animationData}) {
  return (
    <Suspense fallback={<Loading />}>
      <Lottie animationData={animationData} loop={true} />
    </Suspense>
  );
}
