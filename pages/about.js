import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>Ninja List | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-grey-600 text-6xl font-black">
        About
        <span className="text-blue-500"> Us</span>
      </h1>
      <p className="text-xl mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, culpa.{" "}
      </p>
      <p className="text-xl mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, culpa.{" "}
      </p>
    </div>
  );
};

export default About;
