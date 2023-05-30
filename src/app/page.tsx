import Link from "next/link";
import Image from "next/image";
import AllRecipes from "@/components/allRecipes/AllRecipes";

export default function Home() {
  return (
    <>
      <Image
        src="/logo-big.png"
        width={400}
        height={400}
        alt="Picture of the logo"
      />

      <Link href="/login"> Go to log in </Link>
      {/* @ts-expect-error Async Server Component */}
      <AllRecipes />
    </>
  );
}
