import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Ninja List | 404</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl">Oooops...</h1>
        <p className="text-2xl mt-3">That page cannot be found!</p>
        <p className="text-xl mt-3">
          Go back to{" "}
          <Link href="/">
            <a className="text-blue-500 hover:underline">Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
