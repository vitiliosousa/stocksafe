"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { FiscalReceivingContent } from "@/components/fiscal-receiving-content"

export default function FiscalReceivingPage() {
  const user = {
    name: "Finance User",
    email: "finance@stocksafe.com",
    profile: "ADMIN",
    initials: "FU",
  }

  return (
    <DashboardLayout user={user}>
      <FiscalReceivingContent />
    </DashboardLayout>
  )
}
