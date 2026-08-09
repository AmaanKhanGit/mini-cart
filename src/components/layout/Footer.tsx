export function Footer() {
  return (
    <footer className="border-border bg-background w-full border-t">
      <div className="container mx-auto flex flex-col items-center gap-1 px-4 py-6 text-center">
        <p className="text-muted-foreground text-sm">
          Built by{" "}
          <span className="text-foreground font-medium">Amaan Khan</span>
        </p>
        <p className="text-muted-foreground text-sm">
          A minimal cart app to explore React, TypeScript, and shadcn UI.
        </p>
      </div>
    </footer>
  );
}
