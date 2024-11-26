import Link from "next/link";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";
// import QuickLinks from "./QuickLinks";
import Wrapper from "./Wrapper";

export default function Header() {
  return (
    <Wrapper>
      <div className="flex justify-between items-center">
        <Logo />
        {/* <QuickLinks /> */}
        <div className="flex items-center gap-4">
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
            </ul>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </Wrapper>
  );
}
