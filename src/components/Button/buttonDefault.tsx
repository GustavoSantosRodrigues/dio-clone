interface ButtonDefaultProps {
  title: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
}

export default function ButtonDefault({
  title,
  type = 'button',
  onClick,
  className = '',
}: ButtonDefaultProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative inline-flex items-center justify-center
        px-8 py-3
        rounded-full
        font-semibold text-white
        bg-pink-600
        border-2 border-pink-500
        shadow-[0_0_0_4px_rgba(236,72,153,0.25)]
        hover:bg-pink-500
        hover:shadow-[0_0_0_6px_rgba(236,72,153,0.35)]
        transition-all duration-300
        ${className}
      `}
    >
      {title}
    </button>
  )
}
