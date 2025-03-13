"use client";

import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export function Header() {
  const router = useRouter();
  const [user, setUser] = useState({
    nome: "visitante",
  });
  useEffect(() => {
    const data = Cookies.get("user");
    setUser(data ? JSON.parse(data) : { name: "visitante" });
  }, []);
  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("user");
    router.push("/signin");
  };
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold lg:text-4xl xl:text-5xl flex justify-between">
        cubosFin - DASH
        <Button onClick={logout}>Sair</Button>
      </h1>
      <p>Olá, {user.nome}</p>
    </div>
  );
}
