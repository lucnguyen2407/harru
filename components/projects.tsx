import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "Website bán hàng với đầy đủ tính năng giỏ hàng, thanh toán và quản lý đơn hàng.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Task Management App",
      description: "Ứng dụng quản lý công việc với tính năng kéo thả, phân loại và thông báo.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "TypeScript", "Redux", "Firebase"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Portfolio Website",
      description: "Website portfolio cá nhân với thiết kế hiện đại và khả năng chuyển đổi theme.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Dự án</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Một số dự án tiêu biểu mà tôi đã thực hiện
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-primary transition-all duration-300 h-full flex flex-col"
            >
              <div className="relative h-48 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
