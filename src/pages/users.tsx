import { useUsersQuery } from "@/api/users";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function Users() {
  const { data: users, error, isLoading } = useUsersQuery();

  if (isLoading) {
    return <div>Ładowanie...</div>;
  }

  if (error) {
    return <div>Wystąpił błąd podczas pobierania użytkowników.</div>;
  }

  return (
    <>
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
                <TableCell className="font-medium">{id}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{fullAddress}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default Users;
