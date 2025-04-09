import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  author: {
    name: string
    role: string
    avatar: string
  }
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: "business-strategy-2023",
    title: "Top Business Strategy Trends for 2023",
    excerpt: "Discover the key business strategy trends that will shape the business landscape in 2023 and beyond.",
    category: "Strategy",
    date: "June 15, 2023",
    author: {
      name: "Aniket Subudhi",
      role: "CEO & Founder",
      avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=100&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1664575599736-c5197c684128?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "financial-planning-tips",
    title: "5 Financial Planning Tips for Small Businesses",
    excerpt:
      "Essential financial planning strategies that can help small businesses optimize cash flow and increase profitability.",
    category: "Finance",
    date: "May 22, 2023",
    author: {
      name: "Swagat Kumar Dash",
      role: "Financial Consultant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "digital-marketing-strategies",
    title: "Digital Marketing Strategies That Actually Work",
    excerpt:
      "Learn about proven digital marketing strategies that can help your business reach new customers and drive growth in today's competitive market.",
    category: "Marketing",
    date: "April 10, 2023",
    author: {
      name: "Bibhu Prasad Pradhan",
      role: "Marketing Strategist",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
  },
]

export function BlogPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <Card key={post.id} className="overflow-hidden hover-lift">
          <div className="relative h-48">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            <div className="absolute top-4 left-4">
              <Badge className="bg-secondary/90 hover:bg-secondary text-secondary-foreground">{post.category}</Badge>
            </div>
          </div>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 mb-2">
              <div className="relative h-8 w-8 rounded-full overflow-hidden">
                <Image
                  src={post.author.avatar || "/placeholder.svg"}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-sm">
                <p className="font-medium">{post.author.name}</p>
                <p className="text-muted-foreground text-xs">{post.date}</p>
              </div>
            </div>
            <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full group" asChild>
              <Link href={`/blog/${post.id}`}>
                Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
