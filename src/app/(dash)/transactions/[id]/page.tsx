import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { TDetailTransactionProps, TTransaction } from "@/types/typeTransaction";
import { convertToDate } from "@/utils/convertToDate";
import { convertToReal } from "@/utils/convertToReal";
import { createRequest } from "@/utils/createRequest";
const getTransaction = async (id: string) => {
  const response = await createRequest(`/transactions/${id}`, {
    method: "GET",
  });
  return response;
};
export default async function Detail({
  params,
}: Readonly<TDetailTransactionProps>) {
  const { id, description, price, dueDate, status }: TTransaction =
    await getTransaction(params.id);

  return (
    <div className="mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Detalhes da Transação</CardTitle>
          <CardDescription>
            Transação # {id} - {description}.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="font-medium">Descrição</div>
            <div>{description}</div>
            <div className="font-medium">Valor</div>
            <div>R$ {convertToReal(price)}</div>
            <div className="font-medium">Vencimento</div>
            <div>{convertToDate(dueDate)}</div>
            <div className="font-medium">Status</div>
            <div>{status}</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
