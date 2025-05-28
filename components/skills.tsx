import { Card, CardContent } from "@/components/ui/card";
import { Code, Figma, Globe, Layout, Palette, Server } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      icon: <Layout className="h-10 w-10" />,
      title: "Front-End Development",
      description: "HTML, CSS, JavaScript, TypeScript, React.js, Next.js",
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "UI/UX Design",
      description: "Tailwind CSS, Styled Components, Responsive Design",
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "JavaScript Frameworks",
      description: "React.js, Next.js, Vue.js",
    },
    {
      icon: <Server className="h-10 w-10" />,
      title: "Something comming soon",
      description: "Something comming soon",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web Performance",
      description: "Optimization, Lazy Loading, Code Splitting",
    },
    {
      icon: <Figma className="h-10 w-10" />,
      title: "Something comming soon",
      description: "Something comming soon",
    },
  ];

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Skills
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Technologies and skills I have mastered
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-colors duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-2 bg-primary/10 rounded-full text-primary">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
