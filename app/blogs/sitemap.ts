import { getPostsIds } from "@/api/req"
import { MetadataRoute } from "next"

const BASE_URL = "https://muzammilloya-portfolio.vercel.app"


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Google's limit is 50,000 URLs per sitemap
    const posts = await getPostsIds()

    return posts.map((post) => {
        return {
            url: `${BASE_URL}/blogs/${post.id}`,
            lastModified: post.updatedAt,
        }
    })

}