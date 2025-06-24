"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Play,
    BookOpen,
    Code,
    ExternalLink,
    Youtube,
    FileText,
    Gamepad2,
    Coffee,
    Users,
    GraduationCap,
} from "lucide-react"

const tutorialCategories = [
    {
        id: "getting-started",
        title: "Getting Started",
        description: "Essential tutorials for VRS beginners",
        icon: GraduationCap,
        color: "from-green-500 to-emerald-600",
        tutorials: [
            {
                title: "Beginner Lessons",
                description: "Structured curriculum for new learners",
                type: "document",
                url: "https://docs.google.com/document/d/1TY5vdmRcBj-pouBRHXvKbSxYIFFggRkNfM5WWo6z_ds/edit",
                difficulty: "Beginner",
            },
            {
                title: "Basic Introduction to Programming",
                description: "Learn the fundamentals of programming with VRS",
                type: "video",
                url: "https://youtu.be/HvywykxdrBU",
                difficulty: "Beginner",
            },
            {
                title: "Locating blocks for programming",
                description: "Find and understand programming blocks in VRS",
                type: "video",
                url: "https://youtu.be/gVXmlmTaWiM",
                difficulty: "Beginner",
            },
            {
                title: "How to use basic blocks",
                description: "Master the essential programming blocks",
                type: "video",
                url: "https://youtu.be/39l5_7c1CYY",
                difficulty: "Beginner",
            },
            {
                title: "Saving/loading block programs",
                description: "Learn to save and manage your programs",
                type: "video",
                url: "https://youtu.be/DdL6nSsLaL8",
                difficulty: "Beginner",
            },
            {
                title: "While loops",
                description: "Understanding and using while loops effectively",
                type: "video",
                url: "https://youtu.be/FNvfNwPqAv8",
                difficulty: "Beginner",
            },
        ],
    },
    {
        id: "game-specific",
        title: "Game-Specific Tutorials",
        description: "Tutorials for specific FTC seasons",
        icon: Gamepad2,
        color: "from-blue-500 to-cyan-600",
        tutorials: [
            {
                title: "Ultimate Goal Lessons",
                description: "Complete tutorial series for Ultimate Goal season",
                type: "playlist",
                url: "https://www.youtube.com/watch?v=Xz4f80o_InQ&list=PL2ovNdvJY8L4hOLuiS_t8HypkVU2PS0YP",
                difficulty: "Intermediate",
            },
            {
                title: "How to Use VRS-Centerstage by RTX",
                description: "Learn VRS Centerstage with expert guidance",
                type: "playlist",
                url: "https://www.youtube.com/watch?v=M0IyIFdGIQQ&list=PL2ovNdvJY8L78xf956fv26Spto0EE0F7M",
                difficulty: "Intermediate",
            },
            {
                title: "VRS PowerPlay Skills",
                description: "Master PowerPlay season programming",
                type: "playlist",
                url: "https://www.youtube.com/playlist?list=PL2ovNdvJY8L5WNuoHJfcQWcT9YKrS38fi",
                difficulty: "Intermediate",
            },
        ],
    },
    {
        id: "advanced-programming",
        title: "Advanced Programming",
        description: "Java programming and advanced concepts",
        icon: Code,
        color: "from-purple-500 to-indigo-600",
        tutorials: [
            {
                title: "Using Java with Ultimate Goal",
                description: "Advanced Java programming for FTC robots",
                type: "playlist",
                url: "https://www.youtube.com/playlist?list=PL2ovNdvJY8L7ML31nYGJTAN_WeGd2NjyF",
                difficulty: "Advanced",
            },
            {
                title: "VRS Java Curriculum",
                description: "Comprehensive Java programming course",
                type: "document",
                url: "https://bit.ly/Vrs-Java-Lessons",
                difficulty: "Advanced",
            },
            {
                title: "Sample Java Lesson Code",
                description: "Example code and projects for learning",
                type: "document",
                url: "https://drive.google.com/drive/folders/14IbCm2KGOhO4VE-79L5T8LDd9Dsm0sVa?usp=sharing",
                difficulty: "Advanced",
            },
            {
                title: "Java Code Spreadsheet",
                description: "Reference sheet for Java programming",
                type: "document",
                url: "https://bit.ly/3MLvsAz",
                difficulty: "Advanced",
            },
            {
                title: "Creating Variables/Methods",
                description: "Learn to create custom variables and methods",
                type: "document",
                url: "https://docs.google.com/document/d/1F8igQRS3wf-C6RCM0acAy5g5ECw_caGUC0G17aG7XS0/edit",
                difficulty: "Advanced",
            },
        ],
    },
    {
        id: "specialized-tools",
        title: "Specialized Tools",
        description: "Robot Importer and advanced features",
        icon: Coffee,
        color: "from-orange-500 to-red-600",
        tutorials: [
            {
                title: "Using Robot Importer",
                description: "Import and customize your own robots",
                type: "playlist",
                url: "https://www.youtube.com/playlist?list=PL2ovNdvJY8L7xD1_MVA-qWldRTc-XjRT7",
                difficulty: "Advanced",
            },
            {
                title: "Select Viewport Angle",
                description: "Choose the best camera angle for your needs",
                type: "document",
                url: "https://docs.google.com/document/d/17-F7AO3lGq9plMAvB0dbxmah_dQkAgnY4C7yzEY91ys/edit?usp=sharing",
                difficulty: "Beginner",
            },
        ],
    },
    {
        id: "curriculum",
        title: "Curriculum & Teaching",
        description: "Resources for educators and structured learning",
        icon: Users,
        color: "from-teal-500 to-green-600",
        tutorials: [
            {
                title: "VRS Workshop Teacher Schedule",
                description: "Weekly schedule and guide for teachers",
                type: "document",
                url: "#",
                difficulty: "Teacher",
            },
        ],
    },
]

const featuredPlaylists = [
    {
        title: "Complete YouTube Playlist",
        description: "All VRS tutorials in one comprehensive playlist",
        url: "https://www.youtube.com/playlist?list=PLxI7uZGJLHxK_siDGFl_fB58h49ApWDYK",
        thumbnail: "🎬",
    },
    {
        title: "VRS How To Lessons",
        description: "Step-by-step how-to guides for common tasks",
        url: "https://www.youtube.com/playlist?list=PL2ovNdvJY8L66oDnyKykasj6o5lepJxfE",
        thumbnail: "📚",
    },
]

export function TutorialsContent() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const filteredCategories = tutorialCategories.filter((category) => {
        return !(selectedCategory && category.id !== selectedCategory);

    })

    const getTypeIcon = (type: string) => {
        switch (type) {
            case "video":
                return <Play className="h-4 w-4" />
            case "playlist":
                return <Youtube className="h-4 w-4" />
            case "document":
                return <FileText className="h-4 w-4" />
            default:
                return <BookOpen className="h-4 w-4" />
        }
    }

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Beginner":
                return "bg-green-100 text-green-800"
            case "Intermediate":
                return "bg-yellow-100 text-yellow-800"
            case "Advanced":
                return "bg-red-100 text-red-800"
            case "Teacher":
                return "bg-purple-100 text-purple-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    return (
        <div className="py-8">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 container text-center">VRS Tutorials</h1>
            </section>

            {/* Featured Playlists */}
            <section className="py-16">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Playlists</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {featuredPlaylists.map((playlist, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader className="text-center">
                                    <div className="text-4xl mb-4">{playlist.thumbnail}</div>
                                    <CardTitle className="text-xl">{playlist.title}</CardTitle>
                                    <p className="text-gray-600">{playlist.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                                        <Link href={playlist.url} target="_blank" rel="noopener noreferrer">
                                            <Youtube className="h-4 w-4 mr-2" />
                                            Watch Playlist
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tutorial Categories */}
            <section className="py-16 bg-gray-50">
                <div className="container">
                    <h2 className="text-3xl font-bold text-center mb-8">Tutorial Categories</h2>

                    {/* Category Filter Buttons */}
                    <div className="flex flex-wrap gap-2 justify-center mb-12">
                        <Button
                            variant={selectedCategory === null ? "default" : "outline"}
                            onClick={() => setSelectedCategory(null)}
                            size="sm"
                        >
                            All Categories
                        </Button>
                        {tutorialCategories.map((category) => (
                            <Button
                                key={category.id}
                                variant={selectedCategory === category.id ? "default" : "outline"}
                                onClick={() => setSelectedCategory(category.id)}
                                size="sm"
                            >
                                {category.title}
                            </Button>
                        ))}
                    </div>

                    <div className="space-y-12">
                        {filteredCategories.map((category) => {
                            const Icon = category.icon
                            return (
                                <div key={category.id} className="bg-white rounded-lg shadow-sm p-8">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div
                                            className={`w-12 h-12 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center`}
                                        >
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold">{category.title}</h3>
                                            <p className="text-gray-600">{category.description}</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {category.tutorials.map((tutorial, index) => (
                                            <Card key={index} className="hover:shadow-md transition-shadow">
                                                <CardHeader className="pb-3">
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex items-center gap-2">
                                                            {getTypeIcon(tutorial.type)}
                                                            <Badge variant="secondary" className={getDifficultyColor(tutorial.difficulty)}>
                                                                {tutorial.difficulty}
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                    <CardTitle className="text-lg leading-tight">{tutorial.title}</CardTitle>
                                                </CardHeader>
                                                <CardContent className="pt-0">
                                                    <p className="text-gray-600 text-sm mb-4">{tutorial.description}</p>
                                                    <Button asChild size="sm" className="w-full">
                                                        <Link href={tutorial.url} target="_blank" rel="noopener noreferrer">
                                                            <ExternalLink className="h-4 w-4 mr-2" />
                                                            {tutorial.type === "video"
                                                                ? "Watch"
                                                                : tutorial.type === "playlist"
                                                                    ? "View Playlist"
                                                                    : "Open"}
                                                        </Link>
                                                    </Button>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Getting Help */}
            <section className="py-16">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Need More Help?</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Can&#39;t find what you&#39;re looking for? Check out our quickstart guide or explore additional resources.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600">
                                <Link href="/quickstart">Quickstart Guide</Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/get-vrs">Download VRS</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
