interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  variant?: 'primary' | 'outline'; // Nova prop
}

export function Tag({ 
  isActive = false, 
  variant = 'primary', 
  className, 
  ...props 
}: TagProps) {
  
  
  const variantStyles = {
    primary: isActive 
      ? "bg-[#FE7C01] text-white border-[#FE7C01]" 
      : "bg-black text-white border-black hover:bg-transparent hover:text-[#858585] hover:border-[#A2A2A2]!",
    
    outline:  "out bg-transparent text-[#858585] border-[#A2A2A2]! cursor-default!" 
  };

  return (
    <button 
      className={`
        tag 
        ${variantStyles[variant]} 
        ${className}
      `}
      {...props}
    />
  );
}