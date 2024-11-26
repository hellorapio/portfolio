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
        <div className="flex md:justify-between w-full md:flex-row flex-col gap-1 md:gap-0">
          <div>
            <h3 className="md:text-md text-sm font-semibold">{company}</h3>
            <p className="md:text-sm text-xs text-gray-500">{title}</p>
          </div>
          <div>
            <p className="text-xs md:text-sm">{date}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
