// ClientsSection.tsx
const techs = [
  { name: "Python",     slug: "python" },
  { name: "React",      slug: "react" },
  { name: "Next.js",    slug: "nextdotjs" },
  { name: "Node.js",    slug: "nodedotjs" },
  { name: "MongoDB",    slug: "mongodb" },
  { name: "Docker",     slug: "docker" },
  { name: "AWS",        slug: "amazon", customIcon: "/amazon-1324440119203699242_0px.svg" },
  { name: "TensorFlow", slug: "tensorflow" },
  { name: "PyTorch",    slug: "pytorch" },
];

export default function ClientsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-normal text-center mb-16">Technologies</h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-slide space-x-16">
            {[...techs, ...techs].map((t, i) => (
              <div
                key={`${t.slug}-${i}`}
                className="flex items-center justify-center min-w-[80px] h-20 flex-shrink-0"
                title={t.name}
              >
                {/* Color = currentColor. Use text-* classes to style */}
                <img
                  src={t.customIcon || `https://cdn.simpleicons.org/${t.slug}/FFFFFF`}
                  alt={t.name}
                  className={`w-12 h-12 opacity-80 hover:opacity-100 transition-opacity ${t.customIcon ? 'brightness-0 invert' : ''}`}
                  loading="lazy"
                  width={48}
                  height={48}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
