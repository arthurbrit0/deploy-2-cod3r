"use client";

interface CourseHeroProps {
  title: string;
  description: string;
  image: string;
}

export function CourseHero({
  title,
  description,
  image,
}: CourseHeroProps) {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Trilha {title}</h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl">{description}</p>

      </div>
    </div>
  );
}