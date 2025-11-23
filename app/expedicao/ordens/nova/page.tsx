"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { NewPickingOrderContent } from "@/components/new-picking-order-content"

export default function NewPickingOrderPage() {
  const user = {
    name: "Stock User",
    email: "stock@stocksafe.com",
    profile: "ADMIN",
    initials: "SU",
  }

  return (
    <DashboardLayout user={user}>
      <NewPickingOrderContent />
    </DashboardLayout>
  )
}
