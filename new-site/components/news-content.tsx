"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NewsFeed, type FeedItem } from "@/components/news-feed"
import { Search, Newspaper, FileText, BookOpen, Megaphone, Calendar, Loader2 } from "lucide-react"

interface NewsPageContentProps {
    initialItems?: FeedItem[]
    initialError?: string
}

export function NewsPageContent({ initialItems = [], initialError }: NewsPageContentProps) {
    const [newsItems, setNewsItems] = useState<FeedItem[]>(initialItems)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(initialError || null)
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredItems, setFilteredItems] = useState<FeedItem[]>(initialItems)

    // Extract unique categories from news items
    const getCategories = (items: FeedItem[]) => {
        const categorySet = new Set<string>()
        items.forEach((item) => {
            item.categories.forEach((cat) => categorySet.add(cat))
        })

        const uniqueCategories = Array.from(categorySet)

        return [
            { id: "all", name: "All", icon: Newspaper, count: items.length },
            ...uniqueCategories.map((cat) => ({
                id: cat.toLowerCase(),
                name: cat,
                icon: getCategoryIcon(cat),
                count: items.filter((item) => item.categories.some((c) => c.toLowerCase() === cat.toLowerCase())).length,
            })),
        ]
    }

    const getCategoryIcon = (category: string) => {
        switch (category.toLowerCase()) {
            case "news":
                return Megaphone
            case "tutorial":
            case "tutorials":
                return BookOpen
            case "docs":
            case "documentation":
                return FileText
            case "update":
            case "updates":
                return Calendar
            default:
                return Newspaper
        }
    }

    const categories = getCategories(newsItems)

    const handleCategoryChange = (categoryId: string) => {
        setSelectedCategory(categoryId)
        filterItems(categoryId, searchQuery)
    }

    const handleSearchChange = (query: string) => {
        setSearchQuery(query)
        filterItems(selectedCategory, query)
    }

    const filterItems = (category: string, search: string) => {
        let filtered = newsItems

        // Filter by category
        if (category !== "all") {
            filtered = filtered.filter((item) => item.categories.some((cat) => cat.toLowerCase() === category.toLowerCase()))
        }

        // Filter by search query
        if (search.trim()) {
            const searchLower = search.toLowerCase()
            filtered = filtered.filter(
                (item) =>
                    item.title.toLowerCase().includes(searchLower) ||
                    item.content.toLowerCase().includes(searchLower) ||
                    item.creator.toLowerCase().includes(searchLower),
            )
        }

        setFilteredItems(filtered)
    }

    // Update filtered items when newsItems change
    useEffect(() => {
        filterItems(selectedCategory, searchQuery)
    }, [newsItems, selectedCategory, searchQuery])

    const refreshFeed = async () => {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch("/api/feed?slug=news")
            if (!response.ok) {
                throw new Error("Failed to fetch feed")
            }

            const data = await response.json()
            if (data.items) {
                setNewsItems(data.items)
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : "Failed to load news feed")
        } finally {
            setLoading(false)
        }
    }

    if (error && newsItems.length === 0) {
        return (
            <div className="py-8">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
                    <div className="container text-center">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <Newspaper className="h-12 w-12" />
                            <h1 className="text-4xl md:text-5xl font-bold">News & Updates</h1>
                        </div>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                            Stay informed with the latest VRS developments, feature announcements, tutorials, and community
                            highlights.
                        </p>
                    </div>
                </section>

                {/* Error State */}
                <section className="py-16">
                    <div className="container">
                        <div className="text-center py-16">
                            <div className="text-red-500 mb-4">
                                <Newspaper className="h-16 w-16 mx-auto mb-4 opacity-50" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">Unable to load news feed</h3>
                            <p className="text-gray-500 mb-6">{error}</p>
                            <Button onClick={refreshFeed} disabled={loading}>
                                {loading ? (
                                    <>
                                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                        Loading...
                                    </>
                                ) : (
                                    "Try Again"
                                )}
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div className="py-8">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
                <div className="container text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Newspaper className="h-12 w-12" />
                        <h1 className="text-4xl md:text-5xl font-bold">News & Updates</h1>
                    </div>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Stay informed with the latest VRS developments, feature announcements, tutorials, and community highlights.
                        Never miss an important update from the Virtual Robot Simulator team.
                    </p>
                </div>
            </section>

            {/* News Feed */}
            <section className="py-16">
                <div className="container">
                    {filteredItems.length > 0 ? (
                        <NewsFeed
                            items={filteredItems}
                            title=""
                            description=""
                            showFeatured={selectedCategory === "all" && !searchQuery}
                            maxItems={12}
                        />
                    ) : (
                        <div className="text-center py-16">
                            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
                            <Button
                                variant="outline"
                                onClick={() => {

                                }}
                            >
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader className="text-center">
                                    <BookOpen className="h-12 w-12 text-teal-500 mx-auto mb-4" />
                                    <CardTitle>Tutorials</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 mb-4">Comprehensive guides and video tutorials for all skill levels.</p>
                                    <Button asChild variant="outline">
                                        <a href="/tutorials">Browse Tutorials</a>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader className="text-center">
                                    <FileText className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                                    <CardTitle>Documentation</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 mb-4">Technical documentation and API references for developers.</p>
                                    <Button asChild variant="outline">
                                        <a href="/quickstart">View Docs</a>
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="hover:shadow-lg transition-shadow">
                                <CardHeader className="text-center">
                                    <Megaphone className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                                    <CardTitle>Community</CardTitle>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <p className="text-gray-600 mb-4">Join our community of educators, students, and FTC teams.</p>
                                    <Button asChild variant="outline">
                                        <a href="/contact-us">Get Involved</a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
