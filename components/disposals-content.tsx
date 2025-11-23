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
import { Textarea } from "@/components/ui/textarea"
import { AlertTriangle, Plus, Download, Camera, Upload, FileText } from "lucide-react"

export function DisposalsContent() {
  const [showDisposalModal, setShowDisposalModal] = useState(false)

  // Modal form state
  const [disposalDate, setDisposalDate] = useState("")
  const [disposalReason, setDisposalReason] = useState("")
  const [disposalType, setDisposalType] = useState("")
  const [description, setDescription] = useState("")
  const [location, setLocation] = useState("")
  const [company, setCompany] = useState("")
  const [mtrNumber, setMtrNumber] = useState("")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-red-700">Gestão de Descartes</h1>
          <p className="text-muted-foreground">Registro e controle de produtos descartados</p>
        </div>
        <Dialog open={showDisposalModal} onOpenChange={setShowDisposalModal}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700">
              <Plus className="h-4 w-4 mr-2" />
              Novo Descarte
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Registrar Descarte</DialogTitle>
              <DialogDescription>Preencha as informações do descarte</DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              {/* Item Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Itens a Descartar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-3 bg-muted rounded text-sm">
                    <p><span className="font-medium">Produto:</span> Filé de Frango (FRS-045)</p>
                    <p><span className="font-medium">Lote:</span> LOT2024-099</p>
                    <p><span className="font-medium">Validade:</span> 20/01/2025 (Vencido há 2 dias)</p>
                    <p><span className="font-medium">Quantidade:</span> 25 kg</p>
                    <p><span className="font-medium">Valor:</span> R$ 462,50</p>
                  </div>
                </CardContent>
              </Card>

              {/* Disposal Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Informações do Descarte</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="disposal-date">Data do Descarte *</Label>
                    <Input
                      id="disposal-date"
                      type="date"
                      value={disposalDate}
                      onChange={(e) => setDisposalDate(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reason">Motivo do Descarte *</Label>
                    <Select value={disposalReason} onValueChange={setDisposalReason}>
                      <SelectTrigger id="reason">
                        <SelectValue placeholder="Selecione o motivo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vencimento">Vencimento</SelectItem>
                        <SelectItem value="avaria">Avaria/Dano Físico</SelectItem>
                        <SelectItem value="contaminacao">Contaminação Suspeita/Confirmada</SelectItem>
                        <SelectItem value="recall">Recall do Fabricante</SelectItem>
                        <SelectItem value="nao-conformidade">Não Conformidade Crítica</SelectItem>
                        <SelectItem value="qualidade">Qualidade Comprometida</SelectItem>
                        <SelectItem value="regulatorio">Regulatório</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Tipo de Descarte *</Label>
                    <RadioGroup value={disposalType} onValueChange={setDisposalType}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comum" id="comum" />
                        <Label htmlFor="comum" className="font-normal">Descarte Comum</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="especial" id="especial" />
                        <Label htmlFor="especial" className="font-normal">Descarte Especial (requer tratamento)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="incineracao" id="incineracao" />
                        <Label htmlFor="incineracao" className="font-normal">Incineração (produtos perigosos)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="compostagem" id="compostagem" />
                        <Label htmlFor="compostagem" className="font-normal">Compostagem (orgânicos)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="racao" id="racao" />
                        <Label htmlFor="racao" className="font-normal">Ração Animal</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="doacao" id="doacao" />
                        <Label htmlFor="doacao" className="font-normal">Doação (ainda utilizável)</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="uso-interno" id="uso-interno" />
                        <Label htmlFor="uso-interno" className="font-normal">Uso Alternativo Interno</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="outro-tipo" id="outro-tipo" />
                        <Label htmlFor="outro-tipo" className="font-normal">Outro</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Descrição Detalhada *</Label>
                    <Textarea
                      id="description"
                      placeholder="Descreva as condições do produto, motivo detalhado, destino final... (mínimo 50 caracteres)"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={4}
                    />
                    <p className="text-xs text-muted-foreground">{description.length}/50 caracteres mínimos</p>
                  </div>

                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label htmlFor="location">Local do Descarte</Label>
                      <Input
                        id="location"
                        placeholder="Ex: Container externo"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa Coletora</Label>
                      <Input
                        id="company"
                        placeholder="Se aplicável"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mtr">Certificado/Número MTR</Label>
                      <Input
                        id="mtr"
                        placeholder="Manifesto de Transporte"
                        value={mtrNumber}
                        onChange={(e) => setMtrNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Evidence */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Evidências Obrigatórias</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Fotos do Produto * (mínimo 2)</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <Camera className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">
                        Clique para capturar ou fazer upload das fotos
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Mostrar: embalagem, lote, validade, condição (max 5MB/foto)
                      </p>
                      <Button variant="outline" className="mt-2">
                        <Upload className="h-4 w-4 mr-2" />
                        Fazer Upload
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Laudo de Descarte {(disposalType === "especial" || disposalType === "incineracao") && "(Obrigatório)"}</Label>
                    <div className="border-2 border-dashed rounded-lg p-4 text-center">
                      <FileText className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground mb-2">Upload PDF ou gerar automaticamente</p>
                      <div className="flex gap-2 justify-center">
                        <Button variant="outline" size="sm">
                          <Upload className="h-4 w-4 mr-2" />
                          Upload PDF
                        </Button>
                        <Button variant="outline" size="sm">
                          Gerar Automaticamente
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Financial Impact */}
              <Card className="border-red-300 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-base">Impacto Financeiro</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Valor do Produto:</span>
                    <span className="font-bold">R$ 462,50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Custo de Descarte Estimado:</span>
                    <span className="font-bold">R$ 35,00</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-medium">Perda Total:</span>
                    <span className="font-bold text-red-600">R$ 497,50</span>
                  </div>
                  <div className="space-y-2 pt-2">
                    <Label htmlFor="cost-center">Centro de Custo *</Label>
                    <Select>
                      <SelectTrigger id="cost-center">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="estoque">Estoque</SelectItem>
                        <SelectItem value="perdas">Perdas e Avarias</SelectItem>
                        <SelectItem value="qualidade">Qualidade</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Rastreability */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Rastreabilidade</CardTitle>
                </CardHeader>
                <CardContent className="space-y-1 text-sm">
                  <p><span className="font-medium">PO Origem:</span> PO-2024-0892</p>
                  <p><span className="font-medium">Fornecedor:</span> Frigorífico ABC Ltda</p>
                  <p><span className="font-medium">Data Recebimento:</span> 10/12/2024</p>
                  <p><span className="font-medium">Tempo no Estoque:</span> 42 dias</p>
                  <p className="text-red-600 pt-2">
                    <span className="font-medium">Impacto Scorecard:</span> Vencimento prematuro (&lt;70% vida útil) - Penalização: -15 pontos
                  </p>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setShowDisposalModal(false)}>
                  Cancelar
                </Button>
                <Button variant="outline">
                  Salvar Rascunho
                </Button>
                <Button className="bg-red-600 hover:bg-red-700">
                  Registrar Descarte
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="awaiting" className="w-full">
        <TabsList>
          <TabsTrigger value="awaiting">Aguardando Descarte</TabsTrigger>
          <TabsTrigger value="completed">Descartes Realizados</TabsTrigger>
          <TabsTrigger value="pending-approval">Pendentes de Aprovação</TabsTrigger>
        </TabsList>

        <TabsContent value="awaiting" className="space-y-4">
          {/* Alert Card */}
          <Card className="border-red-300 bg-red-50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5" />
                <div className="flex-1">
                  <p className="font-bold text-red-900">8 produtos vencidos aguardando descarte</p>
                  <p className="text-sm text-red-800 mt-1">Valor Total: R$ 2.450,00</p>
                </div>
                <Button className="bg-red-600 hover:bg-red-700">
                  Iniciar Descarte em Lote
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Table */}
          <Card>
            <CardHeader>
              <CardTitle>Itens Aguardando Descarte</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2 w-16">Criticidade</th>
                      <th className="text-left p-2">Produto</th>
                      <th className="text-left p-2">Lote</th>
                      <th className="text-left p-2">Validade</th>
                      <th className="text-right p-2">Quantidade</th>
                      <th className="text-right p-2">Valor Total</th>
                      <th className="text-left p-2">Local</th>
                      <th className="text-left p-2">Motivo</th>
                      <th className="text-center p-2">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-red-100 hover:bg-red-200">
                      <td className="p-2 text-center text-xl">🔴🔴🔴</td>
                      <td className="p-2">
                        <div>
                          <p className="font-mono text-xs">FRS-045</p>
                          <p className="text-sm font-medium">Filé de Frango</p>
                        </div>
                      </td>
                      <td className="p-2 font-mono text-xs">LOT2024-099</td>
                      <td className="p-2">
                        <p className="text-sm">20/01/2025</p>
                        <p className="text-red-700 font-bold text-xs">Vencido há 2 dias</p>
                      </td>
                      <td className="p-2 text-right">25 kg</td>
                      <td className="p-2 text-right font-bold">R$ 462,50</td>
                      <td className="p-2 text-xs">ARM01 &gt; ZF</td>
                      <td className="p-2">
                        <Badge variant="outline">Vencimento</Badge>
                      </td>
                      <td className="p-2 text-center">
                        <Button
                          size="sm"
                          className="bg-red-600 hover:bg-red-700"
                          onClick={() => setShowDisposalModal(true)}
                        >
                          Registrar Descarte
                        </Button>
                      </td>
                    </tr>

                    <tr className="border-b bg-orange-50 hover:bg-orange-100">
                      <td className="p-2 text-center text-xl">🔴🔴</td>
                      <td className="p-2">
                        <div>
                          <p className="font-mono text-xs">BEB-120</p>
                          <p className="text-sm font-medium">Suco de Laranja</p>
                        </div>
                      </td>
                      <td className="p-2 font-mono text-xs">LOT2025-087</td>
                      <td className="p-2">
                        <p className="text-sm">22/01/2025</p>
                        <p className="text-red-700 font-bold text-xs">Vencido hoje</p>
                      </td>
                      <td className="p-2 text-right">30 L</td>
                      <td className="p-2 text-right font-bold">R$ 267,00</td>
                      <td className="p-2 text-xs">ARM01 &gt; ZF</td>
                      <td className="p-2">
                        <Badge variant="outline">Vencimento</Badge>
                      </td>
                      <td className="p-2 text-center">
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          Registrar Descarte
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <div className="space-x-4">
                    <span>Total Aguardando: 8 itens</span>
                    <span>Qtd Total: 145 unidades</span>
                  </div>
                  <div>
                    <span className="font-bold text-red-600">Valor Total a Descartar: R$ 2.450,00</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {/* KPIs */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div>
                  <p className="text-sm text-muted-foreground">Descartes Este Mês</p>
                  <p className="text-3xl font-bold">12</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div>
                  <p className="text-sm text-muted-foreground">Valor Descartado</p>
                  <p className="text-3xl font-bold text-red-600">R$ 4.850</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div>
                  <p className="text-sm text-muted-foreground">Qtd Descartada</p>
                  <p className="text-3xl font-bold">285 kg</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div>
                  <p className="text-sm text-muted-foreground">Taxa de Perda</p>
                  <p className="text-3xl font-bold">1.8%</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Descartes Realizados</CardTitle>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Código</th>
                      <th className="text-left p-2">Data</th>
                      <th className="text-left p-2">Produto</th>
                      <th className="text-left p-2">Lote</th>
                      <th className="text-right p-2">Qtd</th>
                      <th className="text-right p-2">Valor</th>
                      <th className="text-left p-2">Motivo</th>
                      <th className="text-left p-2">Tipo</th>
                      <th className="text-left p-2">Responsável</th>
                      <th className="text-center p-2">Laudo</th>
                      <th className="text-center p-2">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-muted/50">
                      <td className="p-2 font-mono text-emerald-600">DESC-001</td>
                      <td className="p-2">20/01/2025</td>
                      <td className="p-2">
                        <div>
                          <p className="font-mono text-xs">FRS-032</p>
                          <p className="text-sm">Iogurte Natural</p>
                        </div>
                      </td>
                      <td className="p-2 font-mono text-xs">LOT2025-045</td>
                      <td className="p-2 text-right">10 kg</td>
                      <td className="p-2 text-right font-bold">R$ 180,00</td>
                      <td className="p-2">
                        <Badge variant="outline">Vencimento</Badge>
                      </td>
                      <td className="p-2">Comum</td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs">
                            JS
                          </div>
                          <span className="text-sm">João Silva</span>
                        </div>
                      </td>
                      <td className="p-2 text-center">
                        <Badge variant="outline" className="bg-green-50 text-green-700">
                          ✅ Anexado
                        </Badge>
                      </td>
                      <td className="p-2 text-center">
                        <Button size="sm" variant="outline">Ver Laudo</Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending-approval" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pendentes de Aprovação</CardTitle>
              <CardDescription>Descartes aguardando autorização</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center py-8">Nenhum descarte pendente de aprovação</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
