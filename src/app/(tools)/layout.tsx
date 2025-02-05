import Link from "next/link";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col justify-center items-center mt-6">
      <Link href="./" className="text-xl bg-blue-500 px-4 py-2 rounded-md w-max">
        ⬅️ Back
      </Link>
      {children}
    </main>
  );
}
