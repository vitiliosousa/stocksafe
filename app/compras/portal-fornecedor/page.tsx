"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { SupplierPortalContent } from "@/components/supplier-portal-content"

export default function SupplierPortalPage() {
  const user = {
    name: "Fornecedor A",
    email: "contato@fornecedora.com",
    profile: "FORNECEDOR",
    initials: "FA",
  }

  return (
    <DashboardLayout user={user}>
      <SupplierPortalContent />
    </DashboardLayout>
  )
}
