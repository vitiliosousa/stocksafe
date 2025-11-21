"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { PoInvoicingContent } from "@/components/po-invoicing-content"

export default function PoInvoicingPage() {
  const user = {
    name: "João Silva",
    email: "joao.silva@stocksafe.com",
    profile: "COMPRAS",
    initials: "JS",
  }

  return (
    <DashboardLayout user={user}>
      <PoInvoicingContent />
    </DashboardLayout>
  )
}
