import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="flex  justify-between p-4 items-center border-b shadow-md border-t-4">
      <div className="flex items-center">
        <Image src="/ninja-logo.png" width="50" height="50" alt="ninja list" />
        <Link href="/">
          <a>
            <span className="text-2xl">
              NINJA
              <span className="text-blue-500">LIST</span>
            </span>
          </a>
        </Link>
      </div>
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
