import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter} from "@/components/site-footer"
import { TutorialsContent } from "@/components/tutorials-content"

export const metadata: Metadata = {
    title: "Tutorials - Virtual Robot Simulator",
    description:
        "Comprehensive VRS tutorials and resources including video lessons, programming guides, Java curriculum, and step-by-step instructions for learning robot programming.",
}

export default function TutorialsPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">
                <TutorialsContent />
            </main>
            <SiteFooter />
        </div>
    )
}
