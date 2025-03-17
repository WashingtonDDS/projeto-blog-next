import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  TableFooter,
} from "@/components/ui/table";
import Link from "next/link";
export function List() {
  return (
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
        <TableRow>
          <TableCell>Aluguel</TableCell>
          <TableCell>R$ -2000,00</TableCell>
          <TableCell>30/03/2024</TableCell>
          <TableCell>Vencido</TableCell>
          <TableCell>
            <Link href="#">Detalhes</Link>
          </TableCell>
        </TableRow>
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
  );
}
