"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { RequisitionFormContent } from "@/components/requisition-form-content"

export default function NewRequisitionPage() {
  const user = {
    name: "João Silva",
    email: "joao.silva@stocksafe.com",
    profile: "REQUISITANTE",
    initials: "JS",
  }

  return (
    <DashboardLayout user={user}>
      <RequisitionFormContent />
    </DashboardLayout>
  )
}
