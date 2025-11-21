"use client"

import { DashboardLayout } from "@/components/dashboard-layout"
import { UsersListContent } from "@/components/users-list-content"

export default function UsersPage() {
  const user = {
    name: "Admin User",
    email: "admin@stocksafe.com",
    profile: "ADMIN",
    initials: "AU",
  }

  return (
    <DashboardLayout user={user}>
      <UsersListContent />
    </DashboardLayout>
  )
}
