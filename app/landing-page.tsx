"use client"

import Link from "next/link"
import { useState } from "react"
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
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// Remover a importação do Logo: import { Logo } from "@/components/logo"

// Modificar o botão de compra para usar o link do Kirvano
// Atualizar as imagens de demonstração para mostrar o template real
// Atualizar o preço para R$ 230,00 em vez de $100

// Import dos componentes de preview
import { DashboardPreview } from "@/components/dashboard-preview"
import { AnalyticsPreview } from "@/components/analytics-preview"
import { CustomersPreview } from "@/components/customers-preview"
import { SettingsPreview } from "@/components/settings-preview"

// Modificar a função LandingPage para incluir o estado de idioma e a função de tradução
export default function LandingPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [language, setLanguage] = useState<"en" | "pt">("en")

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en")
  }

  // Objeto de tradução
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
      limitedOffer: "Limited time offer! Save R$740 today.",
      customSolution: "Need a custom solution?",
      customSolutionDescription: "Contact us for custom development or enterprise licensing options.",
      contactSales: "Contact Sales",
      testimonials: "What Our Customers Say",
      testimonialsDescription: "Don't just take our word for it. Here's what developers think about Dashify.",
      frequentlyAsked: "Frequently Asked Questions",
      faqDescription: "Find answers to common questions about the Dashify",
      readyToBuild: "Ready to Build Your Next Dashboard?",
      ctaDescription: "Get started with Dashify today and save weeks of development time",
      getDashifyFor: "Get Dashify for R$ 230,00",
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
      limitedOffer: "Oferta por tempo limitado! Economize R$740 hoje.",
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
      getDashifyFor: "Obter Dashify por R$ 230,00",
      viewDemo: "Ver Demonstração",
      terms: "Termos",
      privacy: "Privacidade",
      contact: "Contato",
      allRightsReserved: "Todos os direitos reservados.",
    },
  }

  // Usar a tradução atual
  const t = translations[language]

  // Modificar o header para incluir o botão de tradução
  return (
    <div className={theme}>
      <div className="min-h-screen bg-background text-foreground">
        {/* Navbar */}
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              {/* Substituir Logo por texto */}
              <span className="text-xl font-bold">Dashify</span>
              <nav className="hidden md:flex gap-6">
                <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  {t.features}
                </Link>
                <Link href="#preview" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  {t.preview}
                </Link>
                <Link href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  {t.pricing}
                </Link>
                <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  {t.faq}
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleLanguage}
                title={language === "en" ? "Traduzir para Português" : "Translate to English"}
              >
                <Globe className="h-5 w-5" />
                <span className="sr-only">
                  {language === "en" ? "Traduzir para Português" : "Translate to English"}
                </span>
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              </Button>
              <Button asChild className="hidden md:inline-flex">
                <Link href="https://pay.kirvano.com/2d913d32-2469-47a0-a799-f16a2b7d15e6" target="_blank">
                  {t.getDashify}
                </Link>
              </Button>
              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right">
                    <div className="flex flex-col gap-6 py-6">
                      <Link
                        href="#features"
                        className="text-lg font-medium text-foreground hover:text-primary"
                        onClick={() => document.querySelector("[data-radix-dialog-close]")?.click()}
                      >
                        {t.features}
                      </Link>
                      <Link
                        href="#preview"
                        className="text-lg font-medium text-foreground hover:text-primary"
                        onClick={() => document.querySelector("[data-radix-dialog-close]")?.click()}
                      >
                        {t.preview}
                      </Link>
                      <Link
                        href="#pricing"
                        className="text-lg font-medium text-foreground hover:text-primary"
                        onClick={() => document.querySelector("[data-radix-dialog-close]")?.click()}
                      >
                        {t.pricing}
                      </Link>
                      <Link
                        href="#faq"
                        className="text-lg font-medium text-foreground hover:text-primary"
                        onClick={() => document.querySelector("[data-radix-dialog-close]")?.click()}
                      >
                        {t.faq}
                      </Link>
                      <Button asChild className="mt-4">
                        <Link
                          href="https://pay.kirvano.com/2d913d32-2469-47a0-a799-f16a2b7d15e6"
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
        <section className="container py-8 md:py-24 lg:py-32">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  {t.heroTitle}
                </h1>
                <p className="text-base text-muted-foreground md:text-lg lg:text-xl">{t.heroDescription}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="https://pay.kirvano.com/2d913d32-2469-47a0-a799-f16a2b7d15e6" target="_blank">
                    {t.getStarted} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="#preview">{t.livePreview}</Link>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Next.js 14</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary" />
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="h-4 w-4 text-primary" />
                  <span>shadcn/ui</span>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-lg border shadow-xl">
                <div className="w-full h-150">
                  <DashboardPreview />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-center">
                  <Button size="sm" variant="secondary" className="gap-1">
                    <Zap className="h-4 w-4" />
                    <span>Interactive Demo</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container py-8 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              {t.powerfulFeatures}
            </h2>
            <p className="max-w-[95%] sm:max-w-[85%] text-sm sm:text-base text-muted-foreground md:text-lg lg:text-xl">
              {t.featuresDescription}
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-16">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <LayoutDashboard className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">Responsive Layout</h3>
                <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                  Fully responsive design that works perfectly on desktops, tablets, and mobile devices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Dark & Light Mode</h3>
                <p className="mt-2 text-muted-foreground">
                  Built-in dark and light mode support with seamless switching between themes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Interactive Charts</h3>
                <p className="mt-2 text-muted-foreground">
                  Beautiful and interactive charts to visualize your data effectively.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Mobile-First Design</h3>
                <p className="mt-2 text-muted-foreground">
                  Optimized for mobile devices with touch-friendly components and layouts.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Intuitive UI</h3>
                <p className="mt-2 text-muted-foreground">
                  Clean and intuitive user interface with attention to detail and user experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Ready-to-Use Pages</h3>
                <p className="mt-2 text-muted-foreground">
                  Multiple pre-built pages including dashboard, analytics, customers, products, and more.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Preview Section */}
        <section id="preview" className="container py-8 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">{t.seeDashify}</h2>
            <p className="max-w-[95%] sm:max-w-[85%] text-sm sm:text-base text-muted-foreground md:text-lg lg:text-xl">
              {t.previewDescription}
            </p>
          </div>

          <div className="mt-8 md:mt-16">
            <Tabs defaultValue="dashboard">
              <div className="flex justify-center mb-6">
                <TabsList className="grid w-full max-w-md grid-cols-2 sm:grid-cols-4">
                  <TabsTrigger value="dashboard" className="text-xs sm:text-sm">
                    Dashboard
                  </TabsTrigger>
                  <TabsTrigger value="analytics" className="text-xs sm:text-sm">
                    Analytics
                  </TabsTrigger>
                  <TabsTrigger value="customers" className="text-xs sm:text-sm">
                    Customers
                  </TabsTrigger>
                  <TabsTrigger value="settings" className="text-xs sm:text-sm">
                    Settings
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="dashboard" className="flex justify-center px-0">
                <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border shadow-xl">
                  <DashboardPreview />
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="flex justify-center">
                <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border shadow-xl">
                  <AnalyticsPreview />
                </div>
              </TabsContent>
              <TabsContent value="customers" className="flex justify-center">
                <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border shadow-xl">
                  <CustomersPreview />
                </div>
              </TabsContent>
              <TabsContent value="settings" className="flex justify-center">
                <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border shadow-xl">
                  <SettingsPreview />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.simplePrice}</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.pricingDescription}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-md">
            <Card className="relative overflow-hidden">
              <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/70"></div>
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-2xl font-bold">Dashify Template</h3>
                  <div className="mt-4 flex flex-col items-center justify-center">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl text-muted-foreground line-through">R$970</span>
                      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
                        76% OFF
                      </span>
                    </div>
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold">R$230</span>
                      
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">{t.everythingYouNeed}</p>
                  <Button className="mt-6 w-full" size="lg" asChild>
                    <Link href="https://pay.kirvano.com/2d913d32-2469-47a0-a799-f16a2b7d15e6" target="_blank">
                      {t.buyNow}
                    </Link>
                  </Button>
                  <p className="mt-4 text-sm text-amber-600 dark:text-amber-400 font-medium">{t.limitedOffer}</p>
                  <div className="mt-6 space-y-2">
                    {[
                      "Full Source Code",
                      "Next.js 14 App Router",
                      "TypeScript Support",
                      "Responsive Design",
                      "Dark & Light Mode",
                      "8+ Pre-built Pages",
                      "Interactive Components",
                      "Regular Updates",
                      "Developer Support",
                      "Commercial License",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center justify-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mx-auto mt-12 max-w-md text-center">
            <h3 className="text-xl font-bold">{t.customSolution}</h3>
            <p className="mt-2 text-muted-foreground">{t.customSolutionDescription}</p>
            <Button variant="outline" className="mt-4">
              {t.contactSales}
            </Button>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container py-8 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
              {t.testimonials}
            </h2>
            <p className="max-w-[95%] sm:max-w-[85%] text-sm sm:text-base text-muted-foreground md:text-lg lg:text-xl">
              {t.testimonialsDescription}
            </p>
          </div>

          <div className="mx-auto mt-8 md:mt-16 grid max-w-5xl gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Dashify saved me weeks of development time. The code is clean, well-organized, and easy to customize.",
                author: "Sarah Johnson",
                role: "Frontend Developer",
                avatar: "/placeholder.svg?height=64&width=64",
              },
              {
                quote:
                  "The best dashboard template I've used. The components are well-designed and the documentation is excellent.",
                author: "Michael Chen",
                role: "Full Stack Developer",
                avatar: "/placeholder.svg?height=64&width=64",
              },
              {
                quote: "I was able to launch my SaaS product in record time thanks to Dashify. Worth every penny!",
                author: "Alex Rodriguez",
                role: "Startup Founder",
                avatar: "/placeholder.svg?height=64&width=64",
              },
              {
                quote:
                  "The attention to detail in this template is impressive. Everything from accessibility to performance is top-notch.",
                author: "Emily Wilson",
                role: "UI/UX Designer",
                avatar: "/placeholder.svg?height=64&width=64",
              },
              {
                quote:
                  "Dashify has become our go-to template for client projects. It's flexible, modern, and easy to extend.",
                author: "David Thompson",
                role: "Agency Owner",
                avatar: "/placeholder.svg?height=64&width=64",
              },
              {
                quote: "The dark mode implementation is flawless. My users love being able to switch between themes.",
                author: "Lisa Brown",
                role: "Product Manager",
                avatar: "/placeholder.svg?height=64&width=64",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                        className="h-10 w-10 rounded-full object-cover"
                      />
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
        <section id="faq" className="container py-12 md:py-24 lg:py-32 border-t">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{t.frequentlyAsked}</h2>
            <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {t.faqDescription}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What's included in the Dashify template?</AccordionTrigger>
                <AccordionContent>
                  Dashify includes the complete source code for a modern dashboard application built with Next.js,
                  Tailwind CSS, and shadcn/ui. It includes 8+ pre-built pages (Dashboard, Analytics, Customers,
                  Products, Orders, Billing, Calendar, Settings), interactive components, charts, tables, and more.
                  Everything is fully responsive and includes both dark and light mode.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do I need to pay for updates?</AccordionTrigger>
                <AccordionContent>
                  No, once you purchase Dashify, you'll receive all future updates for free. We regularly improve the
                  template with new features, bug fixes, and compatibility updates.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I use Dashify for commercial projects?</AccordionTrigger>
                <AccordionContent>
                  Yes, your purchase includes a commercial license. You can use Dashify in unlimited personal and
                  commercial projects. However, you cannot redistribute or resell the template itself.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>What technologies does Dashify use?</AccordionTrigger>
                <AccordionContent>
                  Dashify is built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and shadcn/ui components. It
                  follows modern best practices and is designed to be easy to customize and extend.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer support?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer email support to help you with any questions or issues you might have while using the
                  template. We typically respond within 24-48 hours on business days.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Can I request a refund?</AccordionTrigger>
                <AccordionContent>
                  Due to the digital nature of the product, we do not offer refunds. However, if you have any issues
                  with the template, please contact our support team, and we'll do our best to help you.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-8 md:py-24 lg:py-32">
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                {t.readyToBuild}
              </h2>
              <p className="max-w-[95%] sm:max-w-[85%] text-sm sm:text-base text-muted-foreground md:text-lg lg:text-xl">
                {t.ctaDescription}
              </p>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:w-auto sm:justify-center">
                <Button size="lg" asChild className="w-full sm:w-auto">
                  <Link href="https://pay.kirvano.com/2d913d32-2469-47a0-a799-f16a2b7d15e6" target="_blank">
                    {t.getDashifyFor}
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="#preview">{t.viewDemo}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-8 md:py-12">
          <div className="container">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-col items-center gap-2 md:items-start">
                {/* Substituir Logo por texto */}
                <span className="text-xl font-bold">Dashify</span>
                <p className="text-sm text-muted-foreground">
                  &copy; {new Date().getFullYear()} Dashify. {t.allRightsReserved}
                </p>
              </div>
              <div className="flex gap-4">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  {t.terms}
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  {t.privacy}
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  {t.contact}
                </Link>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon">
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="icon">
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
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="ghost" size="icon">
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
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

