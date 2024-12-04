import Link from "next/link";

const Latest = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-white bg-rose-700">
      <span className="font-Poppins mt-2 w-24 text-center text-xs">
        Winter Season Is Here !!
      </span>
      <Link
        href="/tour/64d7b7104a5c02ef7eea494e"
        className="latestBook pt-1 text-sm"
      >
        Book Now{" "}
      </Link>
    </div>
  );
};

export default Latest;
