import logoImage from "@assets/1_1754229183533.png";

export function CodeMuseLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img 
      src={logoImage}
      alt="Code Muse Logo"
      className={`${className} object-contain`}
    />
  );
}
