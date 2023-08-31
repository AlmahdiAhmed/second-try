import { Suspense } from "react";
import Featured from "./Featured";

const Wrapper = () => {
  return (
    <>
      <Suspense fallback={<h1>loading..</h1>}>
        <Featured />
      </Suspense>
    </>
  );
};
export default Wrapper;
