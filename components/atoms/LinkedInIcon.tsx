import Image from 'next/image';
import Link from 'next/link';

export default function LinkedinIcon() {
	return (
		<Link href='https://www.linkedin.com/in/aryagumilang/'>
			<a target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white" rel="noreferrer">
				<Image src='/images/svg/linkedin.svg' width={20} height={20}/>
			</a>
		</Link>
	);
}