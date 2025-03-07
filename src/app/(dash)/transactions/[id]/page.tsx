import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Detail() {
  return (

    <div className="mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Detalhes da Transação</CardTitle>
          <CardDescription>Transação #01 - Salário.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="font-medium">Descrição</div>
            <div>Salário</div>
            <div className="font-medium">Valor</div>
            <div>R$ 30.000,00</div>
            <div className="font-medium">Vencimento</div>
            <div>30</div>
            <div className="font-medium">Status</div>
            <div>Pendente</div>
          </div>
        </CardContent>
      </Card>
    </div>

  )
}

