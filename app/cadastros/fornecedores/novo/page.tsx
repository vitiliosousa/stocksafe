"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { SupplierFormContent } from "@/components/supplier-form-content"

export default function NewSupplierPage() {
  const user = {
    name: "Admin User",
    email: "admin@stocksafe.com",
    profile: "ADMIN",
    initials: "AU",
  }

  return (
    <DashboardLayout user={user}>
      <SupplierFormContent mode="new" />
    </DashboardLayout>
  )
}
