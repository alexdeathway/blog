import FilteredPosts from "../../components/FilteredPosts"
import PostCard from "../../components/PostCard"
import getPostMetadata from "../../components/getPostMetadata"
import getAllUniqueTags from "../../components/getAllUniqueTags"
import { BsHourglassSplit } from "react-icons/bs"
import { Metadata } from "next"

export async function generateMetadata({
	params,
}: {
	params: Promise<{ category: string }>
}): Promise<Metadata> {
	const { category } = await params
	const title =
		category.charAt(0).toUpperCase() + category.slice(1)
	return {
		title: title,
		description: `Posts under the ${title} category.`,
	}
}

export async function generateStaticParams() {
	const tags = getAllUniqueTags()
	return tags.map((tag) => ({
		category: tag,
	}))
}

export default async function Category({ params }: { params: Promise<{ category: string }> }) {
	const postMetadata = getPostMetadata()
	const { category } = await params

	function capitalizeFirstLetter(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1)
	}

	const allTags = getAllUniqueTags()

	return (
		<div>
			<h1 className="font-md my-5 text-center text-3xl dark:text-white">
				All posts under the{" "}
				<span className="font-bold text-primary-200">
					{capitalizeFirstLetter(category)}
				</span>{" "}
				category
			</h1>
			{allTags.includes(category) ? (
				<div className="flex flex-col items-center">
					<FilteredPosts>
						{postMetadata.map((post, index) => {
							if (post.tags.includes(category)) {
								return <PostCard key={index} cardData={post} />
							}
						})}
					</FilteredPosts>
				</div>
			) : (
				<div className="mx-5 mt-20 flex flex-col items-center justify-center gap-2 text-lg xs:flex-row">
					<BsHourglassSplit />
					We cannot find any posts in this category.
				</div>
			)}
		</div>
	)
}
