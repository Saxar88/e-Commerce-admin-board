import { useSession, signIn, signOut } from 'next-auth/react';

export default function LoginBtn() {
	const { data: session } = useSession();
	if (session) {
		return (
			<div className='flex flex-col justify-center gap-y-3 text-slate-200'>
				Signed in as {session.user.email} <br />
				<button
					onClick={() => signOut()}
					className='px-4 py-2 text-black font-semibold bg-slate-200 rounded-lg'>
					Sign out
				</button>
			</div>
		);
	}
	return (
		<div className='flex flex-col justify-center gap-y-3 text-slate-200'>
			Not signed in <br />
			<button
				onClick={() => signIn('google')}
				className='px-4 py-2 text-black font-semibold bg-slate-200 rounded-lg'>
				Sign in
			</button>
		</div>
	);
}
