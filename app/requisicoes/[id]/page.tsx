"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { RequisitionDetailsContent } from "@/components/requisition-details-content"

export default function RequisitionDetailsPage() {
  const user = {
    name: "João Silva",
    email: "joao.silva@stocksafe.com",
    profile: "GESTOR",
    initials: "JS",
  }

  return (
    <DashboardLayout user={user}>
      <RequisitionDetailsContent />
    </DashboardLayout>
  )
}
