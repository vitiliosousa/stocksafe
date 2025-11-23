"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { PickingOrdersContent } from "@/components/picking-orders-content"

export default function PickingOrdersPage() {
  const user = {
    name: "Stock User",
    email: "stock@stocksafe.com",
    profile: "ADMIN",
    initials: "SU",
  }

  return (
    <DashboardLayout user={user}>
      <PickingOrdersContent />
    </DashboardLayout>
  )
}
