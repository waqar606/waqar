import { cn } from "@/lib/utils";
import Link from "next/link";
import { Fragment } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import toast from "react-hot-toast";
import { MdDarkMode } from "react-icons/md";
import { DATA } from "@/data/resume";

const IconButtonWithAnimation = ({
  variant,
  isBlack,
}: {
  variant: "facebook" | "linkedin" | "github" | "instagram" | "phone";
  isBlack?: boolean;
}) => {
  function returnLink() {
    let link;
    switch (variant) {
      case "facebook":
        link = DATA.contact.social.Facebook.url;
        break;
      case "github":
        link = DATA.contact.social.GitHub.url;
        break;
      case "instagram":
        link = DATA.contact.social.Instagram.url;
        break;
      case "linkedin":
        link = DATA.contact.social.LinkedIn.url;
        break;
      default:
        link = "";
        break;
    }
    return link;
  }

  const classNames = cn(
    "rounded-3xl duration-300 border overflow-hidden px-[6px]",
    isBlack
      ? "hover:bg-primary bg-primary-foreground primary hover:text-primary-foreground border-primary"
      : "hover:bg-primary-foreground bg-primary primary-foreground hover:text-primary border-primary-foreground",
    "w-[32px] h-[32px] ",
    variant === "facebook" && "hover:w-[110px]",
    variant === "instagram" && "hover:w-[120px]",
    variant === "github" && "hover:w-[100px]",
    variant === "phone" && "hover:w-[90px]",
    variant === "linkedin" && "hover:w-[110px]",
    "flex items-center justify-start gap-2",
    "uppercase",
    "text-sm"
  );

  const content = (
    <Fragment>
      {variant === "github" && (
        <>
          <FaGithub className="flex-shrink-0" size={18} />
          <p>github</p>
        </>
      )}
      {variant === "linkedin" && (
        <>
          <FaLinkedin className="flex-shrink-0" size={18} />
          <p>linkedin</p>
        </>
      )}
      {variant === "instagram" && (
        <>
          <FaInstagram className="flex-shrink-0" size={18} />
          <p>instagram</p>
        </>
      )}
      {variant === "facebook" && (
        <>
          <FaFacebook className="flex-shrink-0" size={18} />
          <p>facebook</p>
        </>
      )}
      {variant === "phone" && (
        <>
          <FaPhone className="flex-shrink-0" size={18} />
          <p>phone</p>
        </>
      )}
    </Fragment>
  );

  if (variant === "phone") {
    return (
      <button
        onClick={() => {
          navigator.clipboard
            .writeText("+923302546626")
            .then(() => toast.success("Phone Number copied to clipboard"))
            .catch((err) => console.error("Failed to copy:", err));
        }}
        className={classNames}
      >
        {content}
      </button>
    );
  }

  return (
    <Link href={returnLink()} target={"_blank"} className={classNames}>
      {content}
    </Link>
  );
};

export default IconButtonWithAnimation;
