import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  TableFooter,
} from "@/components/ui/table";
import { TTransaction } from "@/types/typeTransaction";

import { createRequest } from "@/utils/createRequest";
import Link from "next/link";

const getTransactions = async () => {
  const response = await createRequest("/transactions", {
    method: "GET",
  });
  return response;
};
export async function List() {
  const transactions: TTransaction[] = await getTransactions();
  return (
    <div className="mt-8 overflow-hidden border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Descrição</TableHead>
            <TableHead>Preço</TableHead>
            <TableHead>Vencimento</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Ação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>{item.dueDate}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>
                <Link href={`/transactions/${item.id}`}>Detalhes</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Entrada</TableCell>
            <TableCell className="font-bold">R$ 0</TableCell>
            <TableCell colSpan={3}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Saída</TableCell>
            <TableCell className="font-bold">R$ -2000,00</TableCell>
            <TableCell colSpan={3}></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell className="font-bold">R$ -2000,00</TableCell>
            <TableCell colSpan={3}></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
