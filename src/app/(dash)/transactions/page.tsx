import { List } from "@/components/dash/List";
import { Modal } from "@/components/dash/Modal";

export default function Transactions() {
  return (
    <>
      <Modal />
      <List />
      <div className="mt-8 overflow-hidden border rounded-lg"></div>
    </>
  );
}
