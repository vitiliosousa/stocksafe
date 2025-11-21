"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { SupplierRfqResponseContent } from "@/components/supplier-rfq-response-content"

export default function SupplierRfqResponsePage() {
  const user = {
    name: "Fornecedor A",
    email: "fornecedor@example.com",
    profile: "FORNECEDOR" as const,
    initials: "FA",
  }

  return (
    <DashboardLayout user={user}>
      <SupplierRfqResponseContent />
    </DashboardLayout>
  )
}
