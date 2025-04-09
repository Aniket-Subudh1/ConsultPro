import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CaseStudy {
  id: string
  title: string
  description: string
  industry: string
  results: string
  image: string
}

const caseStudies: CaseStudy[] = [
  {
    id: "tech-startup",
    title: "Tech Startup Revenue Growth",
    description:
      "How we helped a tech startup increase their revenue by 200% in just 12 months through strategic planning and market positioning.",
    industry: "Technology",
    results: "200% Revenue Growth",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "retail-chain",
    title: "Retail Chain Expansion",
    description:
      "Strategic guidance for a retail chain expanding into new markets, resulting in 15 new successful locations in 18 months.",
    industry: "Retail",
    results: "15 New Locations",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "manufacturing-efficiency",
    title: "Manufacturing Process Optimization",
    description:
      "Streamlining operations for a manufacturing company, reducing costs by 30% while improving product quality and delivery times.",
    industry: "Manufacturing",
    results: "30% Cost Reduction",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=600&auto=format&fit=crop",
  },
]

export function CaseStudies() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {caseStudies.map((study) => (
        <Card key={study.id} className="overflow-hidden hover-lift">
          <div className="relative h-48">
            <Image src={study.image || "/placeholder.svg"} alt={study.title} fill className="object-cover" />
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary/90 hover:bg-primary text-primary-foreground">{study.industry}</Badge>
            </div>
          </div>
          <CardHeader className="pb-2">
            <CardTitle>{study.title}</CardTitle>
            <CardDescription className="text-primary font-medium">{study.results}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{study.description}</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full group" asChild>
              <Link href={`/case-studies/${study.id}`}>
                View Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
