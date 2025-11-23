"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { StockReplenishmentContent } from "@/components/stock-replenishment-content"

export default function StockReplenishmentPage() {
  const user = {
    name: "Stock User",
    email: "stock@stocksafe.com",
    profile: "ADMIN",
    initials: "SU",
  }

  return (
    <DashboardLayout user={user}>
      <StockReplenishmentContent />
    </DashboardLayout>
  )
}
