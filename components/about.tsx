import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] overflow-hidden rounded-full border-4 border-gray-200 dark:border-gray-700">
              <Image
                src="/me.jpg?height=400&width=400"
                alt="Profile picture"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-lg">
              Hello! I'm Nguyen Tien Luc , a Front-End Developer with 3 years of
              experience in building and designing modern web applications.
            </p>
            <p className="text-gray-500 dark:text-gray-400 md:text-lg">
              I'm passionate about creating excellent user experiences and have
              the ability to transform designs into code accurately and
              efficiently. I stay up-to-date with the latest technologies and
              apply best practices in web development.
            </p>
            <p className="text-gray-500 dark:text-gray-400 md:text-lg">
              Outside of work, I enjoy reading books, going to the gym, and
              playing games with my friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
