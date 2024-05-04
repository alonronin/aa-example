import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Welcome to dash!</h1>

      <p>
        go to <Link href={'/chat'}>chat</Link>
      </p>
    </div>
  );
}
