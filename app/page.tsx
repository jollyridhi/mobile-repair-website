import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Battery, Smartphone, Zap, Volume2, Droplets, Instagram, Linkedin, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Smartphone className="h-6 w-6 text-blue-600" />
              <span className="hidden font-bold sm:inline-block">Mobile Repair Delhi</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors hover:text-blue-600">
              Home
            </Link>
            <Link href="#services" className="transition-colors hover:text-blue-600">
              Services
            </Link>
            <Link href="#pricing" className="transition-colors hover:text-blue-600">
              Pricing
            </Link>
            <Link href="#contact" className="transition-colors hover:text-blue-600">
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="md:hidden" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
            <Button className="hidden md:flex bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-sm">
              Login
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-20">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Fast, Reliable Mobile Repairs at Your Doorstep in Delhi
              </h1>
              <p className="text-gray-500 md:text-xl">
                Book trusted mobile repair services for screen, battery, and hardware issues. Quick service, genuine
                parts, student-friendly prices!
              </p>
              <Button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-sm text-white px-8 py-6 h-auto text-lg">
                Book a Repair
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-40 overflow-hidden rounded-xl shadow-sm transform rotate-2 transition-transform hover:rotate-0 duration-300 md:h-60">
                <Image src="/placeholder.svg?height=240&width=180" alt="Phone repair" fill className="object-cover" />
              </div>
              <div className="relative h-40 overflow-hidden rounded-xl shadow-sm transform -rotate-2 transition-transform hover:rotate-0 duration-300 md:h-60">
                <Image src="/placeholder.svg?height=240&width=180" alt="Phone repair" fill className="object-cover" />
              </div>
              <div className="relative h-40 overflow-hidden rounded-xl shadow-sm transform -rotate-3 transition-transform hover:rotate-0 duration-300 md:h-60">
                <Image src="/placeholder.svg?height=240&width=180" alt="Phone repair" fill className="object-cover" />
              </div>
              <div className="relative h-40 overflow-hidden rounded-xl shadow-sm transform rotate-3 transition-transform hover:rotate-0 duration-300 md:h-60">
                <Image src="/placeholder.svg?height=240&width=180" alt="Phone repair" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-gray-50 py-12 md:py-20">
          <div className="container">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="mt-4 text-gray-500 md:text-xl max-w-3xl">
                Professional mobile repair services with genuine parts and warranty
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              <ServiceCard
                icon={<Smartphone className="h-10 w-10 text-blue-600" />}
                title="Screen Replacement"
                description="Cracked screen? Get a brand-new display today."
              />
              <ServiceCard
                icon={<Battery className="h-10 w-10 text-blue-600" />}
                title="Battery Replacement"
                description="Battery draining fast? We'll replace it swiftly."
              />
              <ServiceCard
                icon={<Zap className="h-10 w-10 text-blue-600" />}
                title="Charging Port Repair"
                description="Charging issues? Reliable port repair available."
              />
              <ServiceCard
                icon={<Volume2 className="h-10 w-10 text-blue-600" />}
                title="Speaker Repair"
                description="Fix distorted or low-volume speakers easily."
              />
              <ServiceCard
                icon={<Droplets className="h-10 w-10 text-blue-600" />}
                title="Water Damage Repair"
                description="Quick water damage treatment and recovery."
              />
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="container py-12 md:py-20">
          <div className="mx-auto max-w-xl">
            <Card className="border-0 shadow-md rounded-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold">Stay Updated with Offers & Discounts</CardTitle>
                <CardDescription>Subscribe to our newsletter to receive exclusive offers and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-2">
                  <Input type="email" placeholder="Enter your email address" className="rounded-lg border-gray-200" />
                  <Button className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 transition-all duration-200 shadow-sm">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          <p className="text-sm text-gray-500">© 2025 Mobile Repair Delhi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <Card className="overflow-hidden rounded-xl border-0 shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 rounded-full bg-blue-50 p-3">{icon}</div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <p className="text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}
