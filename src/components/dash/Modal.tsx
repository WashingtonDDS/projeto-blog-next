import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Form } from "./Form";

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
          <Form />
          <AlertDialogFooter>
            <AlertDialogCancel className="w-full">Cancelar</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
