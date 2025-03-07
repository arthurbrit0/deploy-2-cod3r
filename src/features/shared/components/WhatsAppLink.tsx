import { twm } from "@/utils/tw";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export interface WhatsAppLinkProps {
  className?: string;
}

export default function WhatsAppLink(props: WhatsAppLinkProps) {
  return (
    <div
      className={twm(
        "flex justify-center items-center bg-green-600 p-2 rounded-full",
        props.className
      )}
    >
      <a
        href="https://api.whatsapp.com/send/?phone=5585987718085&text&type=phone_number"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconBrandWhatsapp size={24} stroke={1.3} className="md:hidden block" />
        <IconBrandWhatsapp size={32} stroke={1.3} className="hidden md:block" />
      </a>
    </div>
  );
}
