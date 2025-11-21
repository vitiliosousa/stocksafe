"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { QualityInspectionContent } from "@/components/quality-inspection-content"

export default function QualityInspectionPage() {
  const user = {
    name: "QA User",
    email: "qa@stocksafe.com",
    profile: "QA",
    initials: "QA",
  }

  return (
    <DashboardLayout user={user}>
      <QualityInspectionContent />
    </DashboardLayout>
  )
}
