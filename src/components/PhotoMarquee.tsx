const PhotoMarquee = () => {
  // Auto-import all images in the about folder as URLs (Vite feature)
  const modules = import.meta.glob("@/assets/about/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
    as: "url",
  }) as Record<string, string>;

  // Stable order by filename
  const files = Object.entries(modules)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, url]) => url);

  // Duplicate the list to create a seamless loop
  const loop = [...files, ...files];

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex gap-4 will-change-transform animate-marquee"
        style={{
          // adjust to taste; larger = slower
          // 40s default, override by setting --marquee-duration on parent
          // @ts-ignore - CSS var string ok
          '--marquee-duration': '40s',
        }}
      >
        {loop.map((src, i) => (
          <div key={i} className="rounded-3xl overflow-hidden border border-portfolio-border/30 shadow-xl flex-none">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img src={src} className="h-48 sm:h-56 md:h-64 w-auto object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoMarquee;
