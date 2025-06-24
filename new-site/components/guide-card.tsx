import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface GuideCardProps {
  title: string
  description: string
  href: string
  imageSrc?: string
  imageAlt?: string
  gradient?: boolean
}

export function GuideCard({ title, description, href, imageSrc, imageAlt, gradient = false }: GuideCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-300 flex items-center justify-center">
        {gradient ? (
          <div className="h-full w-full bg-gradient-to-r from-blue-500 to-orange-500 flex items-center justify-center">
            <div className="text-white font-bold text-2xl">VRS</div>
          </div>
        ) : (
          <Image
            src={imageSrc || "/placeholder.svg?height=200&width=300"}
            alt={imageAlt || title}
            width={300}
            height={200}
            className="object-cover"
          />
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl">
          <Link href={href} className="hover:text-teal-500 transition-colors">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
