"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { LocationsContent } from "@/components/locations-content"

export default function LocationsPage() {
  const user = {
    name: "Admin User",
    email: "admin@stocksafe.com",
    profile: "ADMIN",
    initials: "AU",
  }

  return (
    <DashboardLayout user={user}>
      <LocationsContent />
    </DashboardLayout>
  )
}
