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
        <ModeToggle />
      </div>
    </Wrapper>
  );
}
