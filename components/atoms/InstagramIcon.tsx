import Image from 'next/image';
import Link from 'next/link';

export default function InstagramIcon() {
	return (
		<Link href='https://www.instagram.com/saliharya/'>
			<a target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-primary hover:bg-primary hover:text-white" rel="noreferrer">
				<Image src='/images/svg/ig.svg' width={20} height={20}/>
			</a>
		</Link>
	);
}