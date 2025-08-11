import logoImage from "@assets/1-nobg-logo.png";

export function CodeMuseLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img 
      src={logoImage}
      alt="Code Muse Logo"
      className={`${className} object-contain`}
    />
  );
}
