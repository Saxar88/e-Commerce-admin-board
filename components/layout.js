import Nav from '@/components/nav';
import { useSession, signIn } from 'next-auth/react';

export default function Layout({ children }) {
	const { data: session } = useSession();

	if (session) {
		return (
			<div className='flex h-screen min-w-10 bg-gray-900'>
				<Nav />
				<div className='flex flex-grow flex-col justify-center items-center my-2 mr-2 gap-y-3 p-4 bg-gray-100 rounded-lg'>
					{children}
				</div>
			</div>
		);
	}
	return (
		<div className='flex justify-center w-screen h-screen bg-gray-900'>
			<div className='flex flex-col justify-center gap-y-3 text-slate-100'>
				Not signed in <br />
				<button
					onClick={() => signIn('google')}
					className='px-4 py-2 text-black font-semibold bg-slate-200 rounded-lg'>
					Sign in
				</button>
			</div>
		</div>
	);
}
