function Footer() {
  const now = new Date();

  return (
    <footer className="text-muted-foreground mt-auto flex flex-col items-center gap-1 border-t border-dashed p-4 text-sm">
      <h2>Maciej Polowy</h2>
      <p>724 562 555</p>
      <p>{now.getFullYear()}</p>
    </footer>
  );
}

export default Footer;
