"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { RequisitionsListContent } from "@/components/requisitions-list-content"

export default function RequisitionsPage() {
  const user = {
    name: "João Silva",
    email: "joao.silva@stocksafe.com",
    profile: "REQUISITANTE",
    initials: "JS",
  }

  return (
    <DashboardLayout user={user}>
      <RequisitionsListContent />
    </DashboardLayout>
  )
}
