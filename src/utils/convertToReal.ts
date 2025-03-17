export const convertToReal = (price: number) => {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "BRL",
  };
  return new Intl.NumberFormat("pt-BR", options).format(price / 100);
};
