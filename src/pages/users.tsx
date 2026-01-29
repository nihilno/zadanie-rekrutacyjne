import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAllUsers } from "@/hooks/users";
import { formatUuid } from "@/lib/utils";
import { useState } from "react";

function Users() {
  const [searchQuery, setSearchQuery] = useState("");
  const { allUsers: users, error, isLoading } = useAllUsers();

  if (isLoading) {
    return <div>Ładowanie...</div>;
  }

  if (error) {
    return <div>Wystąpił błąd podczas pobierania użytkowników.</div>;
  }

  return (
    // sortowanie po nazwei asc, desc
    // wyszukiwanie po adresie

    <div>
      <div>
        <Input
          placeholder="Wyszukaj po adresie"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Table className="w-full">
        <TableCaption>Lista użytkowników</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Imię i nazwisko</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Pełny Adres</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map(({ id, name, email, address }) => {
            const fullAddress = [
              address?.street,
              address?.suite,
              address?.city,
              address?.zipcode,
            ]
              .filter(Boolean)
              .join(", ");
            return (
              <TableRow key={id}>
                <TableCell className="font-medium">{formatUuid(id)}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{fullAddress}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default Users;
