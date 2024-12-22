import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex min-h-screen w-full items-center justify-center bg-black/50 backdrop-blur">
      <div>
        <RotatingLines
          width="46"
          strokeWidth="2"
          animationDuration="0.01"
          ariaLabel="rotating-lines-loading"
          strokeColor="white"
        />
      </div>
    </div>
  );
};

export default Loader;
