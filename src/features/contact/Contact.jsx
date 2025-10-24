import { Helmet, HelmetProvider } from "react-helmet-async";
import ContactSocials from "./ContactSocials";

function Contact() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Rumaisa Naveed | Contact</title>
      </Helmet>
      <div className="flex w-full flex-col gap-x-8 gap-y-8 bg-mainBg px-8 pt-5 xl:flex-row xl:divide-x-2 xl:divide-accentColor">
        <ContactSocials />
      </div>
    </HelmetProvider>
  );
}

export default Contact;
