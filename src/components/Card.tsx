interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-white/95 backdrop-blur-sm rounded-xl shadow-soft border border-earth-100/50 p-6 transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}
