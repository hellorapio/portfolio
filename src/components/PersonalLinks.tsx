import Link from "next/link";
import { Badge } from "./ui/badge";
import { ArrowUpRight } from "lucide-react";

export default function PersonalLinks() {
  return (
    <section className="py-4">
      <div className="flex gap-4 ">
        <Link href="https://www.linkedin.com/in/hellorapio">
          <Badge>
            <div className="flex items-center gap-1">
              LinkedIn <ArrowUpRight className="w-4" />
            </div>
          </Badge>
        </Link>
        <Link href="https://github.com/hellorapio">
          <Badge>
            <div className="flex items-center gap-1">
              Github <ArrowUpRight className="w-4" />
            </div>
          </Badge>
        </Link>
        <Link href="https://drive.google.com/file/d/1JzXRTYFR6m5YQCtbfYUGQ40TqKxkcGWg/view?usp=drive_link">
          <Badge>
            <div className="flex items-center gap-1">
              CV <ArrowUpRight className="w-4" />
            </div>
          </Badge>
        </Link>
      </div>
    </section>
  );
}
