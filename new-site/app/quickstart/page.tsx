import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter} from "@/components/site-footer"
import { QuickstartContent } from "@/components/quickstart-content"

export const metadata: Metadata = {
    title: "VRS Quickstart - Virtual Robot Simulator",
    description:
        "Virtual Robot Simulator is a simple, easy-to-use platform that allows FTC teams to program and test their robots without access to physical hardware. Learn how to use VRS with this quickstart!",
}

export default function QuickstartPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">
                <QuickstartContent />
            </main>
            <SiteFooter />
        </div>
    )
}
