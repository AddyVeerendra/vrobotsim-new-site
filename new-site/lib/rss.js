import Parser from "rss-parser";

export const FEEDS = [
    {
        slug: "news",
        title: "News",
        category: "News",
        url: process.env.URL+"/feed",
    }
];


export async function getFeed(feedUrl) {
    let parser = new Parser();
    let feed = await parser.parseURL(feedUrl);

    return feed;
}