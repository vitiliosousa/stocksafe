"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { NonConformityRegistrationContent } from "@/components/non-conformity-registration-content"

export default function NonConformityRegistrationPage() {
  const user = {
    name: "Recebimento User",
    email: "recebimento@stocksafe.com",
    profile: "RECEBIMENTO",
    initials: "RU",
  }

  return (
    <DashboardLayout user={user}>
      <NonConformityRegistrationContent />
    </DashboardLayout>
  )
}
