"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Download, Play, Settings, Code, Gamepad2, BookOpen } from "lucide-react"

const steps = [
    {
        id: 1,
        title: "Download and Install VRS",
        icon: Download,
        content: "downloadInstall",
    },
    {
        id: 2,
        title: "Create an OpMode",
        icon: Code,
        content: "createOpMode",
    },
    {
        id: 3,
        title: "Understanding Blocks",
        icon: Settings,
        content: "understandingBlocks",
    },
    {
        id: 4,
        title: "Running Code",
        icon: Play,
        content: "runningCode",
    },
    {
        id: 5,
        title: "Writing Custom Code",
        icon: Code,
        content: "writingCode",
    },
    {
        id: 6,
        title: "TeleOp Mode",
        icon: Gamepad2,
        content: "teleOp",
    },
    {
        id: 7,
        title: "Resources",
        icon: BookOpen,
        content: "resources",
    },
]

export function QuickstartContent() {
    const [currentStep, setCurrentStep] = useState(1)

    const nextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1)
        }
    }

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const currentStepData = steps.find((step) => step.id === currentStep)

    return (
        <div className="py-8">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">VRS Quickstart</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Virtual Robot Simulator is a simple, easy-to-use platform that allows FTC teams to program and test their
                        robots without access to physical hardware. Learn how to use VRS with this quickstart!
                    </p>
                </div>
            </section>

            <div className="container py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Step Navigation Sidebar */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-8">
                            <CardHeader>
                                <CardTitle className="text-lg">Tutorial Steps</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {steps.map((step) => {
                                    const Icon = step.icon
                                    return (
                                        <button
                                            key={step.id}
                                            onClick={() => setCurrentStep(step.id)}
                                            className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                                                currentStep === step.id ? "bg-teal-500 text-white" : "hover:bg-gray-100"
                                            }`}
                                        >
                                            <Icon className="h-5 w-5" />
                                            <div>
                                                <div className="font-medium">Step {step.id}</div>
                                                <div className="text-sm opacity-75">{step.title}</div>
                                            </div>
                                        </button>
                                    )
                                })}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <Card>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        {currentStepData && <currentStepData.icon className="h-6 w-6 text-teal-500" />}
                                        <div>
                                            <Badge variant="secondary">
                                                Step {currentStep} of {steps.length}
                                            </Badge>
                                            <h2 className="text-2xl font-bold mt-1">{currentStepData?.title}</h2>
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="prose prose-lg max-w-none">
                                <StepContent step={currentStep} />
                            </CardContent>
                        </Card>

                        {/* Navigation Buttons */}
                        <div className="flex justify-between mt-6">
                            <Button
                                onClick={prevStep}
                                disabled={currentStep === 1}
                                variant="outline"
                                className="flex items-center gap-2"
                            >
                                <ChevronLeft className="h-4 w-4" />
                                Previous Step
                            </Button>
                            <Button
                                onClick={nextStep}
                                disabled={currentStep === steps.length}
                                className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600"
                            >
                                Next Step
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function StepContent({ step }: { step: number }) {
    switch (step) {
        case 1:
            return (
                <div className="space-y-6">
                    <p>There are two ways to install VRS. We recommend option 1 for beginners, or those not on Windows.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg text-teal-600">Option 1 - Web Browser</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">Go to this link on any browser:</p>
                                <Button asChild className="w-full">
                                    <Link href="https://www.vrobotsim.online/homepage.html" target="_blank">
                                        Open VRS in Browser
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg text-blue-600">Option 2 - Native Binary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4">Download Windows installer:</p>
                                <ol className="list-decimal list-inside space-y-2 text-sm">
                                    <li>Unzip the download file: VRS-Windows-installer.exe</li>
                                    <li>Open folder with the extracted file: VRS-win32-x64-installer</li>
                                    <li>Double Click on the VRS Installer.exe</li>
                                </ol>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-800">
                            <strong>Need more help?</strong>{" "}
                            <Link
                                href="https://docs.google.com/document/d/1K6dHp1Nb0jKvLbfPC3fGE_Cy1A7AQsL_JuaY28RKl0Y/edit"
                                className="underline"
                                target="_blank"
                            >
                                Learn more on how to install VRS
                            </Link>
                        </p>
                    </div>
                </div>
            )

        case 2:
            return (
                <div className="space-y-6">
                    <p>
                        <strong>We are going to create an autonomous OpMode, but the same concept applies for teleOp.</strong>
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">What is an OpMode?</h3>
                        <p>
                            An OpMode is analogous to a Java class. It is a file that contains all your code and methods. There is a
                            runOpMode method which contains the blocks that run when you press the run button.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">TeleOp</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>When the robot drives based on gamepad input from a human driver.</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Autonomous</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>When the robot navigates independently, without driver control.</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="bg-teal-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">How do I create an OpMode?</h3>
                        <p>
                            When you click on autonomous or teleOp from the main menu, you will be transported into the interface with
                            an opMode auto-generated. The code in the opMode is in the blocks editor on the left. To save your OpMode,
                            click the "Save As" button above the blocks editor. Enter the name of your OpMode, making sure you pick a
                            clear, descriptive name. To load a saved opMode, click the Load Program button to the right of the Save
                            As.
                        </p>
                    </div>
                </div>
            )

        case 3:
            return (
                <div className="space-y-6">
                    <p>
                        You'll see some auto-generated code in the blocks editor. This is mostly just the declarations that are
                        needed to run the code properly.
                    </p>

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">How does code in VRS work?</h3>
                        <p>
                            VRS supports making methods, and variables just like FTC blocks. Such advanced concepts will be addressed
                            later. For now, look at the auto-generated block of code and notice the blue if-do block. Inside it are
                            some orange blocks that set motor power. All of your code will go inside this if block, as it is what the
                            simulator runs.
                        </p>
                    </div>

                    <h3 className="text-xl font-semibold">Looking at the default code</h3>
                    <p>
                        The default code shows some of the most critical blocks for the simulator. Let's look through what each of
                        them mean:
                    </p>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">1. Set Power</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-4">
                                    <Image
                                        src="/placeholder.svg?height=161&width=259"
                                        alt="Set Power Block"
                                        width={259}
                                        height={161}
                                        className="rounded border"
                                    />
                                </div>
                                <p>
                                    This block is used to make the motors move. Since this motor has four independently driven wheels,
                                    there are four motors, labeled to their respective positions. 1 is the maximum power you can give to a
                                    motor, and you can input any value from 0 to 1 to control its speed (negative values drive it in
                                    reverse). To find this block in the sidebar, click Actuator &gt; DcMotor &gt; setPower.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">2. Telemetry</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-4">
                                    <Image
                                        src="/placeholder.svg?height=337&width=593"
                                        alt="Telemetry Block"
                                        width={593}
                                        height={337}
                                        className="rounded border"
                                    />
                                </div>
                                <p>
                                    Telemetry is used to print text to the telemetry log above the field. The key is the label for the
                                    data, and the text is the value that the label represents. You can add any text here, and every time
                                    telemetry.update() is called, it will print that to the log.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">3. Sleep</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="mb-4">
                                    <Image
                                        src="/placeholder.svg?height=150&width=355"
                                        alt="Sleep Block"
                                        width={355}
                                        height={150}
                                        className="rounded border"
                                    />
                                </div>
                                <p>
                                    Sleep essentially halts the programs for the given number of milliseconds. This however, does not mean
                                    that the robot stops moving. It just means that the program will wait for the given amount of time
                                    before moving on the next line of code. At the very end of your autonomous mode, it is good to add a
                                    30,000 millisecond sleep statement, so that your robot does not do anything unpredictable until the
                                    autonomous period ends.
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <p className="text-gray-600">We will come back to blocks in Step 5.</p>
                </div>
            )

        case 4:
            return (
                <div className="space-y-6">
                    <p>
                        Assuming that we still have the auto-generated code, let's take a look at how to run programs in VRS. By
                        default, VRS will run the code contained in the purple "runOpMode" block. Unless you call other methods
                        there, they will not run.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-800">
                            You can select from 3 different camera angles. See{" "}
                            <Link
                                href="https://docs.google.com/document/d/17-F7AO3lGq9plMAvB0dbxmah_dQkAgnY4C7yzEY91ys/edit?usp=sharing"
                                className="underline"
                                target="_blank"
                            >
                                this document
                            </Link>{" "}
                            for instructions.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3">Run</h3>
                        <p>
                            When running an opMode, you first initialize the program, then run it. Initialization is when basic reset
                            code runs once, and running is when the movement actually happens. It is no different than a real FTC
                            robot.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <p>Above the telemetry console, you will see an Initialize Program button.</p>

                        <div className="mb-4">
                            <Image
                                src="/placeholder.svg?height=113&width=658"
                                alt="Initialize Program Button"
                                width={658}
                                height={113}
                                className="rounded border"
                            />
                        </div>

                        <p>
                            Click it, and you will see two buttons appear, one saying Start program and one saying Stop Program. Press
                            start program to run. Your robot should move forward.
                        </p>

                        <div className="mb-4">
                            <Image
                                src="/placeholder.svg?height=97&width=717"
                                alt="Start and Stop Program Buttons"
                                width={717}
                                height={97}
                                className="rounded border"
                            />
                        </div>

                        <p>
                            At the same time, the timer on the field will start running. Your code should auto-cutoff when the timer
                            ends.
                        </p>
                    </div>
                </div>
            )

        case 5:
            return (
                <div className="space-y-6">
                    <p>
                        Alright, now that we are familiar with the interface, let's start writing our code. We are going to write a
                        simple program here that will teach you the basic blocks.
                    </p>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Motor Power</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">
                                We went over what power values mean for motors in Step 3. Now, let's find where the blocks are, and
                                tools to help us.
                            </p>

                            <p className="mb-4">
                                You can find the blocks by going to Actuators &gt; DcMotor. You will notice that under DcMotor, three
                                options appear: Dual, Quad and Extended. For now, only look at Dual and Quad. Often times, you want to
                                set all the drive motors at once. Rather than getting 4 separate setPower blocks, get one quad and set
                                all the powers in there.
                            </p>

                            <div className="mb-4">
                                <Image
                                    src="/placeholder.svg?height=258&width=239"
                                    alt="Motor Power Block Options"
                                    width={239}
                                    height={258}
                                    className="rounded border"
                                />
                            </div>

                            <p>
                                Click on Quad and drag the block that sets all the motor powers to one. Place it under the call
                                program.sleep block. If you run the program now, you will see that nothing happens. This is because the
                                program is terminating immediately as it hits those blocks. To prevent this, add a sleep block. Copy and
                                paste the one from above, and you will see that the power is set for 1000 milliseconds. Change the
                                values in the power block to see how it makes the drivetrain move. You can change the value of the sleep
                                to make it go for longer.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Loops</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Loops are used to make a bit of code run a certain number of times.</p>
                            <p>You can find loops in the loops section of the blocks menu.</p>
                        </CardContent>
                    </Card>

                    <div className="bg-teal-50 p-4 rounded-lg">
                        <p className="text-teal-800">
                            This was a brief intro of critical blocks in VRS. To find out more, check out the resources in the next
                            Step
                        </p>
                    </div>
                </div>
            )

        case 6:
            return (
                <div className="space-y-6">
                    <p>
                        Now that we have seen autonomous, let's take a look at TeleOp. TeleOp is the driver controlled part of the
                        FTC game. Unlike autonomous, TeleOp is pre-programmed. All you have to do is plug in a controller into your
                        computer and play. VRS provides a great way to practice driving. You will need an FTC legal controller to
                        use teleOp. If you don't have one, skip this step. Let's take a look.
                    </p>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Enter TeleOp</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">
                                If you are still in autonomous, click the back button at the top left. Click teleOp in the main menu,
                                and now you will be asked to select singleplayer or multiplayer. Multiplayer creates a lobby for
                                multiple people to play over the internet. For now, let's go into single player. You will see a green
                                play button on the top left. Press it to start the game. As long as your controller is plugged in, VRS
                                should auto detect the controller and immediately take input.
                            </p>

                            <p>
                                For a list of keybinds, see{" "}
                                <Link
                                    href="https://docs.google.com/document/d/1k1EN67Y9Ww1DaHqllA4GHJpjQtDdj8IAaD3ey0smQGM/edit"
                                    className="text-teal-600 underline"
                                    target="_blank"
                                >
                                    this document
                                </Link>
                                .
                            </p>
                        </CardContent>
                    </Card>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="text-yellow-800">
                            <strong>Note:</strong> You will need an FTC legal controller to use TeleOp mode. If you don't have one,
                            you can skip this step and focus on autonomous programming.
                        </p>
                    </div>
                </div>
            )

        case 7:
            return (
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Additional Resources</h3>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <BookOpen className="h-5 w-5" />
                                Complete YouTube Playlist
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Button asChild>
                                <Link href="https://www.youtube.com/playlist?list=PLxI7uZGJLHxK_siDGFl_fB58h49ApWDYK" target="_blank">
                                    Watch Video Tutorials
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">VRS Blocks Tutorials</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Link
                                    href="https://docs.google.com/document/d/1ZkqjMAl8dqTuTT4OKosGeceM7MiQBmaLcQ7XolRF25o/edit?usp=sharing"
                                    className="block text-teal-600 hover:underline text-sm"
                                    target="_blank"
                                >
                                    VRS Blocks 2 motors Forward Turn angle
                                </Link>
                                <Link
                                    href="https://docs.google.com/document/d/1IAvzUn23Ax-oRmh11KVv8yvOo3sTuQygBNJyoyta1vQ/edit?usp=sharing"
                                    className="block text-teal-600 hover:underline text-sm"
                                    target="_blank"
                                >
                                    Drive forward back with four Motors
                                </Link>
                                <Link
                                    href="https://docs.google.com/document/d/1bFlLYTuFsCKLcb3p3e7MhMKy2x9CjVVoozyCzZq61Zg/edit?usp=sharing"
                                    className="block text-teal-600 hover:underline text-sm"
                                    target="_blank"
                                >
                                    Drive forward back with two Motors
                                </Link>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-base">Advanced Tutorials</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <Link
                                    href="https://docs.google.com/document/d/1wFTtGnHZVt_jbIzawBPYLXIcvIeS2J3S8n2ki_-vNnU/edit?usp=sharing"
                                    className="block text-teal-600 hover:underline text-sm"
                                    target="_blank"
                                >
                                    Drive forward with time changes
                                </Link>
                                <Link
                                    href="https://docs.google.com/document/d/1SLwEIN4tXZKRpZaggtwNhCf-H8-lw77PRM8JxJVua54/edit?usp=sharing"
                                    className="block text-teal-600 hover:underline text-sm"
                                    target="_blank"
                                >
                                    Strafe right to left
                                </Link>
                                <Link
                                    href="https://docs.google.com/document/d/1qyMLdTbaglHqCvMdCGO4tdR5XKaXxe3GZsgZjfrI2AQ/edit?usp=sharing"
                                    className="block text-teal-600 hover:underline text-sm"
                                    target="_blank"
                                >
                                    Strafe in a square
                                </Link>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Programming Fundamentals</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <Link
                                href="https://docs.google.com/document/d/19tdMNceWbD6h0oggXBz4pDdg6Lrput0DTbEDVQi5Z4U/edit?pli=1"
                                className="block text-teal-600 hover:underline text-sm"
                                target="_blank"
                            >
                                Programming 101: Syntax Lesson
                            </Link>
                            <Link
                                href="https://docs.google.com/presentation/d/1jH75EDNpfXIES9y6s-9uwQDLfgZ4hljr6f1593DmLm4/edit?usp=sharing"
                                className="block text-teal-600 hover:underline text-sm"
                                target="_blank"
                            >
                                Google slide showing how you can teach {} vs ()
                            </Link>
                            <Link
                                href="https://docs.google.com/presentation/d/115e3IF70p8jSuG_zHzuzC-ZmrKqBX__ULlL1Y4tTHjM/edit?usp=sharing"
                                className="block text-teal-600 hover:underline text-sm"
                                target="_blank"
                            >
                                Lessons parentheses
                            </Link>
                        </CardContent>
                    </Card>

                    <div className="bg-green-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-3 text-green-800">Congratulations! 🎉</h3>
                        <p className="text-green-700">
                            You've completed the VRS Quickstart tutorial! You now have the basic knowledge to start programming robots
                            in the Virtual Robot Simulator. Continue exploring with the resources above and start building your own
                            autonomous and TeleOp programs.
                        </p>
                    </div>
                </div>
            )

        default:
            return <div>Step not found</div>
    }
}
