"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  Package,
  AlertTriangle,
  FileText,
  Download,
  Play,
  Calendar,
  Clock,
  Edit,
  Trash,
  Plus
} from "lucide-react"
import Link from "next/link"

export function ReportsHubContent() {
  const [showReportModal, setShowReportModal] = useState(false)
  const [reportStep, setReportStep] = useState(1)

  // Form state
  const [period, setPeriod] = useState("30days")
  const [format, setFormat] = useState("pdf")
  const [delivery, setDelivery] = useState("download")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-emerald-700">Relatórios e Analytics</h1>
        <p className="text-muted-foreground">Centro de análises e relatórios do sistema</p>
      </div>

      {/* Executive Dashboards */}
      <div>
        <h2 className="text-xl font-bold mb-4">Dashboards Executivos</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-emerald-300">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-10 w-10 text-emerald-600" />
                  <div>
                    <h3 className="font-bold">Visão Geral do Negócio</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">KPIs consolidados de todo o sistema</p>
                <div className="space-y-1 text-xs">
                  <p>Valor em Estoque: <span className="font-bold">R$ 185.420</span></p>
                  <p>Movimentações Hoje: <span className="font-bold">42</span></p>
                  <p>Taxa de Atendimento: <span className="font-bold">96%</span></p>
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="sm">
                  Abrir Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-green-300">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <DollarSign className="h-10 w-10 text-green-600" />
                  <div>
                    <h3 className="font-bold">Análise Financeira</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Valor do estoque, custos, perdas</p>
                <div className="space-y-1 text-xs">
                  <p>Valor do Estoque: <span className="font-bold">R$ 185.420</span></p>
                  <p>Perdas Este Mês: <span className="font-bold text-red-600">R$ 4.850</span></p>
                  <p>ROI Estoque: <span className="font-bold">18%</span></p>
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700" size="sm">
                  Abrir Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-blue-300">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-10 w-10 text-blue-600" />
                  <div>
                    <h3 className="font-bold">Performance Operacional</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Produtividade, tempos, eficiência</p>
                <div className="space-y-1 text-xs">
                  <p>Tempo Médio Recebimento: <span className="font-bold">2.5h</span></p>
                  <p>Acuracidade Inventário: <span className="font-bold">98%</span></p>
                  <p>Eficiência Picking: <span className="font-bold">92%</span></p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700" size="sm">
                  Abrir Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-lg transition-shadow border-red-300">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-10 w-10 text-red-600" />
                  <div>
                    <h3 className="font-bold">Controle de Validades</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Perdas, riscos, campanhas</p>
                <div className="space-y-1 text-xs">
                  <p>Em Risco: <span className="font-bold text-red-600">R$ 26.670</span></p>
                  <p>Taxa de Perda: <span className="font-bold">1.8%</span></p>
                  <p>Campanhas Ativas: <span className="font-bold">5</span></p>
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700" size="sm" asChild>
                  <Link href="/validade/dashboard">Abrir Dashboard</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Report Categories */}
      <Tabs defaultValue="estoque" className="w-full">
        <TabsList>
          <TabsTrigger value="estoque">📦 Estoque</TabsTrigger>
          <TabsTrigger value="compras">🛒 Compras</TabsTrigger>
          <TabsTrigger value="validade">⚠️ Validade</TabsTrigger>
          <TabsTrigger value="operacional">📊 Operacional</TabsTrigger>
          <TabsTrigger value="avancado">📈 Avançado</TabsTrigger>
        </TabsList>

        <TabsContent value="estoque" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <ReportCard
              title="Curva ABC"
              description="Classificação de produtos por valor/giro"
              lastUpdate="Atualizado ontem"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Giro de Estoque"
              description="Análise de rotação por produto/categoria"
              kpi="Últimos 90 dias"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Rupturas e Disponibilidade"
              description="Produtos em falta e nível de serviço"
              kpi="Taxa: 96%"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Estoque Parado"
              description="Produtos sem movimentação há > 90 dias"
              kpi="R$ 8.450 parado"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Ocupação de Armazém"
              description="Utilização de espaço por local"
              kpi="78% ocupação média"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Movimentações Consolidadas"
              description="Entradas, saídas e saldo por período"
              kpi="Este mês"
              onGenerate={() => setShowReportModal(true)}
            />
          </div>
        </TabsContent>

        <TabsContent value="compras" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <ReportCard
              title="Scorecard de Fornecedores"
              description="Performance e conformidade de fornecedores"
              kpi="Score Médio: 85/100"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Conformidade Lote/Validade"
              description="Taxa de conformidade por fornecedor"
              kpi="92% conformidade"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Lead Time de Fornecedores"
              description="Prazo médio vs prometido"
              kpi="Lead time: 7 dias"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Não Conformidades"
              description="NCs por fornecedor e tipo"
              kpi="5 NCs este mês"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Volume de Compras"
              description="Valor comprado por fornecedor/categoria"
              kpi="Este ano"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Análise de Preços"
              description="Evolução de preços por produto/fornecedor"
              onGenerate={() => setShowReportModal(true)}
            />
          </div>
        </TabsContent>

        <TabsContent value="validade" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <ReportCard
              title="Perdas por Vencimento"
              description="Valor e quantidade perdidos"
              kpi="R$ 4.850 este mês"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Itens em Risco"
              description="Projeção de perdas por horizonte"
              kpi="R$ 26.670 em risco"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Efetividade FEFO"
              description="% de picking correto (validade)"
              kpi="94% FEFO aplicado"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Análise de Campanhas"
              description="Performance de campanhas de escoamento"
              kpi="78% taxa de sucesso"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Descartes"
              description="Volume e valor de descartes"
              kpi="R$ 4.850 descartado"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Produtos Mais Críticos"
              description="Top produtos com mais perdas"
              onGenerate={() => setShowReportModal(true)}
            />
          </div>
        </TabsContent>

        <TabsContent value="operacional" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <ReportCard
              title="Acuracidade de Inventário"
              description="Precisão de inventários cíclicos"
              kpi="98% acuracidade"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Produtividade de Recebimento"
              description="Tempo médio de conferência"
              kpi="15 min/item"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Performance de Picking"
              description="Tempo e acuracidade de separação"
              kpi="45 itens/hora"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Inspeções QA"
              description="Taxa de aprovação/reprovação"
              kpi="96% aprovação"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Tempo de Ciclo"
              description="Recebimento até disponibilização"
              kpi="4.2 horas médias"
              onGenerate={() => setShowReportModal(true)}
            />
          </div>
        </TabsContent>

        <TabsContent value="avancado" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <ReportCard
              title="Análise de Sazonalidade"
              description="Padrões de demanda por período"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Previsão de Demanda"
              description="Projeção baseada em histórico"
              kpi="Algoritmo: Média móvel"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Ponto de Reposição"
              description="Sugestão de min/máx por produto"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Análise de Correlação"
              description="Produtos frequentemente movimentados juntos"
              onGenerate={() => setShowReportModal(true)}
            />
            <ReportCard
              title="Benchmarking Interno"
              description="Comparação entre locais/períodos"
              onGenerate={() => setShowReportModal(true)}
            />
          </div>
        </TabsContent>
      </Tabs>

      {/* Scheduled Reports */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Relatórios Agendados</CardTitle>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="h-4 w-4 mr-2" />
              Agendar Novo
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Nome do Relatório</th>
                  <th className="text-left p-2">Frequência</th>
                  <th className="text-left p-2">Próxima Execução</th>
                  <th className="text-left p-2">Destinatários</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-center p-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-2 font-medium">Curva ABC - Mensal</td>
                  <td className="p-2">Mensal (dia 1)</td>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>01/02/2025 08:00</span>
                    </div>
                  </td>
                  <td className="p-2">gerencia@stocksafe.com +2</td>
                  <td className="p-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      Ativo
                    </Badge>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-1 justify-center">
                      <Button size="sm" variant="outline">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-2 font-medium">Perdas por Vencimento</td>
                  <td className="p-2">Semanal (Segunda-feira)</td>
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>27/01/2025 07:00</span>
                    </div>
                  </td>
                  <td className="p-2">qualidade@stocksafe.com</td>
                  <td className="p-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      Ativo
                    </Badge>
                  </td>
                  <td className="p-2">
                    <div className="flex gap-1 justify-center">
                      <Button size="sm" variant="outline">
                        <Play className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Recent Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Histórico de Relatórios Gerados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Data/Hora</th>
                  <th className="text-left p-2">Tipo de Relatório</th>
                  <th className="text-left p-2">Parâmetros</th>
                  <th className="text-left p-2">Gerado Por</th>
                  <th className="text-right p-2">Tamanho</th>
                  <th className="text-center p-2">Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>22/01/2025 14:30</span>
                    </div>
                  </td>
                  <td className="p-2">Curva ABC</td>
                  <td className="p-2 text-sm text-muted-foreground">Últimos 90 dias, Todas categorias</td>
                  <td className="p-2">João Silva</td>
                  <td className="p-2 text-right">2.3 MB</td>
                  <td className="p-2">
                    <div className="flex gap-1 justify-center">
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>21/01/2025 09:15</span>
                    </div>
                  </td>
                  <td className="p-2">Perdas por Vencimento</td>
                  <td className="p-2 text-sm text-muted-foreground">Este mês, Todos produtos</td>
                  <td className="p-2">Maria Santos</td>
                  <td className="p-2 text-right">856 KB</td>
                  <td className="p-2">
                    <div className="flex gap-1 justify-center">
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Report Generator Modal */}
      <Dialog open={showReportModal} onOpenChange={setShowReportModal}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Gerar Relatório - Curva ABC</DialogTitle>
            <DialogDescription>Configure os parâmetros do relatório</DialogDescription>
          </DialogHeader>

          {reportStep === 1 && (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Período *</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={period} onValueChange={setPeriod}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="today" id="today" />
                      <Label htmlFor="today" className="font-normal">Hoje</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="7days" id="7days" />
                      <Label htmlFor="7days" className="font-normal">Últimos 7 dias</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="30days" id="30days" />
                      <Label htmlFor="30days" className="font-normal">Últimos 30 dias</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="month" id="month" />
                      <Label htmlFor="month" className="font-normal">Este Mês</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="year" id="year" />
                      <Label htmlFor="year" className="font-normal">Este Ano</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="custom" id="custom" />
                      <Label htmlFor="custom" className="font-normal">Personalizado</Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Filtros</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <Label>Categorias</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Todas as categorias" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todas</SelectItem>
                        <SelectItem value="frescos">Frescos</SelectItem>
                        <SelectItem value="congelados">Congelados</SelectItem>
                        <SelectItem value="bebidas">Bebidas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Locais</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Todos os locais" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Todos</SelectItem>
                        <SelectItem value="cd">Centro Distribuição</SelectItem>
                        <SelectItem value="loja1">Loja Centro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Agrupamento</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <Label>Agrupar por</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Produto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="produto">Produto</SelectItem>
                        <SelectItem value="categoria">Categoria</SelectItem>
                        <SelectItem value="fornecedor">Fornecedor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Ordenar por</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Valor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="valor">Valor</SelectItem>
                        <SelectItem value="quantidade">Quantidade</SelectItem>
                        <SelectItem value="nome">Nome</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setShowReportModal(false)}>
                  Cancelar
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => setReportStep(2)}>
                  Próximo →
                </Button>
              </div>
            </div>
          )}

          {reportStep === 2 && (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Formato de Saída *</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={format} onValueChange={setFormat}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="pdf" id="pdf" />
                      <Label htmlFor="pdf" className="font-normal">PDF (layout profissional, gráficos)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="xlsx" id="xlsx" />
                      <Label htmlFor="xlsx" className="font-normal">XLSX (Excel, análise)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="csv" id="csv" />
                      <Label htmlFor="csv" className="font-normal">CSV (dados brutos)</Label>
                    </div>
                  </RadioGroup>

                  {format === "pdf" && (
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="cover" />
                        <Label htmlFor="cover" className="font-normal">Incluir capa</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="charts" defaultChecked />
                        <Label htmlFor="charts" className="font-normal">Incluir gráficos</Label>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Entrega</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={delivery} onValueChange={setDelivery}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="download" id="download" />
                      <Label htmlFor="download" className="font-normal">Download Imediato</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email" />
                      <Label htmlFor="email" className="font-normal">Enviar por Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="both" id="both" />
                      <Label htmlFor="both" className="font-normal">Ambos</Label>
                    </div>
                  </RadioGroup>

                  {(delivery === "email" || delivery === "both") && (
                    <div className="mt-4 space-y-2">
                      <Label>Destinatários</Label>
                      <Input placeholder="email1@example.com, email2@example.com" />
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Salvar Configuração</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="favorite" />
                    <Label htmlFor="favorite" className="font-normal">Salvar como favorito</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="schedule" />
                    <Label htmlFor="schedule" className="font-normal">Agendar execução recorrente</Label>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setReportStep(1)}>
                  ← Voltar
                </Button>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Gerar Relatório
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

function ReportCard({
  title,
  description,
  kpi,
  lastUpdate,
  onGenerate,
}: {
  title: string
  description: string
  kpi?: string
  lastUpdate?: string
  onGenerate: () => void
}) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <FileText className="h-5 w-5 text-emerald-600 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-bold text-sm">{title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{description}</p>
            </div>
          </div>
          {kpi && (
            <p className="text-sm font-medium text-emerald-700">{kpi}</p>
          )}
          {lastUpdate && (
            <p className="text-xs text-muted-foreground">{lastUpdate}</p>
          )}
          <Button
            size="sm"
            className="w-full bg-emerald-600 hover:bg-emerald-700"
            onClick={onGenerate}
          >
            Gerar Relatório
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
