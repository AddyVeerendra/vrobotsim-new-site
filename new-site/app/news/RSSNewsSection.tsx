import { getFeedData } from "@/actions/get-feed";
import { NewsBlock } from "@/components/ui/NewsBlock";

export interface FeedItem {
  creator: string;
  pubDate: string;
  title: string;
  link: string;
  categories: string[];
  content: string;
  'content:encoded': string;
}

interface WriteFeedProps {
  params: WriteFeedParams;
  Component: React.ComponentType<{ data: FeedItem }>;
}

interface WriteFeedParams{
  slug?: string;
  count?: number;
  category?: string;
  showFeatured?: boolean;
}


export async function WriteFeed({
  params,
  Component // Accepting the React component as a prop
}: WriteFeedProps) {
    
    var fData = {items: [{creator:"",pubDate:"",title:"",link:"https://url.com",categories:['Test'],content:"lol",'content:encoded':""}]};
    if(!params.slug ){params.slug = "news";}
    var feedData = await getFeedData(params.slug,params.category);
    if (!feedData) {
        feedData = fData;
    }
    var category = "News";
    var count = 6;
    if(params.category){category = params.category;}
    if(params.count){count = params.count;}
    feedData.items = ProcessFeed(category,count,feedData.items);
    return (
        <div className="pt-6 mx-auto md:min-w-[800px] sm:min-w-[200px] max-w-3xl pb-12 text-center md:pb-20" data-aos="fade-up">
          {feedData.items.map((item) => (
            <Component data={item as FeedItem} />
          ))}
        </div>
    );
}



function ProcessFeed(category:string, count:number, items: any[]) : any[]
{
    var approvedItems = [];
    console.log("items count:"+items.length+" - looking for "+count+" that match "+category);

    for(var i = 0; i < items.length && approvedItems.length < count; i++)
    {
      for(var x = 0; x < items[i].categories.length; x++)
      {
        if(items[i].categories[x] == category)
        {
          approvedItems.push(items[i]);
          console.log("found match, count is "+approvedItems.length);
        }
      }
    }
    console.log("finished with "+approvedItems.length);
    return approvedItems;
}



export default async function NewsSection({
  params: params
}: {
  params: WriteFeedParams;
}) {
    params.showFeatured = true;
    params.category = "News";
    console.log(params);
    return (
      <>
      <WriteFeed params={params} Component={NewsBlock}/>
      </>
    );
  }

    export async function DocsSection({
  params: params
}: {
  params: WriteFeedParams
}) {
    console.log(params);
    params.category = "Docs";
    params.count = 5;
    params.showFeatured = false;
    return (
      <>
      </>
    );
  }
