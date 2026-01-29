function Company({ company }: CompanyProps) {
  return (
    <div>
      <h2 className="text-foreground mb-2 text-lg font-bold">Dane firmy</h2>
      <div className="flex items-center gap-2">
        <p className="text-foreground">Nazwa firmy:</p>
        <span>{company.name ?? "--"}</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-foreground">Hasło reklamowe:</p>
        <span>{company.catchPhrase ?? "--"}</span>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-foreground">Branża:</p>
        <span>{company.bs ?? "--"}</span>
      </div>
    </div>
  );
}

export default Company;
