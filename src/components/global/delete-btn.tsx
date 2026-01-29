import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { Button } from "../ui/button";

function DeleteBtn({
  id,
  name,
  onDeleteUser,
}: {
  id: string;
  name: string;
  onDeleteUser: (id: string) => void;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"destructive"} size={"icon"} title="Usuń użytkownika">
          <X />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Czy jesteś absolutnie pewien?</DialogTitle>
          <DialogDescription>
            Ta akcja jest nieodwracalna. Użytkownik{" "}
            <span className="text-foreground font-semibold">{name}</span>{" "}
            zostanie usunięty z listy.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-2">
          <DialogClose asChild>
            <Button onClick={() => onDeleteUser(id)}>
              Tak, usuń użytkownika
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="outline" className="w-full">
              Anuluj
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DeleteBtn;
