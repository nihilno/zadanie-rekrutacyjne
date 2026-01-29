import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAllUsers } from "@/hooks/users";
import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

function UserDetailed() {
  const { id } = useParams<{ id: string }>();
  const { allUsers: users, error, isLoading } = useAllUsers();
  const singleUser = users.find((user) => user.id.toString() === id);

  if (!users || !singleUser || users.length === 0)
    return <div>Brak użytkowników</div>;

  if (isLoading) {
    return <div>Ładowanie...</div>;
  }

  if (error) {
    return <div>Wystąpił błąd podczas pobierania użytkowników.</div>;
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
    <div>
      <Button asChild>
        <Link to="/users">
          <ChevronLeft /> Powrót
        </Link>
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>
            Dane użytkownika
            <CardDescription>
              <div className="flex items-center justify-between gap-2">
                <h1>{name}</h1>
                <span>ID: {userId}</span>
              </div>
            </CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h2>Dane osobowe</h2>
          <div>{username}</div>
          <div>{email}</div>
          <div>{phone}</div>
          <div>{website}</div>
          <div>{username}</div>
          <div>{username}</div>

          <h2>Adres użytkownika</h2>
          <div>
            {address.street ?? ""}, {address.suite ?? ""}, {address.city ?? ""},{" "}
            {address.zipcode ?? ""}
          </div>

          <h2>Dane firmy</h2>
          <div>
            {company.name ?? ""}, {company.catchPhrase ?? ""},{" "}
            {company.bs ?? ""}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default UserDetailed;
