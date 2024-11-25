import Link from 'next/link';

export default function Header() {
  return (
    <nav>
      <div className="flex gap-7 justify-end">
        <Link href="/">Home</Link>

        <Link href="/about">About Us</Link>

        <Link href="/contact"> Contact Us</Link>

        <button className="border rounded-lg border-white md:text-black hover:text-black hover:bg-lime-300 px-5">
          {' '}
          SignUp/LogIn
        </button>
      </div>
    </nav>
  );
}
