import Link from "next/link";

const ContactButton = () => (
  <>
    <Link
      href="/contact"
      className="hidden lg:inline-flex items-center justify-center
				   px-6 py-2.5 rounded-full 
                   bg-clr-primary-1
                   text-clr-base-2 font-bold 
                   hover:scale-105 transition-all active:scale-95"
    >
      Contact
    </Link>
  </>
);

export default ContactButton;