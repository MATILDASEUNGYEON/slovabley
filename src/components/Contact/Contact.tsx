import "./Contact.css";
import ContactItem from "./ContactItem";

const Contact: React.FC = () => {
  return (
    <section className="section dark" id="contact">
      <div className="section-inner">
        <p className="section-label">Contact</p>
        <h2 className="section-title">같이 만들어요.</h2>
        <p className="section-body">
          새로운 아이디어가 있으신가요? 언제든지 연락주세요.
        </p>
        <div className="contact-list">
          <ContactItem
            href="mailto:hello@slovabley.com"
            label="hello@slovabley.com"
          />
          <ContactItem
            href="https://github.com/matildaseungyeon"
            label="GitHub → github.com/matildaseungyeon"
            isExternal
          />
          <ContactItem
            href="https://instagram.com/slovabley"
            label="Instagram → @slovabley"
            isExternal
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
