import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Modal() {
  return (
    <div className="mt-6">
      <AlertDialog>
        <AlertDialogTrigger className="inline-flex justify-center rounded-lg text-sm font-semibold py-2 px-3 bg-slate-900 text-white hover:bg-slate-700">
          Nova Transação
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Nova Transação</AlertDialogTitle>
          </AlertDialogHeader>

          <form>
            <div className="py-2">
              <Label htmlFor="description">Description</Label>
              <Input
                placeholder="descrição"
                name="description"
                id="description"
              />
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
              );
            </div>
          </form>

          <AlertDialogFooter>
            <AlertDialogCancel className="w-full">Cancelar</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
