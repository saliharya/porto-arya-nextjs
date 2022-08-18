import type { NextPage } from 'next';
import AboutSection from '../components/organism/AboutSection';
import CertificateSection from '../components/organism/CertificateSection';
import ContactSection from '../components/organism/ContactSection';
import EducationSection from '../components/organism/EducationSection';
import HeaderSection from '../components/organism/HeaderSection';
import HeroSection from '../components/organism/HeroSection';

const Home: NextPage = () => {
	return (
		<>
			<HeaderSection />
			<HeroSection />
			<AboutSection />
			<EducationSection />
			<CertificateSection />
			<ContactSection />
		</>
	);
};

export default Home;
