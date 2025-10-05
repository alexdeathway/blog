import Link from "next/link"

export default function Footer() {
	return (
		<footer className="flex h-24 w-full flex-col items-center justify-evenly bg-primary-bg text-center text-sm text-black dark:bg-[#0F172A] dark:text-primary-100 sm:text-base">
			<div className="flex w-fit justify-evenly gap-7 text-primary dark:text-[#6d55be] md:gap-9">
				<Link href="/team">Source code</Link>
				<Link
					href="https://github.com/alexdeathway/blog"
					rel="nofollow noopener noreferrer"
					target="_blank"
				>
					Github
				</Link>
			</div>
			<p>
				Source code{" "}
				<Link
					href="httpsL//github.com/alexdeathway/blog"
					rel="nofollow noopener noreferrer"
					target="_blank"
					className="font-bold text-primary dark:text-[#6d55be]"
				>
					Github
				</Link>{" "}
				{new Date().getFullYear()}
			</p>
		</footer>
	)
}
