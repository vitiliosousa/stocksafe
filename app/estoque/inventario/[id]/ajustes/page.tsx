"use client"

import { use } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { InventoryAdjustmentsContent } from "@/components/inventory-adjustments-content"

export default function InventoryAdjustmentsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const user = {
    name: "Stock User",
    email: "stock@stocksafe.com",
    profile: "ADMIN",
    initials: "SU",
  }

  return (
    <DashboardLayout user={user}>
      <InventoryAdjustmentsContent inventoryId={id} />
    </DashboardLayout>
  )
}
