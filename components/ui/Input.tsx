// components/ui/Input.tsx
import { InputHTMLAttributes } from "react";

// Aqui dizemos que nosso Input aceita TUDO que um input comum aceita
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className, ...props }: InputProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <input
        {...props} // Isso repassa onChange, value, placeholder, etc.
        className={`w-full px-4 py-2 border rounded-lg transition-all
        focus:outline-none focus:ring-2 focus:ring-orange-500 
        placeholder:text-gray-400 ${className}`}
      />
    </div>
  );
}