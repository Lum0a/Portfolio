import React from 'react';
import { PencilRuler } from 'lucide-react';

const SOFTWARE = [
  { name: 'Photoshop', mark: 'Ps', colors: ['#001e36', '#0878b8'], accent: '#31a8ff' },
  { name: 'InDesign', mark: 'Id', colors: ['#2e001f', '#a40035'], accent: '#ff3366' },
  { name: 'Illustrator', mark: 'Ai', colors: ['#330000', '#b74700'], accent: '#ff9a00' },
  { name: 'Premiere Pro', mark: 'Pr', colors: ['#00005b', '#30239b'], accent: '#9999ff' },
  { name: 'After Effects', mark: 'Ae', colors: ['#00005b', '#4b2ca3'], accent: '#b59aff' },
  { name: 'Adobe Express', mark: 'Ex', colors: ['#2d006b', '#a100ff'], accent: '#e4b2ff' },
  { name: 'Rhino', mark: 'Rhino', colors: ['#183a52', '#4d8ea0'], accent: '#e9f6f5' },
  { name: 'Shapr', mark: 'Shapr', colors: ['#102b42', '#087caa'], accent: '#b7efff' },
  { name: 'SolidWorks', mark: 'SW', colors: ['#3b1114', '#bb2828'], accent: '#ff8d72' },
] as const;

const SoftwareLogo: React.FC<{ name: string; mark: string; colors: readonly [string, string]; accent: string }> = ({
  name,
  mark,
  colors,
  accent,
}) => {
  const gradientId = `logo-${name.toLowerCase().replaceAll(' ', '-')}`;

  return (
    <svg
      aria-label={`${name}-Logo`}
      className="block aspect-[1.55] w-full"
      role="img"
      viewBox="0 0 320 206"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={colors[0]} />
          <stop offset="1" stopColor={colors[1]} />
        </linearGradient>
        <radialGradient id={`${gradientId}-glow`} cx="1" cy="0" r="1">
          <stop stopColor={accent} stopOpacity=".72" />
          <stop offset="1" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="320" height="206" rx="10" fill={`url(#${gradientId})`} />
      <rect width="320" height="206" rx="10" fill={`url(#${gradientId}-glow)`} />
      <path d="M206 206 320 92v114z" fill="white" fillOpacity=".07" />
      <path d="M0 158 158 0h44L44 158z" fill="white" fillOpacity=".045" />
      <text
        x="24"
        y="151"
        fill={accent}
        fontFamily="Inter, Arial, sans-serif"
        fontSize={mark.length > 2 ? 58 : 112}
        fontWeight="600"
        letterSpacing={mark.length > 2 ? "-3" : "-9"}
      >
        {mark}
      </text>
      <text
        x="27"
        y="181"
        fill="white"
        fillOpacity=".78"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="13"
        fontWeight="500"
        letterSpacing="2.2"
      >
        {name.toUpperCase()}
      </text>
    </svg>
  );
};

export const SoftwareSection: React.FC = () => (
  <section
    id="tools-section"
    className="relative bg-black px-5 py-16 sm:px-8 md:px-12 md:py-24"
  >
    <div className="mx-auto max-w-7xl space-y-10">
      <header className="max-w-2xl space-y-4">
        <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/70">
          WERKZEUGE
        </p>
        <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
          Programme, mit denen ich arbeite.
        </h2>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
        {SOFTWARE.map((software) => (
          <article
            key={software.name}
            className="software-tile overflow-hidden rounded-[10px] border border-white/10 bg-[#10100f] transition-colors duration-300 hover:border-[#c3a04a]/50"
          >
            <div className="flex h-full flex-col">
              <SoftwareLogo {...software} />
              <h3 className="px-4 py-4 text-sm font-medium text-white sm:px-5 sm:text-base">
                {software.name}
              </h3>
            </div>
          </article>
        ))}

        <article className="software-tile overflow-hidden rounded-[10px] border border-white/10 bg-[#10100f] transition-colors duration-300 hover:border-[#c3a04a]/50">
          <div className="flex h-full flex-col">
            <div className="relative grid aspect-[1.55] w-full place-items-center overflow-hidden bg-gradient-to-br from-[#cf8a32] via-[#b75b25] to-[#66362e]">
              <div aria-hidden="true" className="absolute inset-0 opacity-25">
                <div className="absolute left-[18%] top-[24%] h-28 w-px rotate-45 bg-white" />
                <div className="absolute left-[48%] top-[8%] h-40 w-px -rotate-12 bg-white" />
                <div className="absolute right-[22%] top-[18%] h-32 w-px rotate-[32deg] bg-white" />
              </div>
              <PencilRuler aria-hidden="true" className="relative size-16 text-white drop-shadow-lg" strokeWidth={1.35} />
            </div>
            <h3 className="px-4 py-4 text-sm font-medium text-white sm:px-5 sm:text-base">
              Analoges Zeichnen
            </h3>
          </div>
        </article>
      </div>
    </div>
  </section>
);
