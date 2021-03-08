import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex mb-5 justify-between p-4 items-center border-b shadow-md border-t-4">
      <h1 className="text-2xl font-bold">Ninjas List</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a className="mx-3">About</a>
        </Link>
        <Link href="/ninjas">
          <a>Ninja List</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
