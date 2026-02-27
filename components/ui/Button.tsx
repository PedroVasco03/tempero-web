interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  const styles = {
    primary: `
      bg-[#FE7C01] text-[#ffffff] 
      hover:bg-[#D0670C] 
      disabled:bg-[#C0C0C0]  disabled:text-[#A2A2A2] disabled:cursor-not-allowed
    `,
    secondary: `
      bg-[#F86E6E] text-[#FAFAFA] 
      hover:bg-[#FA3F3F] hover:text-[#FFFFFF] hover:border-[#AE2D2D]
      disabled:bg-[#C0C0C0]  disabled:text-[#A2A2A2] disabled:cursor-not-allowed
    `,
    outline: `
      bg-transparent text-[#4E4E4E] border-2 border-[#4E4E4E]
      hover:bg-[#1E1E1E hover:text-[#1E1E1E]
      disabled:border-[#A2A2A2] disabled:text-[#A2A2A2] disabled:cursor-not-allowed
    `
  };

  return (
    <button 
      className={`
        btn transition-all duration-300
        flex items-center justify-center gap-2
        ${styles[variant]} 
        ${className}
      `}
      {...props}
    />
  );
}