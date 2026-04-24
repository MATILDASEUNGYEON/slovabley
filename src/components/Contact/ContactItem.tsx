import "./ContactItem.css";

interface ContactItemProps {
  href: string;
  label: string;
  isExternal?: boolean;
}

const ContactItem: React.FC<ContactItemProps> = ({
  href,
  label,
  isExternal = false,
}) => {
  return (
    <a
      href={href}
      className="contact-item"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      <div className="contact-dot"></div>
      {label}
    </a>
  );
};

export default ContactItem;
