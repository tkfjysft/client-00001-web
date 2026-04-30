import Link from "next/link";

interface ContactButtonProp {
	className?: string;
}

const ContactButton = ({className}:ContactButtonProp) => (
  <>
    <Link
      href="/contact"
      className={`${className}
	  			   items-center justify-center
				   px-6 py-2.5 rounded-full 
                   bg-clr-primary-1
                   text-clr-base-2 font-bold text-center
                   hover:scale-105 transition-all active:scale-95
				   `}
    >
      Contact
    </Link>
  </>
);

export default ContactButton;