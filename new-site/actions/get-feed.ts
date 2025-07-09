// actions/get-feed.ts
import { FEEDS,getFeed } from "@/lib/rss";

export async function getFeedData(slug: string,category?:string): Promise<{ items: any[] } | null> {
    const feed = FEEDS.find((feed) => feed.slug === slug);
    if (!feed) {
        return null;
    }
    var url = feed.url;
    if(category)
    {
        var baseurl = feed.url;
        var idx = feed.url.indexOf("/feed");
        baseurl = feed.url.slice(0,idx);
        url = baseurl + "/category/" + category + "/feed";
        console.log("feedurl-"+feed.url);
    }

    const detailedFeed = await getFeed(url);
    return { items: detailedFeed.items };
}