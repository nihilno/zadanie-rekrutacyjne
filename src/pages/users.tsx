import DeleteBtn from "@/components/global/delete-btn";
import Loader from "@/components/global/loader";
import { Button } from "@/components/ui/button";
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
import { useAllUsers } from "@/hooks/use-all-users";
import { formatUuid } from "@/lib/utils";
import { ChevronsUpDown, Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const query = searchQuery.toLowerCase().trim();
  const { allUsers: users, error, isLoading, onDeleteUser } = useAllUsers();

  const filteredUsers = users.filter(
    (user) =>
      user.address?.city?.toLowerCase()?.includes(query) ||
      user.address?.street?.toLowerCase()?.includes(query) ||
      user.address?.suite?.toLowerCase()?.includes(query) ||
      user.address?.zipcode?.toLowerCase()?.includes(query),
  );

  const sortedUsers = [...filteredUsers].sort((a, b) =>
    (a.name ?? "").localeCompare(b.name ?? "", undefined, {
      sensitivity: "base",
    }),
  );
  if (sortOrder === "desc") sortedUsers.reverse();
  if (!users || users.length === 0) return <div>Brak użytkowników</div>;
  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Wystąpił błąd podczas pobierania użytkowników.</div>;
  }

  return (
    <div className="w-full max-w-7xl">
      <div className="mb-4 flex items-center gap-2">
        <Input
          placeholder="Wyszukaj po adresie"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          variant="outline"
          onClick={() => setSortOrder((s) => (s === "asc" ? "desc" : "asc"))}
        >
          Sortuj po imieniu: {sortOrder === "asc" ? "A→Z" : "Z→A"}
          <ChevronsUpDown className="ml-2" />
        </Button>
      </div>

      <Table className="w-full">
        <TableCaption>Lista użytkowników</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Imię i nazwisko</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Pełny Adres</TableHead>
            <TableHead />
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedUsers?.map(({ id, name, email, address }) => {
            const fullAddress = [
              address?.street,
              address?.suite,
              address?.city,
              address?.zipcode,
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <TableRow key={id}>
                <TableCell className="font-medium">{formatUuid(id)}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{fullAddress}</TableCell>
                <TableCell className="flex items-center gap-2">
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    asChild
                    title="Zobacz użytkownika"
                  >
                    <Link to={`/users/${id}`}>
                      <Search />
                    </Link>
                  </Button>
                  <DeleteBtn id={id} name={name} onDeleteUser={onDeleteUser} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default Users;
