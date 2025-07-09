import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter} from "@/components/site-footer"
import { MotorPowerContent } from "@/components/motor-power-content"

export const metadata: Metadata = {
    title: "Intro to Motor Power - Virtual Robot Simulator",
    description:
        "Learn how to make your robot move, turn, and strafe using motor power in Virtual Robot Simulator. A beginner-friendly guide to robot movement programming.",
}

export default function IntroToMotorPowerPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <main className="flex-1">
                <MotorPowerContent />
            </main>
            <SiteFooter />
        </div>
    )
}
