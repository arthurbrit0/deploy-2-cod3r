import React, { useId } from "react";

interface Feature {
  readonly title: string;
  readonly description: string;
  readonly icon: React.ElementType;
}

export function FeatureCard({ features }: { readonly features: Feature[] }) {
  return (
    <div className="py-24">
      <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 md:gap-4 max-w-7xl mx-auto px-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b hover:scale-105 transition-all dark:from-gray-900 from-neutral-100 dark:to-gray-950 to-white p-6 rounded-3xl group pt-12"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-purple-500/10 backdrop-blur-sm flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
              <feature.icon className="w-6 h-6 text-purple-500 transform transition-all duration-300 group-hover:rotate-12" />
            </div>

            <Grid size={20} />

            <div className="relative z-20">
              <p className="text-base font-bold text-neutral-800 dark:text-white">
                {feature.title}
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p =
    pattern ??
    [
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-32 -mt-1 h-full w-1/2 md:w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
