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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

function UsersAdd() {
  const [addCompany, setAddCompany] = useState(true);
  const { setLocalUsers } = useUsersContext();

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
  }

  const separatorStyle = "grid grid-cols-2 gap-4";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-6xl space-y-4"
      >
        <div className={separatorStyle}>
          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Imię i nazwisko</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                  <Input {...field} />
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
                  <Input {...field} />
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
                  <Input {...field} />
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
                  <Input {...field} />
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
                  <Input {...field} />
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
                  <Input {...field} />
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
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          className="mr-4"
          type="button"
          onClick={() => setAddCompany((prev) => !prev)}
        >
          Masz firmę?
        </Button>

        <div className={cn(addCompany ? "block" : "hidden")}>
          <FormField
            name="company_name"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nazwa firmy</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Hasło reklamowe</FormLabel>
                <FormControl>
                  <Input {...field} />
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
                <FormLabel>Branża</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">Dodaj użytkownika</Button>
      </form>
    </Form>
  );
}

export default UsersAdd;
