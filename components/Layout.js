import Head from "next/head";
import Link from "next/link";

export default function Layout({ children, title = "HP by Next.js" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex items-center pl-8 h-14">
            <div className="flex space-x-4">
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Home
                </a>
              </Link>
              <Link href="/blog-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Blog
                </a>
              </Link>
              <Link href="/contact-page">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen">
        {children}
      </main>
      <footer className="w-full h-12 flex justify-center items-center border-t">
        <a
          href="https://ferret-plus.com/6845"
          target="_blank"
          rel="noopnner noreferrer"
        ></a>
        Powerd by{""}
        <img
          src="https://ferret.akamaized.net/uploads/article/6845/eyecatch/default-95e77d8922603c5a64085258c0cc3f96.png"
          alt="Vercel Logo"
          className="h-4 ml-2"
        />
      </footer>
    </div>
  );
}
