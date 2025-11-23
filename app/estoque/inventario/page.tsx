"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { InventoryScheduleContent } from "@/components/inventory-schedule-content"

export default function InventorySchedulePage() {
  const user = {
    name: "Stock User",
    email: "stock@stocksafe.com",
    profile: "ADMIN",
    initials: "SU",
  }

  return (
    <DashboardLayout user={user}>
      <InventoryScheduleContent />
    </DashboardLayout>
  )
}
