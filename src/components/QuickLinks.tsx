import Link from "next/link";

export default function QuickLinks() {
  return (
    <nav>
      <ul className="flex md:gap-6 gap-4">
        <li>
          <Link
            href="/about"
            className="hover:opacity-60 transition-all duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="hover:opacity-60 transition-all duration-300"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
