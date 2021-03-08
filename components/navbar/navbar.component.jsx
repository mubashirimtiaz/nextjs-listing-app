import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <h1 className="text-5xl text-red-500">Ninjas List</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninjas">
        <a>Ninja List</a>
      </Link>
    </nav>
  );
};

export default Navbar;
