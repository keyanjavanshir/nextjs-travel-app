import Image from "next/image"

// As we are using TypeScript we should explicitly state the ButtonProps
type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
    icon?: string;
    variant: string;
    // By giving it the ? attribute, we make it an optional attribute instead of required.
    full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
    type={type}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  )
}

export default Button