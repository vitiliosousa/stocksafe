"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { DisposalsContent } from "@/components/disposals-content"

export default function DisposalsPage() {
  const user = {
    name: "Stock User",
    email: "stock@stocksafe.com",
    profile: "ADMIN",
    initials: "SU",
  }

  return (
    <DashboardLayout user={user}>
      <DisposalsContent />
    </DashboardLayout>
  )
}
