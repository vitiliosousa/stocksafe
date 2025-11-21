"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { CheckinContent } from "@/components/checkin-content"

export default function CheckinPage() {
  const user = {
    name: "Carlos Santos",
    email: "carlos.santos@stocksafe.com",
    profile: "RECEBIMENTO",
    initials: "CS",
  }

  return (
    <DashboardLayout user={user}>
      <CheckinContent />
    </DashboardLayout>
  )
}
