export type TTransaction = {
  id: string;
  description: string;
  price: number;
  dueDate: string;
  status: string;
};
export type TDetailTransactionProps = {
  params: {
    id: string;
  };
};
