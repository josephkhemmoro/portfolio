const photos = Object.entries(import.meta.glob("@/assets/about/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, src]) => src as string);

export default function PhotoMarquee() {
  return (
    <div className="flex gap-4 overflow-x-auto pb-3" role="region" aria-label="Personal photos" tabIndex={0}>
      {photos.map((src) => (
        <img
          key={src}
          src={src}
          alt=""
          loading="lazy"
          className="h-48 w-auto shrink-0 rounded-2xl border border-portfolio-border/30 object-cover sm:h-56"
        />
      ))}
    </div>
  );
}
