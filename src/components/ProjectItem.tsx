// import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";

type ProjectProps = {
  image: string;
  name: string;
  description: string;
  stack: string[];
  code: string;
  live: string;
};
export default function ProjectItem({
  // image,
  name,
  description,
}: // stack,
// code,
// live,
ProjectProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
