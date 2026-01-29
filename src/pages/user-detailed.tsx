import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Address from "@/components/user/address";
import Company from "@/components/user/company";
import PersonalData from "@/components/user/personal-data";
import { useAllUsers } from "@/hooks/users";
import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

function UserDetailed() {
  const { id } = useParams<{ id: string }>();
  const { allUsers: users, error, isLoading } = useAllUsers();
  const singleUser = users.find((user) => user.id.toString() === id);

  if (!users || !singleUser || users.length === 0)
    return (
      <div className="grid size-full place-items-center text-2xl font-bold">
        Brak użytkowników
      </div>
    );

  if (isLoading) {
    return (
      <div className="grid size-full place-items-center text-2xl font-bold">
        Ładowanie...
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid size-full place-items-center text-2xl font-bold">
        Wystąpił błąd podczas pobierania użytkowników.
      </div>
    );
  }

  const {
    name,
    id: userId,
    username,
    email,
    address,
    company,
    phone,
    website,
  } = singleUser;

  return (
    <div className="space-y-8">
      <Button asChild>
        <Link to="/users">
          <ChevronLeft /> Powrót
        </Link>
      </Button>

      <Card className="text-muted-foreground">
        <CardHeader className="border-b border-dashed">
          <CardTitle>
            <h1 className="text-foreground mb-2 text-lg font-bold">
              Dane użytkownika
            </h1>
            <div className="flex items-center justify-between gap-2">
              <h2>{name}</h2>
              <p className="text-foreground">ID: {userId}</p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <PersonalData
            username={username}
            email={email}
            phone={phone}
            website={website}
          />

          <Address address={address} />

          {company.name || company.catchPhrase || company.bs ? (
            <Company company={company} />
          ) : (
            <h2 className="text-destructive mb-2 text-lg font-bold">
              Brak danych firmy
            </h2>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default UserDetailed;
