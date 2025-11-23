"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { LabelStandardsContent } from "@/components/label-standards-content"

export default function LabelStandardsPage() {
  const user = {
    name: "Admin User",
    email: "admin@stocksafe.com",
    profile: "ADMIN",
    initials: "AU",
  }

  return (
    <DashboardLayout user={user}>
      <LabelStandardsContent />
    </DashboardLayout>
  )
}
