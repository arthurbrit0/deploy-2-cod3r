import Image from "next/image";

interface FeatureBlockProps {
  title: string;
  subtitle: string;
  invert?: boolean;
  image?: string;
  text: string;
}

export default function FeatureBlock({
  title,
  subtitle,
  invert,
  text,
  image,
}: FeatureBlockProps) {
  return (
    <div
      className={`
        flex flex-col
        ${invert ? "md:flex-row-reverse" : "md:flex-row"}
        items-center justify-between gap-12
      `}
    >
      <div
        className="relative w-full h-80 md:h-96 md:w-1/2"
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full rounded-lg bg-gray-800" />
        )}
      </div>

      <div className="w-full md:w-1/2 space-y-6">
        <div className="text-sm font-medium text-purple-400 uppercase tracking-wider">
          {subtitle}
        </div>
        <h2 className="text-4xl font-bold text-white">{title}</h2>
        <p className="text-lg text-gray-300">
          {text}
        </p>
      </div>
    </div>
  );
}
