"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  FileText,
  ShoppingCart,
  CheckSquare,
  FlaskConical,
  Warehouse,
  Truck,
  AlertTriangle,
  BarChart3,
  Settings,
  ChevronDown,
  ChevronRight,
  Users,
  MapPin,
  Building2,
  HelpCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface DashboardSidebarProps {
  isCollapsed: boolean
  userProfile: string
}

interface MenuItem {
  icon: React.ElementType
  label: string
  href?: string
  badge?: number
  badgeVariant?: "default" | "warning" | "destructive"
  children?: MenuItem[]
  roles?: string[]
}

export function DashboardSidebar({ isCollapsed, userProfile }: DashboardSidebarProps) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>(["Dashboard"])

  const menuItems: MenuItem[] = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: Package,
      label: "Cadastros",
      children: [
        { icon: Package, label: "Produtos", href: "/cadastros/produtos" },
        { icon: Building2, label: "Fornecedores", href: "/cadastros/fornecedores" },
        { icon: MapPin, label: "Locais", href: "/cadastros/locais" },
        { icon: Users, label: "Usuários", href: "/cadastros/usuarios" },
      ],
    },
    {
      icon: FileText,
      label: "Requisições",
      children: [
        { icon: FileText, label: "Minhas Requisições", href: "/requisicoes" },
        { icon: FileText, label: "Nova Requisição", href: "/requisicoes/nova" },
        {
          icon: FileText,
          label: "Aprovar Requisições",
          href: "/requisicoes/aprovar",
          roles: ["GESTOR", "ADMIN"],
        },
      ],
    },
    {
      icon: ShoppingCart,
      label: "Compras",
      children: [
        { icon: ShoppingCart, label: "RFQs", href: "/compras/rfqs" },
        { icon: ShoppingCart, label: "Pedidos de Compra", href: "/compras/pos" },
        {
          icon: ShoppingCart,
          label: "Portal Fornecedor",
          href: "/compras/portal-fornecedor",
          roles: ["FORNECEDOR"],
        },
      ],
    },
    {
      icon: CheckSquare,
      label: "Recebimento",
      badge: 3,
      children: [
        { icon: CheckSquare, label: "Check-in", href: "/recebimento/checkin" },
        { icon: CheckSquare, label: "Conferência", href: "/recebimento/conferencia" },
        { icon: CheckSquare, label: "Aguardando Recebimento", href: "/recebimento/aguardando" },
      ],
    },
    {
      icon: FlaskConical,
      label: "Qualidade",
      href: "/qualidade/quarentena",
      badge: 2,
      badgeVariant: "warning",
    },
    {
      icon: Warehouse,
      label: "Estoque",
      children: [
        { icon: Warehouse, label: "Consultar Estoque", href: "/estoque/consulta" },
        { icon: Warehouse, label: "Movimentações", href: "/estoque/movimentacoes" },
        { icon: Warehouse, label: "Transferências", href: "/estoque/transferencias" },
        { icon: Warehouse, label: "Inventário", href: "/estoque/inventario" },
      ],
    },
    {
      icon: Truck,
      label: "Expedição",
      children: [
        { icon: Truck, label: "Ordens de Separação", href: "/expedicao/ordens" },
        { icon: Truck, label: "Reposição", href: "/expedicao/reposicao" },
      ],
    },
    {
      icon: AlertTriangle,
      label: "Validade",
      href: "/validade/dashboard",
      badge: 5,
      badgeVariant: "destructive",
    },
    {
      icon: Settings,
      label: "Admin",
      roles: ["ADMIN"],
      children: [
        { icon: Settings, label: "Políticas de Validade", href: "/admin/politicas" },
        { icon: Settings, label: "Padrões de Etiquetas", href: "/admin/etiquetas" },
        { icon: Settings, label: "Workflows", href: "/admin/workflows" },
        { icon: Settings, label: "Auditoria", href: "/admin/auditoria" },
      ],
    },
  ]

  const toggleExpanded = (label: string) => {
    setExpandedItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]))
  }

  const isActive = (href?: string) => {
    if (!href) return false
    return pathname === href
  }

  const hasActiveChild = (item: MenuItem): boolean => {
    if (!item.children) return false
    return item.children.some((child) => {
      if (child.href && pathname === child.href) return true
      if (child.children) return hasActiveChild(child)
      return false
    })
  }

  const shouldShowItem = (item: MenuItem) => {
    if (!item.roles) return true
    return item.roles.includes(userProfile)
  }

  // Auto-expand menu when a child is active
  useEffect(() => {
    menuItems.forEach((item) => {
      if (hasActiveChild(item) && !expandedItems.includes(item.label)) {
        setExpandedItems((prev) => [...prev, item.label])
      }
    })
  }, [pathname])

  const renderMenuItem = (item: MenuItem, level = 0) => {
    if (!shouldShowItem(item)) return null

    const hasChildren = item.children && item.children.length > 0
    const isExpanded = expandedItems.includes(item.label)
    const Icon = item.icon

    if (hasChildren) {
      const hasActive = hasActiveChild(item)
      return (
        <div key={item.label}>
          <button
            onClick={() => toggleExpanded(item.label)}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors",
              "hover:bg-emerald-50 hover:text-emerald-600",
              hasActive && "text-emerald-600",
              isCollapsed && "justify-center px-2",
            )}
          >
            <Icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && (
              <>
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <Badge
                    variant={item.badgeVariant === "warning" ? "default" : (item.badgeVariant || "default")}
                    className={cn(
                      "h-5 min-w-5 flex items-center justify-center",
                      item.badgeVariant === "warning" && "bg-yellow-500",
                      item.badgeVariant === "destructive" && "bg-red-500",
                    )}
                  >
                    {item.badge}
                  </Badge>
                )}
                {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </>
            )}
          </button>
          {isExpanded && !isCollapsed && (
            <div className="ml-4 border-l border-gray-200">
              {item.children?.map((child) => renderMenuItem(child, level + 1))}
            </div>
          )}
        </div>
      )
    }

    // Special styling for Validade item
    const isValidadeItem = item.label === "Validade"

    return (
      <Link
        key={item.label}
        href={item.href || "#"}
        className={cn(
          "flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors",
          "hover:bg-emerald-50 hover:text-emerald-600",
          isActive(item.href) && "bg-emerald-100 text-emerald-700 border-r-4 border-emerald-600",
          isValidadeItem && "bg-yellow-50",
          isCollapsed && "justify-center px-2",
          level > 0 && "pl-8",
        )}
      >
        <Icon className="w-5 h-5 flex-shrink-0" />
        {!isCollapsed && (
          <>
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <Badge
                variant={item.badgeVariant === "warning" ? "default" : (item.badgeVariant || "default")}
                className={cn(
                  "h-5 min-w-5 flex items-center justify-center",
                  item.badgeVariant === "warning" && "bg-yellow-500",
                  item.badgeVariant === "destructive" && "bg-red-500",
                )}
              >
                {item.badge}
              </Badge>
            )}
          </>
        )}
      </Link>
    )
  }

  return (
    <aside
      className={cn(
        "fixed left-0 top-16 bottom-0 bg-white border-r border-gray-200 transition-all duration-300 overflow-y-auto",
        isCollapsed ? "w-20" : "w-[260px]",
      )}
    >
      <nav className="py-4">{menuItems.map((item) => renderMenuItem(item))}</nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
          <div className="text-xs text-muted-foreground mb-2">Versão v1.0.0</div>
          <button className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 font-medium">
            <HelpCircle className="w-4 h-4" />
            Ajuda
          </button>
        </div>
      )}
    </aside>
  )
}
