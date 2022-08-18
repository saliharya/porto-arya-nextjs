import Image from 'next/image';

interface certificateProps {
    href:string;
    src:string;
}

export default function Certificate(props:certificateProps) {

	const {href, src} = props;

	return (
		<a href={href}
			className="max-w-[300px] lg:max-w-[500px] mx-4 py-4 grayscale opacity-80 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8">
			<Image src={src} alt="certificate" width={3509} height={2480} />
		</a>
	);
}