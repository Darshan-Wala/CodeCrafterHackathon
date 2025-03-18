"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion"
import { ArrowRight, CheckCircle2, CreditCard, DollarSign, Globe, LineChart, Lock, Zap } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Footer from "./Footer"

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const controls = useAnimation()
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: false })
  const { scrollYProgress } = useScroll()

  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (heroInView) {
      controls.start("visible")
    }
  }, [controls, heroInView])

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
          }`}
      >
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary">
              <DollarSign className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">InvestEase</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              Testimonials
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              Log In
            </Button>
            <Button size="sm">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 overflow-hidden"
      >
        <motion.div
          style={{ y: translateY, opacity }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
        </motion.div>

        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-4"
            >
              <Badge className="w-fit" variant="outline">
                Revolutionizing Investments
              </Badge>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                Fast, Secure, <span className="text-primary">Seamless</span> Transactions
              </motion.h1>
              <motion.p
                className="text-muted-foreground text-lg md:text-xl max-w-[600px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                Experience lightning-fast payments, robust security, and a user-friendly interface designed for modern businesses and individuals.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                <Button size="lg" className="group">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  See How It Works
                </Button>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.7 }}
              >
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="relative lg:ml-auto"
            >
              <div className="relative w-full max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-2xl -z-10" />
                <div className="bg-card border rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Payment Dashboard</p>
                          <p className="text-sm text-muted-foreground">Secure & Fast</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                        Live
                      </Badge>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">Recent Transaction</p>
                          <p className="text-sm text-muted-foreground">Today, 2:45 PM</p>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                              <Globe className="w-4 h-4 text-blue-500" />
                            </div>
                            <div>
                              <p className="font-medium">Global Transfer</p>
                              <p className="text-xs text-muted-foreground">ID: #TRX-7829</p>
                            </div>
                          </div>
                          <p className="font-medium">₹1,250.00</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium">Quick Transfer</p>
                        <div className="grid grid-cols-2 gap-3">
                          <Input placeholder="Amount" type="number" />
                          <Button>Send Now</Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <p className="text-sm font-medium">Transaction Stats</p>
                        <div className="grid grid-cols-2 gap-3">
                          <div className="p-3 bg-muted/50 rounded-lg">
                            <p className="text-xs text-muted-foreground">This Month</p>
                            <p className="text-lg font-bold">₹24,500</p>
                            <div className="flex items-center gap-1 text-xs text-green-500">
                              <ArrowRight className="w-3 h-3 rotate-45" />
                              <span>+12.5%</span>
                            </div>
                          </div>
                          <div className="p-3 bg-muted/50 rounded-lg">
                            <p className="text-xs text-muted-foreground">Pending</p>
                            <p className="text-lg font-bold">₹4,320</p>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <span>3 transactions</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="h-[100px] px-6">
                    <div className="h-full w-full bg-muted/30 rounded-lg flex items-center justify-center">
                      <LineChart className="w-full h-12 text-primary/50" />
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-card shadow-lg rounded-lg p-3 border"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Payment Successful</p>
                      <p className="text-xs text-muted-foreground"> ₹2,500 transferred</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-card shadow-lg rounded-lg p-3 border"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
                      <Lock className="w-4 h-4 text-blue-500" />
                    </div>
                    <p className="text-sm font-medium">Bank-grade Security</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Section */}

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <Badge className="mb-4">Features</Badge>
            <motion.h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Everything You Need for Seamless Transactions
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Our platform combines speed, security, and simplicity to provide the best transaction experience for businesses and individuals alike.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-5 h-5" />,
                title: "Lightning Fast",
                description: "Process transactions in seconds, not minutes or hours. Our optimized infrastructure ensures minimal waiting times."
              },
              {
                icon: <Lock className="w-5 h-5" />,
                title: "Bank-Grade Security",
                description: "End-to-end encryption and advanced fraud detection systems keep your money and data safe at all times."
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: "Global Reach",
                description: "Send and receive money from anywhere in the world with competitive exchange rates and low fees."
              },
              {
                icon: <CreditCard className="w-5 h-5" />,
                title: "Multiple Payment Methods",
                description: "Support for credit cards, bank transfers, digital wallets, and more to accommodate all your needs."
              },
              {
                icon: <LineChart className="w-5 h-5" />,
                title: "Detailed Analytics",
                description: "Track your transaction history, analyze spending patterns, and gain valuable insights into your finances."
              },
              {
                icon: <CheckCircle2 className="w-5 h-5" />,
                title: "Easy Integration",
                description: "Simple API integration with your existing systems, websites, or apps with comprehensive documentation."
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <Badge className="mb-4">How It Works</Badge>
            <motion.h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Simple Process, Powerful Results
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Get started in minutes and experience the future of transactions with our streamlined process.
            </motion.p>
          </div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted hidden md:block" />

            <div className="space-y-12 relative">
              {[
                {
                  step: "1",
                  title: "Sign Up & Secure Login",
                  description: "Create an account effortlessly with your email and secure authentication. Your investment data stays protected with encryption and multi-factor authentication."
                },
                {
                  step: "2",
                  title: "Explore Investment Opportunities",
                  description: "Get AI-driven investment suggestions based on market trends, risk tolerance, and financial goals. View detailed insights before making a decision."
                },
                {
                  step: "3",
                  title: "Predict Profits & Stock Performance",
                  description: "Use advanced analytics and machine learning models to estimate potential profits, forecast stock trends, and optimize investment strategies."
                },
                {
                  step: "4",
                  title: "Buy, Sell & Manage Assets",
                  description: "Trade stocks, bonds, and insurance policies with ease. Track your portfolio in real-time and manage account balances efficiently."
                },
                {
                  step: "5",
                  title: "Track & Optimize Profits",
                  description: "Monitor asset performance, receive personalized recommendations, and make data-driven decisions to maximize returns."
                }
              ]
                .map((item, i) => (
                  <motion.div
                    key={item.step}
                    className={`md:grid md:grid-cols-2 md:gap-8 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2, duration: 0.7 }}
                  >
                    <div className="mb-6 md:mb-0">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl blur-xl opacity-70" />
                        <div className="relative bg-card border rounded-xl shadow-lg p-6 h-full">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold">
                              {item.step}
                            </div>
                            <h3 className="text-xl font-bold">{item.title}</h3>
                          </div>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="bg-muted rounded-xl overflow-hidden h-[250px] flex items-center justify-center">
                        <div className="text-4xl text-muted-foreground/30 font-bold">
                          Step {item.step} Image
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "99.9%", label: "Uptime" },
              { value: "5M+", label: "Users Worldwide" },
              { value: "$2B+", label: "Processed Monthly" },
              { value: "150+", label: "Countries Supported" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <Badge className="mb-4">Testimonials</Badge>
            <motion.h2
              className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our Customers Say
            </motion.h2>
            <motion.p
              className="text-muted-foreground text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Don’t just take our word for it. Here’s what businesses and individuals have to say about our platform.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                "quote": "InvestEase has made stock market investments effortless. The real-time insights and expert recommendations helped me grow my portfolio significantly.",
                "author": "Amit Sharma",
                "role": "CFO, BharatTech Solutions"
              },
              {
                "quote": "As an entrepreneur, I wanted to diversify my wealth beyond business earnings. InvestEase’s bonds and insurance options gave me financial security with minimal risk.",
                "author": "Neha Patel",
                "role": "Founder, EthnicWeaves"
              },
              {
                "quote": "The detailed analytics from InvestEase allowed us to optimize our corporate investments. Our returns have increased, and risk is well-managed thanks to their expert guidance.",
                "author": "Rohan Iyer",
                "role": "Finance Head, QuickMart India"
              },
              {
                "quote": "Investing in global markets seemed complex, but InvestEase made it simple. Their platform provides easy access to foreign stocks while keeping transaction fees low.",
                "author": "Priya Menon",
                "role": "Freelance Consultant"
              },
              {
                "quote": "Managing my investments on the go has never been easier! The InvestEase app gives me full control over my stock and bond portfolios with seamless execution.",
                "author": "Vikas Reddy",
                "role": "Owner, FreshBites Café"
              },
              {
                "quote": "We integrated InvestEase’s investment API into our platform within hours. The automation tools and financial models have helped our users make smarter investment decisions.",
                "author": "Anjali Verma",
                "role": "CTO, CloudSync Technologies"
              }
            ]

              .map((testimonial, i) => (
                <motion.div
                  key={testimonial.author}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className="text-yellow-500">★</span>
                        ))}
                      </div>
                      <p className="mb-4 italic">"{testimonial.quote}"</p>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
      <Footer />


    </div>
  )
}