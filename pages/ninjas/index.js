import Head from "next/head";
const Ninjas = () => {
  return (
    <>
      <Head>
        <title>Ninja List | All Ninjas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1 className="text-grey-600 mb-7 text-5xl md:text-6xl font-black">
          Ninja
          <span className="text-blue-500"> List</span>
        </h1>
      </div>
    </>
  );
};

export default Ninjas;
