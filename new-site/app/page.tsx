import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter} from "@/components/site-footer"
import { GuideCard } from "@/components/guide-card"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <section className="relative h-[600px] bg-gradient-to-r from-blue-600 to-purple-700">
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center text-white max-w-4xl px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">VIRTUAL ROBOT SIMULATOR</h1>
              <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
                Virtual Robot Simulator is a platform that allows students to program and test FIRST Tech Challenge robots
                without the need for physical hardware.
              </p>
              <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Beginner Guides</h2>
              <p className="text-gray-600 text-lg">
                Here are some guides that beginners can use for reference after getting VRS.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <GuideCard
                title="Installation and setup guide"
                description="Learn how to install and set up VRS with this quick and easy tutorial!"
                href="/installation-and-setup-guide"
              />

              <GuideCard
                title="VRS Guidebook"
                description="The VRS guidebook provides a comprehensive guide of the simulator, making the reader an expert."
                href="/vrs-guidebook"
                gradient={true}
              />

              <GuideCard
                title="Learn to program a robot with VRS"
                description="The most basic introduction to Virtual Robot Simulator!"
                href="/learn-to-program-a-robot-with-vrs"
              />
            </div>
          </div>
        </section>

        {/* VRS Quickstart Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="VRS Screenshot"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">VRS Quickstart</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Virtual Robot Simulator is a simple, easy-to-use platform that allows FTC teams to program and test
                  their robots without access to physical hardware. Learn how to use VRS with this quickstart!
                </p>
                <Button size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-teal-500 text-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-4xl font-bold mb-4">Join the community of 32,000+ users!</h2>
                <p className="text-lg leading-relaxed">
                  Write programs in both FTC Blocks and Java, upload custom robots with accurate mechanics, and enjoy a
                  regularly updated accurate development environment, realistic physics simulations, lessons,
                  challenges, and hints, and complete documentation!
                </p>
              </div>
              <div className="text-center lg:text-right">
                <Button size="lg" variant="secondary" className="bg-white text-teal-500 hover:bg-gray-100">
                  Get VRS
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
