"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ExternalLink, FileText, Newspaper } from "lucide-react"

export interface FeedItem {
    creator: string
    pubDate: string
    title: string
    link: string
    categories: string[]
    content: string
    "content:encoded": string
}

interface NewsFeedProps {
    items: FeedItem[]
    title?: string
    description?: string
    showFeatured?: boolean
    maxItems?: number
}

export function NewsFeed({
                             items,
                             title = "Latest News",
                             description = "Stay updated with the latest VRS developments and announcements",
                             showFeatured = true,
                             maxItems = 6,
                         }: NewsFeedProps) {
    const [displayItems, setDisplayItems] = useState<FeedItem[]>([])

    useEffect(() => {
        setDisplayItems(items.slice(0, maxItems))
    }, [items, maxItems])

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

    if (displayItems.length === 0) {
        return (
            <section className="py-16">
            <div className="container">
            <div className="text-center">
            <Newspaper className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
        <p className="text-gray-500">Check back later for updates.</p>
                                                          </div>
                                                          </div>
                                                          </section>
        )
    }

    return (
        <section className="py-16">
        <div className="container">
            {/* Header */}
            <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">{description}</p>
        </div>

    {/* Featured Item */}
    {showFeatured && displayItems.length > 0 && (
        <div className="mb-12">
        <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <CardHeader className="bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="flex items-center gap-2 mb-2">
        <Badge variant="secondary" className="bg-white/20 text-white">
        Featured
        </Badge>
        {displayItems[0].categories.map((category, index) => (
            <Badge key={index} variant="secondary" className="bg-white/20 text-white">
            {category}
            </Badge>
        ))}
        </div>
        <CardTitle className="text-2xl">{displayItems[0].title}</CardTitle>
        <div className="flex items-center gap-2 text-white/80">
    <Calendar className="h-4 w-4" />
    <span className="text-sm">{formatDate(displayItems[0].pubDate)}</span>
        {displayItems[0].creator && (
            <>
                <span>•</span>
        <span className="text-sm">By {displayItems[0].creator}</span>
        </>
        )}
        </div>
        </CardHeader>
        <CardContent className="p-6">
    <div
        className="text-gray-600 mb-4 line-clamp-3"
        dangerouslySetInnerHTML={{
        __html: displayItems[0].content || displayItems[0]["content:encoded"] || "",
    }}
        />
        <Button asChild className="bg-teal-500 hover:bg-teal-600">
    <Link href={displayItems[0].link} target="_blank" rel="noopener noreferrer">
    <ExternalLink className="h-4 w-4 mr-2" />
        Read More
    </Link>
    </Button>
    </CardContent>
    </Card>
    </div>
    )}

    {/* Grid of Items */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayItems.slice(showFeatured ? 1 : 0).map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow h-full flex flex-col">
            <CardHeader className="flex-shrink-0">
            <div className="flex flex-wrap gap-1 mb-2">
                {item.categories.map((category, catIndex) => (
                        <Badge key={catIndex} variant="secondary" className={getCategoryColor(category)}>
                        {category}
                        </Badge>
))}
    </div>
    <CardTitle className="text-lg line-clamp-2">{item.title}</CardTitle>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
    <Calendar className="h-3 w-3" />
        <span>{formatDate(item.pubDate)}</span>
    {item.creator && (
        <>
            <span>•</span>
    <span>By {item.creator}</span>
    </>
    )}
    </div>
    </CardHeader>
    <CardContent className="flex-grow flex flex-col">
    <div
        className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow"
    dangerouslySetInnerHTML={{
        __html: item.content || item["content:encoded"] || "",
    }}
    />
    <Button asChild variant="outline" size="sm" className="mt-auto bg-transparent">
    <Link href={item.link} target="_blank" rel="noopener noreferrer">
    <FileText className="h-3 w-3 mr-2" />
        Read More
    </Link>
    </Button>
    </CardContent>
    </Card>
))}
    </div>

    {/* Load More Button */}
    {items.length > maxItems && (
        <div className="text-center mt-12">
        <Button
            variant="outline"
        size="lg"
        onClick={() => setDisplayItems(items.slice(0, displayItems.length + 6))}
    >
        Load More Articles
    </Button>
    </div>
    )}
    </div>
    </section>
)
}

// Utility function to process feed items
export function processFeedItems(items: any[], category?: string, count = 6): FeedItem[] {
    if (!category) return items.slice(0, count)

    const filteredItems = items.filter(
        (item) => item.categories && item.categories.some((cat: string) => cat.toLowerCase() === category.toLowerCase()),
    )

    return filteredItems.slice(0, count)
}
