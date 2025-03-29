import Image from "next/image"
import { Mail, MapPin, Phone, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// This ensures the page is statically generated at build time
export const dynamic = "force-static"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-blue-900 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="container mx-auto px-4 py-12 mt-10px">
      {/* Hero Section */}
      <section className="mb-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 text-stone-50">About BlogSpace</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          BlogSpace is a platform dedicated to sharing knowledge, inspiring creativity, and fostering meaningful
          discussions across various topics including technology, culture, and personal development.
        </p>
      </section>

      {/* Company Story */}
      <section className="mb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight mb-6 text-stone-50">Our Mission</h2>
          <p className="text-muted-foreground mb-4">
            We believe in the power of ideas and their ability to shape our world. Our mission is to create a space
            where thought leaders, creators, and curious minds can come together to share their insights and learn from
            one another.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="Our mission"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Values */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-stone-50">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Quality Content",
              description: "We prioritize well-researched, thoughtful articles that provide real value.",
            },
            {
              title: "Diverse Perspectives",
              description: "We welcome voices from all backgrounds and experiences.",
            },
            {
              title: "Community Focus",
              description: "We foster meaningful discussions and connections.",
            },
            {
              title: "Continuous Learning",
              description: "We encourage lifelong learning and personal growth.",
            },
          ].map((value, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-stone-50">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Oussama Ait Ameur",
              role: "Front-end Developer & Designer",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Nossayba Abbara",
              role: "Front-end Developer",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Ashraf Jabari",
              role: "Back-end Developer",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Mouad Khnouch",
              role: "Back-end Developer",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Asaad Sbaihi",
              role: "Front-end Developer",
              image: "/placeholder.svg?height=400&width=400",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info - Static Version */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-stone-50">Get In Touch</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Mail className="h-6 w-6" />,
              title: "Email",
              details: "geegs@company.com",
              link: "mailto:geegs@company.com",
            },
            {
              icon: <Phone className="h-6 w-6" />,
              title: "Phone",
              details: "+212 123-4567",
              link: "tel:+212123456",
            },
            {
              icon: <MapPin className="h-6 w-6" />,
              title: "Location",
              details: "GeksInstitude,Technopark Casablanca",
              // Using a static Google Maps link instead of coordinates
              link: "https://maps.google.com/?q=33.5429,-7.6402",
            },
            {
              icon: <Clock className="h-6 w-6" />,
              title: "Hours",
              details: "Monday-Friday: 9AM-5PM",
              link: null,
            },
          ].map((item, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-muted-foreground hover:text-primary">
                    {item.details}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{item.details}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA - Static Version */}
      <section className="text-center bg-muted p-12 rounded-lg">
        <h2 className="text-3xl font-bold tracking-tight mb-6" text-stone-50>Join Our Community</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Connect with like-minded individuals and be part of our growing community.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button size="lg" asChild>
            <a href="mailto:geegs@company.com" text-stone-50>Contact Us</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://twitter.com/blogspace" target="_blank" rel="noopener noreferrer">
              Follow Us
            </a>
          </Button>
        </div>
      </section>
    </div>
    </div>
    </div>
  )
}

