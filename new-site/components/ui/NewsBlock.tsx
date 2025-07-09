import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, User } from "lucide-react"
import type { FeedItem } from "@/components/news-feed"

interface NewsBlockProps {
    data: FeedItem
    featured?: boolean
}

export function NewsBlock({ data, featured = false }: NewsBlockProps) {
    const formatDate = (dateString: string) => {
        try {
            return new Date(dateString).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            })
        } catch {
            return dateString
        }
    }

    const getCategoryColor = (category: string) => {
        switch (category.toLowerCase()) {
            case "news":
                return "bg-blue-100 text-blue-800"
            case "docs":
                return "bg-green-100 text-green-800"
            case "tutorial":
                return "bg-purple-100 text-purple-800"
            case "update":
                return "bg-orange-100 text-orange-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    if (featured) {
        return (
            <Card className="mb-8 overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-teal-500 to-blue-600 text-white">
                    <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary" className="bg-white/20 text-white">
                            Featured
                        </Badge>
                        {data.categories.map((category, index) => (
                            <Badge key={index} variant="secondary" className="bg-white/20 text-white">
                                {category}
                            </Badge>
                        ))}
                    </div>
                    <CardTitle className="text-2xl">{data.title}</CardTitle>
                    <div className="flex items-center gap-4 text-white/80 text-sm">
                        <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(data.pubDate)}</span>
                        </div>
                        {data.creator && (
                            <div className="flex items-center gap-1">
                                <User className="h-4 w-4" />
                                <span>{data.creator}</span>
                            </div>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="p-6">
                    <div
                        className="text-gray-600 mb-4 prose prose-sm max-w-none"
                        dangerouslySetInnerHTML={{
                            __html: data.content || data["content:encoded"] || "",
                        }}
                    />
                    <Button asChild className="bg-teal-500 hover:bg-teal-600">
                        <Link href={data.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Read Full Article
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="mb-6 hover:shadow-md transition-shadow">
            <CardHeader>
                <div className="flex flex-wrap gap-1 mb-2">
                    {data.categories.map((category, index) => (
                        <Badge key={index} variant="secondary" className={getCategoryColor(category)}>
                            {category}
                        </Badge>
                    ))}
                </div>
                <CardTitle className="text-xl">{data.title}</CardTitle>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{formatDate(data.pubDate)}</span>
                    </div>
                    {data.creator && (
                        <div className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            <span>{data.creator}</span>
                        </div>
                    )}
                </div>
            </CardHeader>
            <CardContent>
                <div
                    className="text-gray-600 mb-4 prose prose-sm max-w-none line-clamp-3"
                    dangerouslySetInnerHTML={{
                        __html: data.content || data["content:encoded"] || "",
                    }}
                />
                <Button asChild variant="outline" size="sm">
                    <Link href={data.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-2" />
                        Read More
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}
