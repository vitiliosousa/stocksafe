"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { ProductFormContent } from "@/components/product-form-content"

const MOCK_USER = {
  name: "João Silva",
  email: "joao.silva@empresa.com",
  profile: "ADMIN",
  initials: "JS",
}

export default function NewProductPage() {
  return (
    <DashboardLayout user={MOCK_USER}>
      <ProductFormContent mode="new" />
    </DashboardLayout>
  )
}
