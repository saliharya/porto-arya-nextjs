import Certificate from '../../atoms/Certificate';

const certificates = [
	{
		id: 0,
		imageSrc: '/images/certificates/backend.svg',
		url:'https://www.dicoding.com/certificates/QLZ9KOLQDZ5D'
	},
	{
		id: 1,
		imageSrc: '/images/certificates/backend.svg',
		url:'https://www.dicoding.com/certificates/QLZ9KOLQDZ5D'
	},
	{
		id: 2,
		imageSrc: '/images/certificates/backend.svg',
		url:'https://www.dicoding.com/certificates/QLZ9KOLQDZ5D'
	},
	{
		id: 3,
		imageSrc: '/images/certificates/backend.svg',
		url:'https://www.dicoding.com/certificates/QLZ9KOLQDZ5D'
	},
	{
		id: 4,
		imageSrc: '/images/certificates/backend.svg',
		url:'https://www.dicoding.com/certificates/QLZ9KOLQDZ5D'
	},
	{
		id: 5,
		imageSrc: '/images/certificates/backend.svg',
		url:'https://www.dicoding.com/certificates/QLZ9KOLQDZ5D'
	},
	{
		id: 6,
		imageSrc: '/images/certificates/backend.svg',
		url:'https://www.dicoding.com/certificates/QLZ9KOLQDZ5D'
	},
];

export default function CertificateSection() {
	return (
		<section id="certificates" className="pt-36 pb-32 bg-slate-700">
			<div className="container">
				<div className="w-full px-4">
					<div className="mx-auto text-center mb-16">
						<h4 className="font-semibold text-lg text-primary mb-2">Course</h4>
						<h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Certificates</h2>
						<p className="font-medium text-md text-secondary md:text-lg">These are some online courses I have completed</p>
					</div>

				</div>
				<div className="w-full px-4">
					<div className="flex flex-wrap items-center justify-center">

						{
							certificates.map((certificate) => (
								<Certificate key={certificate.id} src={certificate.imageSrc} href={certificate.url} />
							))
						}
					</div>
				</div>
			</div>
		</section>
	);
}
