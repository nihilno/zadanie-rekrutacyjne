import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUsersContext } from "@/contexts/users-context";
import { addUser, type AddUserType } from "@/lib/schemas";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function UsersAdd() {
  const [addCompany, setAddCompany] = useState(false);
  const { setLocalUsers } = useUsersContext();
  const navigate = useNavigate();

  const form = useForm<AddUserType>({
    resolver: zodResolver(addUser),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      phone: "",
      company_name: undefined,
      company_catchPhrase: undefined,
      company_bs: undefined,
    },
    mode: "onBlur",
  });

  function onSubmit(data: AddUserType) {
    const obj = {
      id: crypto.randomUUID(),
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      website: "",
      address: {
        street: data.street,
        suite: data.suite,
        city: data.city,
        zipcode: data.zipcode,
      },
      company: {
        name: data.company_name ?? "",
        catchPhrase: data.company_catchPhrase ?? "",
        bs: data.company_bs ?? "",
      },
    };

    setLocalUsers((prev) => [...prev, obj]);

    toast.success("Dodano użytkownika pomyślnie!");
    form.reset();
    navigate("/users");
  }

  const separatorStyle = "grid grid-cols-2 gap-4";
  const isLoading = form.formState.isSubmitting;

  return (
    <div className="w-full max-w-7xl space-y-16 text-center">
      <h1 className="text-3xl font-bold">Dodaj użytkownika</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className={separatorStyle}>
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imię i nazwisko</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Jan Kowalski" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nazwa użytkownika</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="janek123" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className={separatorStyle}>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="jan.kowalski@example.com" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="street"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ulica</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="ul. Kwiatowa 15" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className={separatorStyle}>
            <FormField
              name="suite"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Apartament</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Apt. 4B" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="city"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Miasto</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Warszawa" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className={separatorStyle}>
            <FormField
              name="zipcode"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Kod pocztowy</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="00-001" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefon</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="+48 123 456 789" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className={cn(addCompany ? "block space-y-4" : "hidden")}>
            <FormField
              name="company_name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nazwa firmy (opcjonalnie)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Tested Solutions" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="company_catchPhrase"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hasło reklamowe (opcjonalnie)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Innowacja twojego świata" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="company_bs"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Branża (opcjonalnie)</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Technologia" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-3 gap-8">
            <Button
              className="mr-4 w-full"
              type="button"
              onClick={() => setAddCompany((prev) => !prev)}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2Icon className="size-4 animate-spin" />
              ) : addCompany ? (
                "Ukryj dane firmy"
              ) : (
                "Dodaj dane firmy"
              )}
            </Button>

            <Button
              type="submit"
              className="col-span-2 w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2Icon className="size-4 animate-spin" />
              ) : (
                "Dodaj użytkownika"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default UsersAdd;
