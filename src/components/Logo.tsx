/** Logo mark — uses the actual brand PNG. */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <img
      src="/LOGO.png"
      alt="StudyFlow"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="object-contain"
    />
  );
}

export default function Logo({
  className = "h-8",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "footer";
}) {
  const textFill = variant === "footer" ? "#ffffff" : "#1E3A5F";
  const accentFill = variant === "footer" ? "#5cb8b8" : "#2F7F7F";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <LogoMark size={34} />
      <svg
        viewBox="0 0 140 30"
        className="h-[22px] w-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="0"
          y="23"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="600"
          fontSize="24"
          fill={textFill}
        >
          Study
        </text>
        <text
          x="74"
          y="23"
          fontFamily="Inter, system-ui, sans-serif"
          fontWeight="600"
          fontSize="24"
          fill={accentFill}
        >
          Flow
        </text>
      </svg>
    </div>
  );
}
