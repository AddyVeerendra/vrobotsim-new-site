import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {Download, Globe, Upload, Gamepad2, Archive, Waves, Zap, Hexagon} from "lucide-react"

const vrsVersions = [
    {
        id: "ultimate-goal",
        title: "Ultimate Goal",
        description: "Better for beginners, more lessons and more stable",
        icon: Gamepad2,
        color: "from-green-500 to-emerald-600",
        links: {
            online: "https://www.vrobotsim.online/homepage.html",
            windows: null,
            mac: null,
            linux: null,
        },
    },
    {
        id: "into-the-deep",
        title: "Into the Deep",
        description: "Get ready for the new FTC season! Better for real FTC teams.",
        icon: Waves,
        color: "from-blue-500 to-cyan-600",
        links: {
            online: "https://sim.vrobotsim.online/homepage.html",
            windows: null,
            mac: null, // Not yet available
            linux: null, // Not yet available
        },
    },
    {
        id: "robot-importer",
        title: "Robot Importer",
        description: "Import your own custom interactive robots into VRS!",
        icon: Upload,
        color: "from-purple-500 to-indigo-600",
        links: {
            online: "https://bit.ly/VRS-R-Importer",
            windows: null, // Not yet available
            mac: null,
            linux: null, // Not yet available
        },
    },
]

const archiveVersions = [
    {
        id: "power-play",
        title: "Power Play",
        icon: Zap,
        color: "from-orange-500 to-red-600",
        links: {
            online: "https://bit.ly/Power-Play-VRS",
            windows: null, // Not available
            mac: null, // Not available
            linux: null, // Not available
        },
    },
    {
        id: "center-stage",
        title: "Center Stage",
        icon: Hexagon,
        color: "from-pink-500 to-rose-600",
        links: {
            online: "https://centerstage.vrobotsim.online/homepage.html",
            windows: null,
            mac: null,
            linux: null, // Not available
        },
    },
]

export function GetVRSContent() {
    return (
        <div className="py-8">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Get VRS</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Choose your Virtual Robot Simulator version and start programming FTC robots without the hardware. Launch
                        online or download for offline use.
                    </p>
                </div>
            </section>

            {/* VRS Versions Grid */}
            <section className="py-16">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {vrsVersions.map((version) => {
                            const Icon = version.icon
                            return (
                                <Card key={version.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                    <CardHeader className="text-center pb-4">
                                        <div
                                            className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${version.color} flex items-center justify-center`}
                                        >
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <CardTitle className="text-2xl font-bold">{version.title}</CardTitle>
                                        <p className="text-gray-600 mt-2">{version.description}</p>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        {/* Launch Online Button */}
                                        <Button asChild className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                                            <Link href={version.links.online} target="_blank" rel="noopener noreferrer">
                                                <Globe className="h-4 w-4 mr-2" />
                                                Launch {version.title} Online
                                            </Link>
                                        </Button>

                                        {/* Download Buttons */}
                                        <div className="space-y-2">
                                            {/* Windows */}
                                            {version.links.windows ? (
                                                <Button asChild variant="outline" className="w-full">
                                                    <Link href={version.links.windows} target="_blank" rel="noopener noreferrer">
                                                        <Download className="h-4 w-4 mr-2" />
                                                        Download Windows Installer
                                                    </Link>
                                                </Button>
                                            ) : (
                                                <Button disabled variant="outline" className="w-full">
                                                    <Download className="h-4 w-4 mr-2" />
                                                    Windows Installer - Not yet available
                                                </Button>
                                            )}

                                            {/* macOS */}
                                            {version.links.mac ? (
                                                <Button asChild variant="outline" className="w-full">
                                                    <Link href={version.links.mac} target="_blank" rel="noopener noreferrer">
                                                        <Download className="h-4 w-4 mr-2" />
                                                        Download MacOS Installer
                                                    </Link>
                                                </Button>
                                            ) : (
                                                <Button disabled variant="outline" className="w-full">
                                                    <Download className="h-4 w-4 mr-2" />
                                                    MacOS Installer - Not yet available
                                                </Button>
                                            )}

                                            {/* Linux */}
                                            {version.links.linux ? (
                                                <Button asChild variant="outline" className="w-full">
                                                    <Link href={version.links.linux} target="_blank" rel="noopener noreferrer">
                                                        <Download className="h-4 w-4 mr-2" />
                                                        Download Linux Installer
                                                    </Link>
                                                </Button>
                                            ) : (
                                                <Button disabled variant="outline" className="w-full">
                                                    <Download className="h-4 w-4 mr-2" />
                                                    Linux Installer - Not yet available
                                                </Button>
                                            )}
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>


            {/* Getting Started */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Get Started?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            New to VRS? Check out our quickstart guide to learn the basics of programming robots in the virtual
                            environment.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
                                <Link href="/quickstart">View Quickstart Guide</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/tutorials">Browse Tutorials</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Archive Section */}
            <section className="py-16 bg-gray-100">
                <div className="container">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Archive className="h-8 w-8 text-gray-600" />
                                <h2 className="text-3xl font-bold text-gray-800">Archive</h2>
                            </div>
                            <p className="text-lg text-gray-600">
                                Previous VRS versions that are still available for teams who need them. We recommend using the current
                                versions above for the best experience.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {archiveVersions.map((version) => {
                                const Icon = version.icon
                                return (
                                    <Card key={version.id} className="overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
                                        <CardHeader className="text-center pb-4">
                                            <div
                                                className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${version.color} flex items-center justify-center`}
                                            >
                                                <Icon className="h-6 w-6 text-white" />
                                            </div>
                                            <CardTitle className="text-xl font-bold">{version.title}</CardTitle>
                                            <p className="text-gray-600 text-sm mt-2"></p>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            {/* Launch Online Button */}
                                            <Button asChild variant="secondary" className="w-full">
                                                <Link href={version.links.online} target="_blank" rel="noopener noreferrer">
                                                    <Globe className="h-4 w-4 mr-2" />
                                                    Launch {version.title} Online
                                                </Link>
                                            </Button>

                                            {/* Download Buttons - Compact Layout */}
                                            <div className="grid grid-cols-3 gap-2">
                                                {/* Windows */}
                                                {version.links.windows ? (
                                                    <Button asChild variant="outline" size="sm" className="text-xs">
                                                        <Link href={version.links.windows} target="_blank" rel="noopener noreferrer">
                                                            Windows
                                                        </Link>
                                                    </Button>
                                                ) : (
                                                    <Button disabled variant="outline" size="sm" className="text-xs">
                                                        Windows
                                                    </Button>
                                                )}

                                                {/* macOS */}
                                                {version.links.mac ? (
                                                    <Button asChild variant="outline" size="sm" className="text-xs">
                                                        <Link href={version.links.mac} target="_blank" rel="noopener noreferrer">
                                                            macOS
                                                        </Link>
                                                    </Button>
                                                ) : (
                                                    <Button disabled variant="outline" size="sm" className="text-xs">
                                                        macOS
                                                    </Button>
                                                )}

                                                {/* Linux */}
                                                {version.links.linux ? (
                                                    <Button asChild variant="outline" size="sm" className="text-xs">
                                                        <Link href={version.links.linux} target="_blank" rel="noopener noreferrer">
                                                            Linux
                                                        </Link>
                                                    </Button>
                                                ) : (
                                                    <Button disabled variant="outline" size="sm" className="text-xs">
                                                        Linux
                                                    </Button>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>

                        <div className="text-center mt-8">
                            <p className="text-sm text-gray-500">
                                Archive versions are provided for compatibility purposes. For the best experience and latest features,
                                we recommend using the current versions above.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
