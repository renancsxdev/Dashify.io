import { DashboardPage } from "@/components/dashboard-page"
import LandingPage from "@/app/landing-page"

export default function Home() {
  // Set to true to show the dashboard, false to show the landing page
  const showDashboard = false

  return showDashboard ? <DashboardPage /> : <LandingPage />
}

