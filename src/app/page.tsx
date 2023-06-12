import { ServicesList } from '@/components/homepage/ServicesList';
import { ConnectContainer } from '@/components/homepage/ConnectContainer';
import { ContactContainer } from '@/components/homepage/ContactContainer';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <ConnectContainer />
      <ServicesList />
      <ContactContainer />
      <Footer />
    </>
  );
}
