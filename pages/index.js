import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ninja List | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-grey-600 text-6xl font-black">
        Hello
        <span className="text-blue-500"> Ninjas!</span>
      </h1>
      <Link href="/ninjas">
        <a>See Ninja List</a>
      </Link>
    </div>
  );
}
