"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { ProductFormContent } from "@/components/product-form-content"
import { use } from "react"

const MOCK_USER = {
  name: "João Silva",
  email: "joao.silva@empresa.com",
  profile: "ADMIN",
  initials: "JS",
}

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  return (
    <DashboardLayout user={MOCK_USER}>
      <ProductFormContent mode="edit" productId={id} />
    </DashboardLayout>
  )
}
