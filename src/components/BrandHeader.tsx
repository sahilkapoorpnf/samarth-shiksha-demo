import logo from "@/assets/bitdecentro-logo.png";

const BrandHeader = () => (
  <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
    <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="BitDecentro" className="h-9" />
        <div className="hidden sm:block h-6 w-px bg-border" />
        <div className="hidden sm:block">
          <p className="font-display text-sm font-bold text-foreground leading-tight">Samarth Shiksha</p>
          <p className="text-[10px] text-muted-foreground leading-tight">Learning Ability Support System</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-bold bg-secondary/10 text-secondary px-2.5 py-1 rounded-full">DEMO v2.0</span>
        <div className="sm:hidden text-right">
          <p className="font-display text-xs font-bold text-primary">Samarth Shiksha</p>
        </div>
      </div>
    </div>
  </header>
);

export default BrandHeader;
