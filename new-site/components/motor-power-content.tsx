import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight, RotateCw, Move, Code, Lightbulb, HelpCircle } from "lucide-react"

export function MotorPowerContent() {
    return (
        <div className="py-8">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge variant="secondary" className="mb-4 bg-white/20 text-white">
                            Beginner Tutorial
                        </Badge>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Intro to Motor Power</h1>
                        <p className="text-lg md:text-xl leading-relaxed">
                            Learn how to make your robot move, turn, and strafe using motor power controls in Virtual Robot Simulator
                        </p>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <section className="py-4 bg-gray-50 border-b">
                <div className="container">
                    <div className="flex items-center gap-2 text-sm">
                        <Link href="/tutorials" className="text-teal-600 hover:text-teal-700">
                            Tutorials
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-600">Intro to Motor Power</span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-4xl mx-auto prose prose-lg">
                        {/* Setting Motor Power */}
                        <Card className="mb-8">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <ArrowRight className="h-5 w-5 text-green-600" />
                                    </div>
                                    <CardTitle className="text-2xl">Setting Motor Power</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p>
                                    The following code blocks drive the robot forward for two seconds at a power of 0.2. After that we
                                    want it to strafe to the right. If we set the frontLeft power to 0.2, what would we set the other
                                    values to? Try this out in the app and then come back here to see the answer.
                                </p>

                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <div className="mb-4">
                                        <Image
                                            src="/placeholder.svg?height=400&width=600"
                                            alt="VRS Motor Power Code Blocks Example"
                                            width={600}
                                            height={400}
                                            className="rounded border mx-auto"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-600 text-center">
                                        Example of motor power code blocks for robot movement
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* What Power Should I Use */}
                        <Card className="mb-8">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                        <HelpCircle className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <CardTitle className="text-2xl">What Power Should I Use?</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p>
                                    Often in programming you need to set a value. Sometimes you have the opportunity to define what that
                                    value means before setting it, but often you have to work within the constraints of the existing
                                    software. In this case, the "power" value we "set" for each wheel is determined by the VRS App.
                                </p>

                                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                                    <div className="flex items-start gap-3">
                                        <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-yellow-800">Pro Tip</p>
                                            <p className="text-yellow-700">
                                                The only way you can figure out what the power should be is to experiment. Remember: in most
                                                cases you don't have to use whole numbers only; numbers can be negative, decimals, or both!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* What Now */}
                        <Card className="mb-8">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                                        <Move className="h-5 w-5 text-purple-600" />
                                    </div>
                                    <CardTitle className="text-2xl">What Now?</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p>
                                    Ok so we've successfully set the power of motors, now what? Well, if we simply wanted a robot that
                                    rams things at high speed, we are done. Most of the time, though, we want our robots to behave a bit
                                    more deliberately, so we need to introduce some more commands so our robot will move forward AND
                                    backward AND forward again (as many times for as far a distance as we want).
                                </p>

                                <p>
                                    Now that you understand how to stack code blocks to make the virtual robot move, you can make it go
                                    forward and backwards. Try it yourself in the app, then return here to see the way we did it.
                                </p>
                            </CardContent>
                        </Card>

                        {/* What Causes a Turn */}
                        <Card className="mb-8">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                        <RotateCw className="h-5 w-5 text-orange-600" />
                                    </div>
                                    <CardTitle className="text-2xl">What Causes a Turn?</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p>
                                    Turning is easy if you're driving a car– you just turn the wheel and the wheels (connected by the
                                    steering axle and some gears) turn to point in the direction you want the car to go. Turning the
                                    virtual robot is… not so straightforward.
                                </p>

                                <p>
                                    Try to imagine how you might turn the robot, then match the words in this quiz to complete the idea
                                    correctly.
                                </p>

                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <p className="font-medium text-blue-800 mb-2">Think About It:</p>
                                    <p className="text-blue-700">
                                        You can control the strength of the turn, also known as the turn radius, by adjusting the strength
                                        of these values. Which of the following would execute the tightest (smallest radius) turn?
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* What is Strafing */}
                        <Card className="mb-8">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                                        <ArrowLeft className="h-5 w-5 text-teal-600" />
                                    </div>
                                    <CardTitle className="text-2xl">What is Strafing?</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p>
                                    A "strafe" maneuver might be familiar to you if you've ever played a First Person Shooter-style video
                                    game. Your character typically moves forward and backward using the left thumbstick up and down
                                    directions (or W and S on a keyboard), and looks around using the right thumbstick (or the mouse if
                                    you're using a mouse). Your character "strafes" when using left and right on a thumbstick (or A and D
                                    on a keyboard). It's just another way of saying "move side to side without turning".
                                </p>

                                <p>
                                    The robot (both real and virtual) uses special wheels that allow it to strafe when all four turn in
                                    the correct direction in relation to each other. Those who want to try and figure it out on their own
                                    should use the app and experiment with different values.
                                </p>
                            </CardContent>
                        </Card>

                        {/* How to Learn Java */}
                        <Card className="mb-8">
                            <CardHeader>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                        <Code className="h-5 w-5 text-indigo-600" />
                                    </div>
                                    <CardTitle className="text-2xl">How to Learn Java Using Blocks</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p>
                                    As we learned in the introductory lesson, code blocks are a method for writing code. Just as a
                                    programming language like Java provides programmers a way to write machine code in a more
                                    understandable way, code blocks provide a way to write Java in a more understandable way. It is not
                                    necessary to learn Java– coding blocks are a completely viable method for controlling the robot, but
                                    for those who are interested in learning Java for its power and versatility, code blocks are an
                                    excellent learning tool.
                                </p>

                                <div className="bg-indigo-50 p-4 rounded-lg">
                                    <p className="font-medium text-indigo-800 mb-2">Advanced Tip:</p>
                                    <p className="text-indigo-700">
                                        The VRS app allows you to switch back and forth between blocks and Java at the click of a button.
                                        This enables you to see the Java code you have created using the blocks, and understand its syntax.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready for More?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Now that you understand motor power basics, explore more tutorials to master VRS programming.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
                                <Link href="/tutorials">Browse All Tutorials</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/quickstart">VRS Quickstart Guide</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
