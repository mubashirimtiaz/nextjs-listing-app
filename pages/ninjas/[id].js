import Head from "next/head";
export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((entity) => ({
    params: { id: entity.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );
  const data = await response.json();

  return {
    props: { ninja: data },
  };
};
const NinjaDetail = ({ ninja }) => {
  return (
    <>
      <Head>
        <title>Ninja List | Ninja Detail</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-grey-600  mb-7 text-5xl md:text-6xl font-black">
          Detail
          <span className="text-blue-500"> Page</span>
        </h1>
        <p className="mt-3 text-md">
          Name:{" "}
          <span className="underline text-blue-500 text-xl"> {ninja.name}</span>
        </p>
        <p className="mt-3 text-md">
          Email:{" "}
          <span className="underline text-blue-500 text-xl">
            {" "}
            {ninja.email}
          </span>
        </p>
        <p className="mt-3 text-md">
          Webiste:{" "}
          <span className="underline text-blue-500 text-xl">
            {" "}
            {ninja.website}
          </span>
        </p>
        <p className="mt-3 text-md">
          Address:{" "}
          <span className="underline text-blue-500 text-xl">
            {" "}
            {ninja.address.city}
          </span>
        </p>
      </div>
    </>
  );
};

export default NinjaDetail;
