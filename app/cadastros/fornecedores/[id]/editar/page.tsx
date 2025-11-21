"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { SupplierFormContent } from "@/components/supplier-form-content"
import { use } from "react"

export default function EditSupplierPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const user = {
    name: "Admin User",
    email: "admin@stocksafe.com",
    profile: "ADMIN",
    initials: "AU",
  }

  return (
    <DashboardLayout user={user}>
      <SupplierFormContent mode="edit" supplierId={id} />
    </DashboardLayout>
  )
}
