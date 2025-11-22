"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { InventoryMovementsContent } from "@/components/inventory-movements-content"

export default function InventoryMovementsPage() {
  const user = {
    name: "Stock User",
    email: "stock@stocksafe.com",
    profile: "ADMIN",
    initials: "SU",
  }

  return (
    <DashboardLayout user={user}>
      <InventoryMovementsContent />
    </DashboardLayout>
  )
}
