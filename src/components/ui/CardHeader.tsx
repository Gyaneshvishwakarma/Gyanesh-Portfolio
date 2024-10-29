// components/ui/CardHeader.tsx
import React from 'react';

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeader = ({ children, className }: CardHeaderProps) => (
  <div className={`font-bold text-xl mb-2 ${className}`}>
    {children}
  </div>
);

export default CardHeader;
