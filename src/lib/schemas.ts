import z from "zod";

const addUser = z.object({
  name: z.string().min(2, "Imie musi mieć co najmniej 2 znaki").max(100),
  username: z
    .string()
    .min(2, "Nazwa użytkownika musi mieć co najmniej 2 znaki")
    .max(50),
  email: z.email("Nieprawidłowy format email"),
  street: z
    .string()
    .min(2, "Nazwa ulicy musi mieć co najmniej 2 znaki")
    .max(100),
  suite: z
    .string()
    .min(2, "Nazwa apartamentu musi mieć co najmniej 2 znaki")
    .max(100),
  city: z
    .string()
    .min(2, "Nazwa miasta musi mieć co najmniej 2 znaki")
    .max(100),
  zipcode: z
    .string()
    .min(5, "Kod pocztowy musi mieć co najmniej 5 znaków")
    .max(20)
    .refine((val) => /^\d{2}-\d{3}$/.test(val), {
      message: "Kod pocztowy musi być w formacie XX-XXX",
    }),
  phone: z
    .string()
    .min(9, "Numer telefonu musi mieć 9 znaków")
    .max(9, "Numer telefonu musi mieć 9 znaków"),

  company_name: z
    .string()
    .min(2, "Nazwa firmy musi mieć co najmniej 2 znaki")
    .max(100)
    .optional(),
  company_catchPhrase: z
    .string()
    .max(200, "Fraza musi mieć co najwyżej 200 znaków")
    .optional(),
  company_bs: z
    .string()
    .max(200, "BS musi mieć co najwyżej 200 znaków")
    .optional(),
});

type AddUserType = z.infer<typeof addUser>;

export { addUser, type AddUserType };
