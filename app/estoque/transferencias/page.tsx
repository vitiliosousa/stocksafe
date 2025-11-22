"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { TransfersContent } from "@/components/transfers-content"

export default function TransfersPage() {
  const user = {
    name: "Stock User",
    email: "stock@stocksafe.com",
    profile: "ADMIN",
    initials: "SU",
  }

  return (
    <DashboardLayout user={user}>
      <TransfersContent />
    </DashboardLayout>
  )
}
