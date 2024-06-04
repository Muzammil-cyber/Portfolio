import RSS from "rss"

import { BASE_URL } from "@/utils/defualts";
import { getPostsMeta } from "@/api/req";


export async function GET() {
    const feed = new RSS({
        title: 'Muzammil Loya\'s Blog',
        description: "I'm Muzammil Loya, a software engineer passionate about clean code & UX. Check out my portfolio and recent blog posts on recent techs!",
        generator: 'RSS for Node and Next.js',
        feed_url: BASE_URL + '/feed.xml',
        site_url: BASE_URL,
        managingEditor: 'muzammil-cyber (Muzammil Loya)',
        webMaster: 'muzammil-cyber (Muzammil Loya)',
        copyright: `Copyright ${new Date().getFullYear().toString()}, Muzammil Loya`,
        language: 'en-US',
        pubDate: new Date().toUTCString(),
        ttl: 60,
    });

    const allPosts = await getPostsMeta()

    if (allPosts) {
        allPosts.map((post) => {
            feed.item({
                title: post.title,
                description: post.desc.text,
                url: `${BASE_URL}/blogs/${post.id}`,
                categories: [post.topic],
                author: "Muzammil Loya",
                date: post.createdAt,
            });
        });
    }

    return new Response(feed.xml({ indent: true }), {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',

        },

    });
}
