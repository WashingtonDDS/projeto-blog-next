import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { AlertDialogAction } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Form() {
  return (
    <form>
      <div className="py-2">
        <Label htmlFor="description">Descrição</Label>
        <Input placeholder="descrição" name="description" id="description" />
      </div>
      <div className="py-2">
        <Label htmlFor="price">Valor</Label>
        <Input placeholder="Valor" name="price" id="price" />
      </div>
      <div className="py-2">
        <Label htmlFor="dueDate">Data de Vencimento</Label>
        <Input
          type="date"
          placeholder="Data de Vencimento"
          name="dueDate"
          id="dueDate"
        />
      </div>
      <div className="py-2">
        <Label htmlFor="status">Status</Label>
        <Select name="status">
          <SelectTrigger className="w-full" id="status">
            <SelectValue placeholder="Selecione o status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value="pago">Pago</SelectItem>
              <SelectItem value="pendente">Pendente</SelectItem>
              <SelectItem value="Vencido">Vencido</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="py-2">
        <AlertDialogAction type="submit" className="w-full">
          Salvar
        </AlertDialogAction>
      </div>
    </form>
  );
}
