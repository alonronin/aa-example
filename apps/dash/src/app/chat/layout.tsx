import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <div className="w-64 overflow-auto">
        <ul className="flex flex-col">
          {Array.from({ length: 100 }).map((_, i) => (
            <li key={i + 1}>
              <Link
                href={`/chat/${i + 1}`}
                className="flex items-center focus:bg-blue-600 focus:text-blue-50 hover:bg-blue-500 hover:text-blue-100 px-4 py-2"
              >
                Item {i + 1}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
