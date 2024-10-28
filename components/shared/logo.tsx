import Link from "next/link";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import { Jockey_One } from "next/font/google";
import { cn } from "@/lib/utils";

const jockyFont = Jockey_One({ subsets: ["latin"], weight: "400" });

const HeaderLogo = ({
  className = "",
  isFooter = false,
}: {
  className?: string;
  isFooter?: boolean;
}) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 text-white transition-colors",
        className,
        !isFooter && "hover:text-primary",
        isFooter && "transition-colors hover:text-white/75",
      )}
    >
      <Image
        src={logo}
        alt="logo"
        width={100}
        height={100}
        priority
        className="w-8 lg:w-10"
      />
      <span className={cn(jockyFont.className, "text-2xl lg:text-3xl")}>
        Farmbuddy
      </span>
    </Link>
  );
};
export default HeaderLogo;
