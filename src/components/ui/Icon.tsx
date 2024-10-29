// components/ui/Icon.tsx
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconProps {
  as: LucideIcon;
  className?: string;
}

const Icon = ({ as: IconComponent, className }: IconProps) => (
  <IconComponent className={`text-white ${className}`} />
);

export default Icon;
