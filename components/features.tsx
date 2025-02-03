import { Shield, Lock, Globe, Terminal } from "lucide-react"

const features = [
  {
    name: "Network Security",
    description: "Learn to protect computer networks from intruders and attacks.",
    icon: Globe,
  },
  {
    name: "Ethical Hacking",
    description: "Master the techniques used by hackers to strengthen system security.",
    icon: Terminal,
  },
  {
    name: "Cryptography",
    description: "Understand the principles of secure communication and data protection.",
    icon: Lock,
  },
  {
    name: "Security Compliance",
    description: "Learn about industry standards and regulations in cybersecurity.",
    icon: Shield,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Our Top Courses</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Dive into our most popular cybersecurity courses and start your journey to becoming a security expert.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

