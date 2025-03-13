import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
export function Header() {
  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
  };
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold lg:text-4xl xl:text-5xl flex justify-between">
        cubosFin - DASH
        <Button>Sair</Button>
      </h1>
      <p>Olá, Visitante</p>
    </div>
  );
}
