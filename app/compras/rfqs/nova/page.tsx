"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { NewRfqContent } from "@/components/new-rfq-content"

export default function NewRfqPage() {
  const user = {
    name: "Maria Santos",
    email: "maria.santos@stocksafe.com",
    profile: "COMPRAS",
    initials: "MS",
  }

  return (
    <DashboardLayout user={user}>
      <NewRfqContent />
    </DashboardLayout>
  )
}
