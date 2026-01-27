import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Card({ children, onClick, className = '' }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white dark:bg-zinc-900 
        rounded-2xl 
        shadow-sm 
        border border-zinc-200 dark:border-zinc-800
        transition-all duration-200
        ${onClick ? 'cursor-pointer hover:shadow-md hover:scale-[1.02] active:scale-[0.98]' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
