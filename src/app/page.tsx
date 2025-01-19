"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  let MINUTE_MS = 0;

  const [data_62251, setData_62251] = useState(null);
  const [data_64401, setData_64401] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("https://arrivelah2.busrouter.sg/?id=62251")
        .then((response) => response.json())
        .then((json) => setData_62251(json))
        .catch((error) => console.error(error));
      fetch("https://arrivelah2.busrouter.sg/?id=64401")
        .then((response) => response.json())
        .then((json) => setData_64401(json))
        .catch((error) => console.error(error));
      MINUTE_MS = 60000;
    }, MINUTE_MS);

    return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>
            {data_62251 ? (
              <pre>{JSON.stringify(data_62251, null, 2)}</pre>
            ) : (
              "Loading..."
            )}
          </li>
          <li>
            {data_64401 ? (
              <pre>{JSON.stringify(data_64401, null, 2)}</pre>
            ) : (
              "Loading..."
            )}
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
