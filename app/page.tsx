"use client"

import { useState } from "react"
import Link from "next/link"
import { OptimizedImage } from "@/components/optimized-image"
import { ArrowRight, X, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [isChatExpanded, setIsChatExpanded] = useState(false)

  const toggleChat = () => {
    setIsChatExpanded(!isChatExpanded)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0">
          <OptimizedImage
            src="/images/taj-mahal-quartzite-island-brookline.webp"
            alt="Luxury kitchen with marble countertops"
            width={1920}
            height={1080}
            className="object-cover"
            priority
            style={{ width: "100%", height: "100%" }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative flex h-full items-center">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="max-w-4xl text-white">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl sm:whitespace-nowrap whitespace-normal">
                Countertops You'll Love - Our Promise
              </h1>
              <p className="mt-6 text-base leading-7 font-medium sm:text-lg sm:leading-8 lg:text-xl">
                30 years of experience. Thousands of happy clients. Now it's your turn.
              </p>
              <div className="mt-10">
                {/* Compact Chat Widget */}
                {!isChatExpanded && (
                  <div
                    className="bg-white/95 backdrop-blur-sm rounded-lg p-2 max-w-xs shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
                    onClick={toggleChat}
                  >
                    <div className="flex items-center gap-1 mb-2">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.126-.98L3 20l1.98-5.874A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm">Ask Our AI Assistant</h3>
                        <p className="text-xs text-gray-600">Get instant answers</p>
                      </div>
                      <Maximize2 className="w-4 h-4 text-gray-400" />
                    </div>

                    <div className="border border-gray-200 rounded-lg bg-gray-50 p-3">
                      <p className="text-xs text-gray-600 text-center">Click to start chatting</p>
                    </div>

                    <div className="mt-1 text-center">
                      <p className="text-xs text-gray-500">Powered by AI</p>
                    </div>
                  </div>
                )}

                {/* Expanded Chat Widget */}
                {isChatExpanded && (
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl max-w-md w-full">
                    <div className="flex items-center justify-between p-3 border-b border-gray-200">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.955 8.955 0 01-4.126-.98L3 20l1.98-5.874A8.955 8.955 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Stone Concepts AI Assistant</h3>
                          <p className="text-xs text-gray-600">Ask about materials, pricing, and more</p>
                        </div>
                      </div>
                      <button onClick={toggleChat} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                        <X className="w-5 h-5 text-gray-500" />
                      </button>
                    </div>

                    {/* Expanded Chatbase Widget */}
                    <div className="border-0">
                      <iframe
                        src="https://www.chatbase.co/chatbot-iframe/kSFh3kbZcIV_MBM3YWMTf"
                        width="100%"
                        height="400"
                        frameBorder="0"
                        className="rounded-b-lg"
                        title="Stone Concepts AI Assistant"
                        loading="lazy"
                      ></iframe>
                    </div>

                    <div className="p-2 text-center border-t border-gray-200">
                      <p className="text-xs text-gray-500">Powered by AI • Get instant answers</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Story Section */}
      <section style={{ padding: "60px 20px", backgroundColor: "#f9fafa" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Replace prose with explicit spacing */}
            <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
              {/* Headline */}
              <h2
                className="responsive-headline"
                style={{
                  fontSize: "clamp(1.25rem, 5vw, 2rem)",
                  fontWeight: 700,
                  marginBottom: "0.5em",
                  marginLeft: "0",
                  marginRight: "0",
                  whiteSpace: "normal",
                  lineHeight: 1.3,
                  textAlign: "center",
                  padding: "0 10px",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                What If You Never Had to Feel This Confused?
              </h2>
              {/* Image */}
              <div style={{ textAlign: "center", marginBottom: "2em", display: "flex", justifyContent: "center" }}>
                <OptimizedImage
                  src="/images/countertop-customer.webp"
                  alt="Confused customer overwhelmed by too many stone options in showroom"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                  style={{ maxWidth: "100%", height: "auto" }}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              {/* Story */}
              <p>
                <strong>
                  You've been dreaming of your new kitchen for months. This should feel exciting, not terrifying.
                </strong>
              </p>
              <p>But here you are — overwhelmed, confused, and expected to make a $10,000 decision.</p>
              <p style={{ marginTop: "2em" }}>
                <strong>There's a better way.</strong>
              </p>

              <p style={{ marginTop: "1.5em" }}>What if you could:</p>
              <ul style={{ lineHeight: 1.8, marginLeft: "1em" }}>
                <li>Sit comfortably in your own home</li>
                <li>See your kitchen with different stone options</li>
                <li>Know where seams will fall</li>
                <li>Get advice without sales pressure</li>
                <li>Feel confident in your choice</li>
              </ul>

              <p style={{ marginTop: "1.5em" }}>
                <strong>Stone Concepts provides - </strong>
              </p>
              <p>
                A countertop preview that eliminates confusion. You'll see your kitchen come to life before we fabricate
                anything.
              </p>
              <p style={{ marginTop: "1.5em" }}>
                <strong>You deserve certainty, not chaos.</strong>
              </p>

              {/* Bottom CTA */}
              <h3 style={{ marginTop: "2em", fontWeight: 600 }}>Avoid mistakes and guesswork</h3>
              <p>Let's walk through your options — together.</p>

              <div style={{ backgroundColor: "#e6ffec", padding: "20px", borderRadius: "6px", marginTop: "20px" }}>
                <strong>✔️ Request a Free Quote Today</strong>
                <br />
                <Link
                  href="/contact"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    backgroundColor: "#1a73e8",
                    color: "#fff",
                    padding: "12px 24px",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    textDecoration: "none",
                  }}
                >
                  Get My Free Quote
                </Link>
                <p style={{ fontSize: "0.9rem", color: "#555", marginTop: "0.5em" }}>
                  We'll help you compare materials, estimate costs, and find the perfect slab — all with expert guidance
                  and zero pressure.
                  <br />
                  <strong>Spots are limited — hold your quote today.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              What It's Like to Work With Stone Concepts
            </h2>
            <p className="text-lg italic text-gray-600 text-center mt-4">Real clients. Real results.</p>

            <div className="mt-16 space-y-8">
              <blockquote className="border-l-4 border-gray-300 pl-6 text-lg italic text-gray-700">
                <p>"Bill helped me through the most overwhelming part — picking the stone."</p>
                <p>He knew what I needed even before I did."</p>
                <footer className="mt-2 text-sm font-medium text-gray-500">— Tiziana</footer>
              </blockquote>

              <blockquote className="border-l-4 border-gray-300 pl-6 text-lg italic text-gray-700">
                <p>"The workmanship was flawless. The step-by-step support?"</p>
                <p>Better than any vendor we contacted."</p>
                <footer className="mt-2 text-sm font-medium text-gray-500">— C. Caunt</footer>
              </blockquote>

              <blockquote className="border-l-4 border-gray-300 pl-6 text-lg italic text-gray-700">
                <p>"I didn't want to put anything on my new counters — they're that stunning."</p>
                <p>And they saved me 30% over my local quotes."</p>
                <footer className="mt-2 text-sm font-medium text-gray-500">— Fran O., Barre, VT</footer>
              </blockquote>

              <blockquote className="border-l-4 border-gray-300 pl-6 text-lg italic text-gray-700">
                <p>"Bill helped us understand what fit our budget and walked us through the whole process."</p>
                <p>It couldn't have been smoother."</p>
                <footer className="mt-2 text-sm font-medium text-gray-500">— Jenna S.</footer>
              </blockquote>
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl font-bold text-gray-800 mb-6">Want your story to be this good?</p>
              <p className="text-lg text-gray-600 mb-8">
                Let's make your countertop experience simple, beautiful, and stress-free.
              </p>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 inline-block">
                <div className="flex items-center space-x-3">
                  <div className="text-green-600 text-xl">✅</div>
                  <Button asChild size="lg" className="group">
                    <Link href="/contact">
                      Get a Personalized Quote
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to transform your space?</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Contact us today to schedule a consultation and get started on your custom countertop project.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
        width="600"
        height="450"
        style={{border:0}}
        className="!w-[100%]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allow="fullscreen"
        >
      </iframe>
    </div>
  )
}
