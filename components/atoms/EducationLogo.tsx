import Image from 'next/image';

interface educationLogoProps {
    src:string;
    alt:string;
    title:string;
    mastery:string;
}

export default function EducationLogo(props:educationLogoProps) {

	const {src, title, alt, mastery} = props;

	return (
		<div className="mb-12 p-4 md:w-1/2 sm:flex justify-center flex-col items-center">
			<div className="rounded-md shadow-md overflow-hidden flex justify-center">
				<Image src={src} alt={alt} height={200} width={200}/>
			</div>
			<h3 className="font-semibold text-dark text-xl mt-5 mb-3">{title}</h3>
			<p className="font-medium text-base text-secondary">{mastery}</p>
		</div>
	);
}
