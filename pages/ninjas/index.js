import Head from "next/head";
import Link from "next/link";
export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: { ninjas: data },
  };
};

const Ninjas = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja List | All Ninjas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-left">
        <h1 className="text-grey-600 mb-7 text-5xl md:text-6xl font-black">
          Ninja
          <span className="text-blue-500"> List</span>
        </h1>
        <ul className="w-100 md:w-2/4">
          {ninjas.map((ninja) => (
            <li
              key={ninja.id}
              className="mb-3 border p-3 shadow-sm border-l-8 hover:border-blue-500 cursor-pointer"
            >
              <Link href={`/ninjas/${ninja.id}`}>
                <a className="text-xl font-bold hover:text-blue-500">
                  {ninja.name}
                </a>
              </Link>
              <h1></h1>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Ninjas;
