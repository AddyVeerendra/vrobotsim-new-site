import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter} from "@/components/site-footer"
import { NewsPageContent } from "@/components/news-content"

export const metadata: Metadata = {
    title: "News & Updates - Virtual Robot Simulator",
    description:
        "Stay updated with the latest VRS developments, announcements, tutorials, and community news. Get the most recent information about Virtual Robot Simulator features and updates.",
}

export default function NewsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">
                <NewsPageContent />
            </main>
            <SiteFooter />
        </div>
    )
}
