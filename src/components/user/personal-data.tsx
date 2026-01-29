function PersonalData({ username, email, phone, website }: PersonalDataProps) {
  return (
    <div>
      <h2 className="text-foreground mb-2 text-lg font-bold">Dane osobowe</h2>
      <div className="flex items-center gap-2">
        <p className="text-foreground">Nazwa użytkownika:</p>
        <span> {username}</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-foreground">Email:</p>
        <span>{email}</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-foreground">Telefon:</p>
        <span>{phone}</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-foreground">Strona internetowa:</p>
        <span>{website}</span>
      </div>
    </div>
  );
}

export default PersonalData;
