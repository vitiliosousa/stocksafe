"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { ProposalsComparisonContent } from "@/components/proposals-comparison-content"

export default function ProposalsComparisonPage() {
  const user = {
    name: "João Silva",
    email: "joao.silva@stocksafe.com",
    profile: "COMPRAS" as const,
    initials: "JS",
  }

  return (
    <DashboardLayout user={user}>
      <ProposalsComparisonContent />
    </DashboardLayout>
  )
}
