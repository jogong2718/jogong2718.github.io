import Image from "next/image"

interface ProcessStepProps {
  number: string
  title: string
  description: string
  image: string
  isLast?: boolean
}

export default function ProcessStep({ number, title, description, image, isLast }: ProcessStepProps) {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16">
      {/* Image */}
      <div className="flex-1 aspect-square relative overflow-hidden border border-white/10">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content */}
      <div
        className={`flex-1 flex flex-col justify-center space-y-6 ${!isLast ? "border-t border-white/10 pt-8 md:border-t-0 md:pt-0" : ""}`}
      >
        <div className="flex items-center gap-4">
          <span className="text-3xl md:text-4xl font-normal text-white/40 leading-[0.9] tracking-tight">{number}</span>
          <h3 className="text-3xl md:text-4xl font-normal leading-[0.9] tracking-tight">{title}</h3>
        </div>

        <p className="text-white/40 text-base leading-relaxed max-w-lg">{description}</p>
      </div>
    </div>
  )
}
