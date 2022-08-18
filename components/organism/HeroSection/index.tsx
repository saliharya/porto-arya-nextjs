import Image from 'next/image';

/* eslint-disable react/no-unescaped-entities */
export default function HeroSection() {
	return (
		<section id="home" className="pt-36">
			<div className="container">
				<div className="flex flex-wrap">
					<div className="w-full self-center px-4 lg:w-1/2">
						<h1 className="text-base font-semibold text-primary md:text-xl">Hi Guys! 👋, <span
							className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">I'm Salih Arya Gumilang </span>
						</h1>
						<h2 className="font-medium text-secondary text-lg mb-2 lg:text-2xl">Informatics College Student </h2>
						<p className="text-400 mb-5 leading-relaxed">Ahmad Dahlan University, Yogyakarta</p>
						<a href="#contact"
							className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-75 transition duration-200 ease-in-out">Contact
                        Me </a>
					</div>
					<div className="w-full self-end px-4 lg:w-1/2">
						<div className="relative mt-10 lg:mt-0 lg:right-0">
							<Image src="/images/aryaphoto.PNG" width={1463} height={2048} alt="Salih Arya Gumilang" className="max-w-full mx-auto"/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}