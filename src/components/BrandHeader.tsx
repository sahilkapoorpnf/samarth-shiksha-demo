import logo from "@/assets/bitdecentro-logo.png";

const BrandHeader = () => (
  <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
    <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img src={logo} alt="BitDecentro" className="h-8" />
      </div>
      <div className="text-right">
        <p className="font-display text-xs font-semibold text-primary">Samarth Shiksha</p>
        <p className="text-[10px] text-muted-foreground">Learning Ability Support System</p>
      </div>
    </div>
  </header>
);

export default BrandHeader;
