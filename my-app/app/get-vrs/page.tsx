import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter} from "@/components/site-footer"
import { GetVRSContent } from "@/components/get-vrs-content"

export const metadata: Metadata = {
    title: "Get VRS - Virtual Robot Simulator",
    description:
        "Download or launch Virtual Robot Simulator online. Choose from Ultimate Goal, Into the Deep, and Robot Importer versions to start programming FTC robots without hardware.",
}

export default function GetVRSPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">
                <GetVRSContent />
            </main>
            <SiteFooter />
        </div>
    )
}
