import FacebookIcon from '../../atoms/FacebookIcon';
import InstagramIcon from '../../atoms/InstagramIcon';
import LinkedinIcon from '../../atoms/LinkedInIcon';

export default function AboutSection() {
	return (
		<section id="about" className="pt-36 pb-32">
			<div className="container">
				<div className="flex flex-wrap">
					<div className="w-full px-4 mb-10 lg:w-1/2">
						<h4 className="font-bold uppercase text-primary text-lg mb-3">About Me</h4>
						<h2 className="font-bold text-dark text-3xl mb-3 max-w-md lg:text-4xl">You can call me arya!</h2>
						<p className="font-medium text-base text-secondary max-w-xl lg:text-lg">Hello, my name is Salih Arya Gumilang. I was born in Surakarta, January 2001. I am currently studying at UAD Yogyakarta
                    majoring in Informatics Engineering</p>
					</div>
					<div className="w-full px-4 lg:w-1/2">
						<h3 className="font-semibold text-dark text-2xl mb-4 lg:text-3xl lg:pt-10">Let's be friend</h3>
						<p className="font-medium text-base text-secondary mb-6 lg:text-lg">If you want to know more, please click social media links below</p>
						<div className="flex items-center">
							<LinkedinIcon />
							<FacebookIcon />
							<InstagramIcon />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
