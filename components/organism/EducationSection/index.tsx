import EducationLogo from '../../atoms/EducationLogo';

export default function EducationSection() {
	return (
		<section id="education" className="pt-36 pb-16 bg-slate-100">
			<div className="container">
				<div className="w-full px-4">
					<div className="max-w-xl mx-auto text-center mb-16">
						<h4 className="font-semibold text-lg text-primary mb-2">Education</h4>
						<h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Recent Education</h2>
						<p className=" font-medium text-md text-secondary md:text-lg">Now I'm studying at UAD Yogyakarta majoring in Informatics Engineering. Why did I choose this? Because I aspire to
                    be a good programmer, especially as a Back-End Developer.</p>
					</div>
				</div>
				<div className="w-full px-4 flex flex-wrap justify-center">
					<EducationLogo src='/images/education/UAD.png' alt='UAD Yogyakarta' title='Ahmad Dahlan University, Yogyakarta' mastery='Bachelor of Informatics Engineering'/>
					<EducationLogo src='/images/education/SMTI.png' alt='SMK SMTI Yogyakarta' title='SMK SMTI, Yogyakarta' mastery='Field of Study in Industrial Chemistry'/>
				</div>
			</div>
		</section>
	);
}