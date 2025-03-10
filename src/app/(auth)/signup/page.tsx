import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createRequestAuth } from "@/utils/createRequest";
import { redirect } from "next/navigation";

export default function SignUp() {
  const handleFormSignUp = async (form: FormData) => {
    "use server";
    const newUser = {
      nome: form.get("name"),
      email: form.get("email"),
      senha: form.get("password"),
    };

    if (!newUser.nome || !newUser.email || !newUser.senha) return;

    await createRequestAuth("/usuarios", {
      method: "POST",
      body: JSON.stringify(newUser),
    });

    redirect("/signin");
  };
  return (
    <form
      action={handleFormSignUp}
      className="px-4 py-12 space-y-12 md:py-24 md:px-6"
    >
      <div className="mx-auto max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Cadastro</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Cadastre-se e crie suas transações
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" placeholder="m@example.com" name="name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="m@example.com"
            type="email"
            name="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" name="password" />
        </div>
        <Button className="w-full">Cadastrar</Button>
      </div>
    </form>
  );
}
