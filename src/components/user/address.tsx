function Address({ address }: AddressProps) {
  return (
    <div>
      <h2 className="text-foreground mb-2 text-lg font-bold">
        Adres użytkownika
      </h2>
      <div className="flex items-center gap-2">
        <p className="text-foreground">Ulica:</p>
        <span>{address.street}</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-foreground">Apartament/Suite:</p>
        <span>{address.suite}</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-foreground">Miasto:</p>
        <span>{address.city}</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-foreground">Kod pocztowy:</p>
        <span>{address.zipcode}</span>
      </div>
    </div>
  );
}

export default Address;
