import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-grey-600 text-6xl font-black">
        Hello from
        <span className="text-blue-500 cursor-pointer hover:underline">
          {" "}
          NextJS app
        </span>
      </h1>
      <Link href="/ninjas">
        <a>See Ninja List</a>
      </Link>
    </div>
  );
}
