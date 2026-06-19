import AboutSection from "@/widgets/home/AboutSection";
import HeroSection from "@/widgets/home/HeroSection";
import HightLightBoxes from "@/widgets/home/HighlighBoxes";
import TopDestinations from "@/widgets/home/TopDestinations";
export default function Home() {
	return (
		<>
			<HeroSection />
			<div className="container mx-auto"></div>
			<div className="h-8" />
			<HightLightBoxes />
			<div className="h-8" />
			<TopDestinations />
			<div className="h-8" />
			<AboutSection />
			<div className="h-8" />
			<div className="h-8" />
		</>
	);
}
