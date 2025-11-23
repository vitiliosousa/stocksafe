"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { ExpiryDashboardContent } from "@/components/expiry-dashboard-content"

export default function ExpiryDashboardPage() {
  const user = {
    name: "Stock User",
    email: "stock@stocksafe.com",
    profile: "ADMIN",
    initials: "SU",
  }

  return (
    <DashboardLayout user={user}>
      <ExpiryDashboardContent />
    </DashboardLayout>
  )
}
