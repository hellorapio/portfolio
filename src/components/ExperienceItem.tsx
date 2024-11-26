import Image from "next/image";

type ExperienceItemProps = {
  title: string;
  company: string;
  date: string;
  image: string;
  alt: string;
};

export default function ExperienceItem({
  title,
  company,
  date,
  image,
  alt,
}: ExperienceItemProps) {
  return (
    <li className="flex justify-between">
      <div className="flex items-center gap-4 w-full">
        <div>
          <Image
            src={image}
            width={60}
            height={60}
            alt={alt}
            className="rounded-lg"
          />
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center w-full">
            <h3 className="text-md font-semibold">{company}</h3>
            <p className="text-sm">{date}</p>
          </div>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </li>
  );
}
