import { getFeedData } from "@/actions/get-feed"
import { NewsFeed, processFeedItems } from "@/components/news-feed"

interface NewsSectionProps {
    category?: string
    count?: number
    showFeatured?: boolean
    title?: string
    description?: string
}

export default async function NewsSection({
                                              category = "News",
                                              count = 6,
                                              showFeatured = true,
                                              title,
                                              description,
                                          }: NewsSectionProps) {
    // Default fallback data
    const fallbackData = {
        items: [
            {
                creator: "VRS Team",
                pubDate: new Date().toISOString(),
                title: "Welcome to Virtual Robot Simulator",
                link: "/",
                categories: ["News"],
                content: "Stay tuned for the latest updates and announcements from the VRS team.",
                "content:encoded": "Stay tuned for the latest updates and announcements from the VRS team.",
            },
        ],
    }

    try {
        const feedData = await getFeedData("news", category)
        const items = feedData?.items || fallbackData.items
        const processedItems = processFeedItems(items, category, count)

        return (
            <NewsFeed
                items={processedItems}
                title={title}
                description={description}
                showFeatured={showFeatured}
                maxItems={count}
            />
        )
    } catch (error) {
        console.error("Error fetching feed data:", error)
        return (
            <NewsFeed
                items={fallbackData.items}
                title={title || "Latest News"}
                description={description || "Stay updated with VRS developments"}
                showFeatured={showFeatured}
                maxItems={count}
            />
        )
    }
}

export async function DocsSection({
                                      count = 5,
                                      showFeatured = false,
                                  }: {
    count?: number
    showFeatured?: boolean
}) {
    return (
        <NewsSection
            category="Docs"
            count={count}
            showFeatured={showFeatured}
            title="Documentation Updates"
            description="Latest documentation and guides for Virtual Robot Simulator"
        />
    )
}
