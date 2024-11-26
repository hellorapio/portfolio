import Link from "next/link";

export default function QuickLinks() {
  return (
    <nav>
      <ul className="flex gap-4 font-light">
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
