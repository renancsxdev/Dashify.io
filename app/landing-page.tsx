"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import {
  ArrowRight,
  BarChart3,
  Check,
  Globe,
  LayoutDashboard,
  Lightbulb,
  Menu,
  Moon,
  Palette,
  Smartphone,
  Sun,
  Zap,
  Star,
  ChevronRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

import { DashboardPreview } from "@/components/dashboard-preview"
import { AnalyticsPreview } from "@/components/analytics-preview"
import { CustomersPreview } from "@/components/customers-preview"
import { SettingsPreview } from "@/components/settings-preview"

export default function LandingPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [language, setLanguage] = useState<"en" | "pt">("en")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = ""
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en")
  }

  const translations = {
    en: {
      features: "Features",
      preview: "Preview",
      pricing: "Pricing",
      faq: "FAQ",
      getDashify: "Get Dashify",
      heroTitle: "The Ultimate Dashboard Template for Your Next Project",
      heroDescription:
        "Dashify is a premium, fully responsive dashboard template built with Next.js, Tailwind CSS, and shadcn/ui. Save weeks of development time.",
      getStarted: "Get Started",
      livePreview: "Live Preview",
      powerfulFeatures: "Powerful Features",
      featuresDescription: "Everything you need to build a professional dashboard for your next project",
      seeDashify: "See Dashify in Action",
      previewDescription: "Explore the different pages and components included in the template",
      simplePrice: "Simple, Transparent Pricing",
      pricingDescription: "Get access to the complete Dashify template at a one-time price",
      oneTimePayment: "one-time payment",
      everythingYouNeed: "Everything you need to build a professional dashboard",
      buyNow: "Buy Now",
      limitedOffer: "Limited time offer! Save R$63 today.",
      customSolution: "Need a custom solution?",
      customSolutionDescription: "Contact us for custom development or enterprise licensing options.",
      contactSales: "Contact Sales",
      testimonials: "What Our Customers Say",
      testimonialsDescription: "Don't just take our word for it. Here's what developers think about Dashify.",
      frequentlyAsked: "Frequently Asked Questions",
      faqDescription: "Find answers to common questions about the Dashify",
      readyToBuild: "Ready to Build Your Next Dashboard?",
      ctaDescription: "Get started with Dashify today and save weeks of development time",
      getDashifyFor: "Get Dashify for R$ 37,00",
      viewDemo: "View Demo",
      terms: "Terms",
      privacy: "Privacy",
      contact: "Contact",
      allRightsReserved: "All rights reserved.",
    },
    pt: {
      features: "Recursos",
      preview: "Demonstração",
      pricing: "Preço",
      faq: "Perguntas",
      getDashify: "Obter Dashify",
      heroTitle: "O Melhor Template de Dashboard para seu Próximo Projeto",
      heroDescription:
        "Dashify é um template premium e responsivo construído com Next.js, Tailwind CSS e shadcn/ui. Economize semanas de desenvolvimento.",
      getStarted: "Começar Agora",
      livePreview: "Ver Demonstração",
      powerfulFeatures: "Recursos Poderosos",
      featuresDescription: "Tudo o que você precisa para construir um dashboard profissional para seu próximo projeto",
      seeDashify: "Veja o Dashify em Ação",
      previewDescription: "Explore as diferentes páginas e componentes incluídos no template",
      simplePrice: "Preço Simples e Transparente",
      pricingDescription: "Tenha acesso ao template completo Dashify por um preço único",
      oneTimePayment: "pagamento único",
      everythingYouNeed: "Tudo o que você precisa para construir um dashboard profissional",
      buyNow: "Comprar Agora",
      limitedOffer: "Oferta por tempo limitado! Economize R$63 hoje.",
      customSolution: "Precisa de uma solução personalizada?",
      customSolutionDescription:
        "Entre em contato para opções de desenvolvimento personalizado ou licenciamento empresarial.",
      contactSales: "Falar com Vendas",
      testimonials: "O que Nossos Clientes Dizem",
      testimonialsDescription: "Não acredite apenas em nossa palavra. Veja o que os desenvolvedores acham do Dashify.",
      frequentlyAsked: "Perguntas Frequentes",
      faqDescription: "Encontre respostas para perguntas comuns sobre o Dashify",
      readyToBuild: "Pronto para Construir seu Próximo Dashboard?",
      ctaDescription: "Comece com o Dashify hoje e economize semanas de desenvolvimento",
      getDashifyFor: "Obter Dashify por R$ 37,00",
      viewDemo: "Ver Demonstração",
      terms: "Termos",
      privacy: "Privacidade",
      contact: "Contato",
      allRightsReserved: "Todos os direitos reservados.",
    },
  }

  // Current translation
  const t = translations[language]

  // Feature data
  const features = [
    {
      icon: <LayoutDashboard className="h-5 w-5 text-primary" />,
      title: "Responsive Layout",
      description: "Fully responsive design that works perfectly on desktops, tablets, and mobile devices.",
    },
    {
      icon: <Palette className="h-5 w-5 text-primary" />,
      title: "Dark & Light Mode",
      description: "Built-in dark and light mode support with seamless switching between themes.",
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-primary" />,
      title: "Interactive Charts",
      description: "Beautiful and interactive charts to visualize your data effectively.",
    },
    {
      icon: <Smartphone className="h-5 w-5 text-primary" />,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices with touch-friendly components and layouts.",
    },
    {
      icon: <Lightbulb className="h-5 w-5 text-primary" />,
      title: "Intuitive UI",
      description: "Clean and intuitive user interface with attention to detail and user experience.",
    },
    {
      icon: <Globe className="h-5 w-5 text-primary" />,
      title: "Ready-to-Use Pages",
      description: "Multiple pre-built pages including dashboard, analytics, customers, products, and more.",
    },
  ]

  // Pricing data
  const pricingPlans = [
    {
      title: "Dashify Template",
      originalPrice: "R$100",
      discount: "63% OFF",
      price: "R$37",
      features: [
        "Full Source Code",
        "Next.js 14 App Router",
        "TypeScript Support",
        "Responsive Design",
        "Dark & Light Mode",
        "8+ Pre-built Pages",
        "Interactive Components",
      ],
      popular: true,
      link: "https://pay.kirvano.com/ca8a9f12-4b88-4de0-b3f1-66c62b8d3ff5",
    },
    {
      title: "Dashify Register",
      originalPrice: "R$60",
      discount: "76% OFF",
      price: "R$14",
      features: ["Full Source Code", "Advanced UI Components", "Priority Updates", "Dark & Light Mode"],
      popular: false,
      link: "https://pay.kirvano.com/a47fca71-2539-4342-9860-bdc88d6b8e84",
    },
  ]

  // Testimonial data
  const testimonials = [
    {
      quote: "Dashify saved me weeks of development time. The code is clean, well-organized, and easy to customize.",
      author: "Sarah Johnson",
      role: "Frontend Developer",
      avatar: "/placeholder.svg?height=64&width=64",
      stars: 5,
    },
    {
      quote:
        "The best dashboard template I've used. The components are well-designed and the documentation is excellent.",
      author: "Michael Chen",
      role: "Full Stack Developer",
      avatar: "/placeholder.svg?height=64&width=64",
      stars: 5,
    },
    {
      quote: "I was able to launch my SaaS product in record time thanks to Dashify. Worth every penny!",
      author: "Alex Rodriguez",
      role: "Startup Founder",
      avatar: "/placeholder.svg?height=64&width=64",
      stars: 5,
    },
    {
      quote:
        "The attention to detail in this template is impressive. Everything from accessibility to performance is top-notch.",
      author: "Emily Wilson",
      role: "UI/UX Designer",
      avatar: "/placeholder.svg?height=64&width=64",
      stars: 4,
    },
    {
      quote: "Dashify has become our go-to template for client projects. It's flexible, modern, and easy to extend.",
      author: "David Thompson",
      role: "Agency Owner",
      avatar: "/placeholder.svg?height=64&width=64",
      stars: 5,
    },
    {
      quote: "The dark mode implementation is flawless. My users love being able to switch between themes.",
      author: "Lisa Brown",
      role: "Product Manager",
      avatar: "/placeholder.svg?height=64&width=64",
      stars: 4,
    },
  ]

  // FAQ data
  const faqItems = [
    {
      question: "What's included in the Dashify template?",
      answer:
        "Dashify includes the complete source code for a modern dashboard application built with Next.js, Tailwind CSS, and shadcn/ui. It includes 8+ pre-built pages (Dashboard, Analytics, Customers, Products, Orders, Billing, Calendar, Settings), interactive components, charts, tables, and more. Everything is fully responsive and includes both dark and light mode.",
    },
    {
      question: "Do I need to pay for updates?",
      answer:
        "No, once you purchase Dashify, you'll receive all future updates for free. We regularly improve the template with new features, bug fixes, and compatibility updates.",
    },
    {
      question: "What technologies does Dashify use?",
      answer:
        "Dashify is built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and shadcn/ui components. It follows modern best practices and is designed to be easy to customize and extend.",
    },
    {
      question: "Can I request a refund?",
      answer:
        "Due to the digital nature of the product, we do not offer refunds. However, if you have any issues with the template, please contact our support team, and we'll do our best to help you.",
    },
  ]

  return (
    <div className={theme}>
      <div className="min-h-screen bg-gradient-to-b from-background to-background/95 text-foreground">
        {/* Navbar */}
        <header
          className={`sticky top-0 z-40 w-full backdrop-blur transition-all duration-200 ${scrolled ? "border-b bg-background/95 shadow-sm" : "bg-transparent"}`}
        >
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                
                <img src="/logo.png" alt="logo" className="h-6" />
              </div>
              <nav className="hidden md:flex gap-6">
                {["features", "preview", "pricing", "faq"].map((item) => (
                  <Link
                    key={item}
                    href={`#${item}`}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t[item]}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                title={language === "en" ? "Traduzir para Português" : "Translate to English"}
                className="rounded-full hover:bg-primary/10"
              >
                <Globe className="h-5 w-5" />
                <span className="sr-only">
                  {language === "en" ? "Traduzir para Português" : "Translate to English"}
                </span>
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full hover:bg-primary/10">
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              <Button asChild className="hidden md:inline-flex rounded-full">
                <Link href="https://pay.kirvano.com/ca8a9f12-4b88-4de0-b3f1-66c62b8d3ff5" target="_blank">
                  {t.getDashify}
                </Link>
              </Button>
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <div className="flex flex-col gap-6 py-6">
                      {["features", "preview", "pricing", "faq"].map((item) => (
                        <Link
                          key={item}
                          href={`#${item}`}
                          className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                          onClick={() => document.querySelector("[data-radix-dialog-close]")?.click()}
                        >
                          {t[item]}
                        </Link>
                      ))}
                      <Button asChild className="mt-4 rounded-full">
                        <Link
                          href="https://pay.kirvano.com/242e0fdd-2db3-49a8-85be-247ad1d85a94"
                          target="_blank"
                          onClick={() => document.querySelector("[data-radix-dialog-close]")?.click()}
                        >
                          {t.getDashify}
                        </Link>
                      </Button>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-6">
              <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20 border-none">
                Dashboard Template
              </Badge>
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                  {t.heroTitle}
                </h1>
                <p className="text-base text-muted-foreground md:text-lg lg:text-xl max-w-xl">{t.heroDescription}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild className="w-full sm:w-auto rounded-full group">
                  <Link href="https://pay.kirvano.com/242e0fdd-2db3-49a8-85be-247ad1d85a94" target="_blank">
                    {t.getStarted}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto rounded-full">
                  <Link href="#preview">{t.livePreview}</Link>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm pt-4">
                {["Next.js 14", "Tailwind CSS", "TypeScript", "shadcn/ui"].map((tech) => (
                  <div key={tech} className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary rounded-2xl blur-2xl opacity-50"></div>
              <div className="relative w-full overflow-hidden rounded-xl border shadow-xl bg-background">
                <div className="w-full">
                  <DashboardPreview />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                  <Button size="sm" variant="secondary" className="gap-1.5 rounded-full">
                    <Zap className="h-4 w-4 text-amber-500" />
                    <span>Interactive Demo</span>
                  </Button>
                </div>
              </div>
              <div className="absolute -z-10 h-32 w-32 rounded-full bg-primary/30 blur-3xl -top-10 -right-10"></div>
              <div className="absolute -z-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl -bottom-10 -left-10"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-16 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <Badge className="mb-2">Features</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {t.powerfulFeatures}
            </h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.featuresDescription}
            </p>
          </div>
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12 md:mt-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="h-full overflow-hidden border-none bg-gradient-to-b from-muted/50 to-muted/30 backdrop-blur-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Preview Section */}
        <section id="preview" className="container py-16 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <Badge className="mb-2">Preview</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.seeDashify}</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.previewDescription}
            </p>
          </div>

          <div className="mt-12 md:mt-16">
            <Tabs defaultValue="dashboard">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2 sm:grid-cols-4 p-1">
                  {["dashboard", "analytics", "customers", "settings"].map((tab) => (
                    <TabsTrigger key={tab} value={tab} className="text-xs sm:text-sm rounded-full">
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-50"></div>
                <TabsContent value="dashboard" className="flex justify-center px-0">
                  <div className="relative w-full max-w-4xl overflow-hidden rounded-xl border shadow-xl">
                    <DashboardPreview />
                  </div>
                </TabsContent>
                <TabsContent value="analytics" className="flex justify-center">
                  <div className="relative w-full max-w-4xl overflow-hidden rounded-xl border shadow-xl">
                    <AnalyticsPreview />
                  </div>
                </TabsContent>
                <TabsContent value="customers" className="flex justify-center">
                  <div className="relative w-full max-w-4xl overflow-hidden rounded-xl border shadow-xl">
                    <CustomersPreview />
                  </div>
                </TabsContent>
                <TabsContent value="settings" className="flex justify-center">
                  <div className="relative w-full max-w-4xl overflow-hidden rounded-xl border shadow-xl">
                    <SettingsPreview />
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container py-16 md:py-24 lg:py-32 border-t relative overflow-hidden">
          <div className="absolute -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl top-1/4 -right-32"></div>
          <div className="absolute -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl bottom-1/4 -left-32"></div>

          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <Badge className="mb-2">Pricing</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.simplePrice}</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.pricingDescription}
            </p>
          </div>

          <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center gap-8 md:flex-row md:justify-center">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="w-full max-w-md">
                <Card className="relative overflow-hidden border-none bg-gradient-to-b from-background to-muted/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/70"></div>
                  {plan.popular && (
                    <div className="absolute -right-12 top-7 rotate-45 bg-primary px-12 py-1 text-xs font-medium text-primary-foreground">
                      Popular
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center text-center">
                      <h3 className="text-2xl font-bold">{plan.title}</h3>
                      <div className="mt-6 flex flex-col items-center justify-center">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl text-muted-foreground line-through">{plan.originalPrice}</span>
                          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                            {plan.discount}
                          </span>
                        </div>
                        <div className="flex items-baseline mt-2">
                          <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                            {plan.price}
                          </span>
                        </div>
                      </div>
                      <p className="mt-4 text-muted-foreground">{t.everythingYouNeed}</p>
                      <Button className="mt-8 w-full rounded-full group" size="lg" asChild>
                        <Link href={plan.link} target="_blank">
                          {t.buyNow}
                          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                      
                      <div className="mt-8 space-y-3 w-full">
                        {plan.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-3 border-b border-border/40 pb-3 last:border-0"
                          >
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                              <Check className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-md text-center p-6 rounded-xl bg-muted/50 backdrop-blur-sm">
            <h3 className="text-xl font-bold">{t.customSolution}</h3>
            <p className="mt-2 text-muted-foreground">{t.customSolutionDescription}</p>
            <Button variant="outline" className="mt-4 rounded-full">
              {t.contactSales}
            </Button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container py-16 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <Badge className="mb-2">Testimonials</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.testimonials}</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.testimonialsDescription}
            </p>
          </div>

          <div className="mx-auto mt-12 md:mt-16 grid max-w-5xl gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="h-full overflow-hidden border-none bg-gradient-to-b from-muted/50 to-muted/30 backdrop-blur-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < testimonial.stars ? "text-amber-500 fill-amber-500" : "text-muted-foreground"}`}
                        />
                      ))}
                    </div>
                    <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4 mt-auto pt-4">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.author}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="container py-16 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <Badge className="mb-2">FAQ</Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.frequentlyAsked}</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.faqDescription}
            </p>
          </div>

          <div className="mx-auto mt-12 md:mt-16 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-muted/60">
                  <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10"></div>
          <div className="absolute -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

          <div className="container relative">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <Badge className="mb-2 bg-primary/20 text-primary hover:bg-primary/30 border-none">
                Get Started Today
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                {t.readyToBuild}
              </h2>
              <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {t.ctaDescription}
              </p>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto sm:justify-center mt-6">
                <Button size="lg" asChild className="w-full sm:w-auto rounded-full group">
                  <Link href="https://pay.kirvano.com/242e0fdd-2db3-49a8-85be-247ad1d85a94" target="_blank">
                    {t.getDashifyFor}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto rounded-full">
                  <Link href="#preview">{t.viewDemo}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-12 md:py-16">
          <div className="container">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="flex flex-col items-center gap-2 md:items-start">
                <div className="flex items-center gap-2">
                 
                  <img src="/logo.png" alt="logo" className="h-6" />
                </div>
                
              </div>
              <div className="flex gap-6">
                {["terms", "privacy", "contact"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {t[item]}
                  </Link>
                ))}
              </div>
              <div className="flex gap-4">
                {[
                  {
                    icon: (
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    ),
                    label: "Twitter",
                  },
                  {
                    icon: (
                      <>
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </>
                    ),
                    label: "GitHub",
                  },
                  {
                    icon: (
                      <>
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </>
                    ),
                    label: "Instagram",
                  },
                ].map((social, index) => (
                  <Button key={index} variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      {social.icon}
                    </svg>
                    <span className="sr-only">{social.label}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

