"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { WorkflowsContent } from "@/components/workflows-content"

export default function WorkflowsPage() {
  const user = {
    name: "Admin User",
    email: "admin@stocksafe.com",
    profile: "ADMIN",
    initials: "AU",
  }

  return (
    <DashboardLayout user={user}>
      <WorkflowsContent />
    </DashboardLayout>
  )
}
