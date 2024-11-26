import Link from "next/link";

export default function Logo() {
  return (
    <Link
      className="md:text-xl text-lg font-medium tracking-tight"
      href={"/"}
    >
      Abdelrahman
    </Link>
  );
}
