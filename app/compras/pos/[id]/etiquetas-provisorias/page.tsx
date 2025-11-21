"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { ProvisionalLabelsContent } from "@/components/provisional-labels-content"

export default function ProvisionalLabelsPage() {
  const user = {
    name: "João Silva",
    email: "joao.silva@stocksafe.com",
    profile: "COMPRAS",
    initials: "JS",
  }

  return (
    <DashboardLayout user={user}>
      <ProvisionalLabelsContent />
    </DashboardLayout>
  )
}
