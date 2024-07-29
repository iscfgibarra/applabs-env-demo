'use client';
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Dato público</h1>
      <p>{ process.env.NEXT_PUBLIC_NO_SENSITIVE_DATA }</p>
      <h1>Dato sensible</h1>
      <p> { process.env.DEMO_ENV_DATABASE_NAME }</p>
    </main>
  );
}
