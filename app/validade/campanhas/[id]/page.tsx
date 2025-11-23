"use client"

import { use } from "react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { CampaignMonitoringContent } from "@/components/campaign-monitoring-content"

export default function CampaignMonitoringPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  const user = {
    name: "Stock User",
    email: "stock@stocksafe.com",
    profile: "ADMIN",
    initials: "SU",
  }

  return (
    <DashboardLayout user={user}>
      <CampaignMonitoringContent campaignId={id} />
    </DashboardLayout>
  )
}
