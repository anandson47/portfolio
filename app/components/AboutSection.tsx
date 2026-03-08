import Image from "next/image"

export default function AboutSection() {

  return (
    <section className="grid md:grid-cols-2 gap-10 items-center">

      {/* Photo */}

      <div className="flex justify-center">

        <Image
          src="/images/anand.JPG"
          alt="Anand Vijay"
          width={350}
          height={350}
          className="rounded-2xl object-cover"
        />

      </div>

      {/* Text */}

      <div className="space-y-4">

        <h2 className="text-3xl font-bold">
          About Me
        </h2>

        <p className="text-neutral-400">
          I&apos;m Anand Vijay — a developer, cricketer, and fitness enthusiast.
          I enjoy building web applications, improving my game on the field,
          and documenting my progress along the way.
        </p>

        <p className="text-neutral-400">
          This site is my personal hub where I share my projects, track my
          cricket performance, and log my fitness journey.
        </p>

        <p className="text-neutral-400">
          Currently focused on improving as a developer while competing
          in club cricket and pushing toward my fitness goals.
        </p>

      </div>

    </section>
  )
}