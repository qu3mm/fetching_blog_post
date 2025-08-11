import Link from "next/link";

const header = () => {
  return (
    <div>
      <header className="flex justify-center bg-gray-800 text-white p-4">
        <nav className="mt-2">
          <ul className="flex items space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/post">post</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default header;
