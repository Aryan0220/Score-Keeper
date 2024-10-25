import Link from "next/link";

const Footer = () => {
  return (
    <p className="bg-card py-2 absolute bottom-0 w-full text-center">
      Made by
      <Link className="text-indigo-400/80 pl-1" href="https://github.com/Aryan0220">
        @Aryan0220
      </Link>
    </p>
  );
};

export default Footer;
