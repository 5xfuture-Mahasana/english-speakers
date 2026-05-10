export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/English Spearkers logo.png"
        alt="English Speakers Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
