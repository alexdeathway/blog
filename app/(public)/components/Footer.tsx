import Link from "next/link"

export default function Footer() {
	return (
		<footer className="flex h-24 w-full flex-col items-center justify-center gap-2 border-t border-neutral-200 bg-primary-bg text-center text-sm text-black dark:border-neutral-800 dark:bg-[#0F172A] dark:text-primary-100 sm:text-base">
			<div className="flex w-fit justify-evenly gap-7 text-primary dark:text-[#6d55be] md:gap-9">
				<Link
					href="https://alexdeathway.me"
					rel="nofollow noopener noreferrer"
					target="_blank"
					className="hover:underline transition-colors"
				>
					alexdeathway.me
				</Link>

				<Link
					href="https://github.com/alexdeathway"
					rel="nofollow noopener noreferrer"
					target="_blank"
					className="hover:underline transition-colors"
				>
					Github
				</Link>
			</div>

			<p>
				blog{" "}
				<Link
					href="https://blog.alexdeathway.me"
					rel="nofollow noopener noreferrer"
					target="_blank"
					className="font-bold text-primary dark:text-[#6d55be] hover:underline transition-colors"
				>
					@AlexDeathway
				</Link>{" "}
				© {new Date().getFullYear()}
			</p>
		</footer>
	)
}
