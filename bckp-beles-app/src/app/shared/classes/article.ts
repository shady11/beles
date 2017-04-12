export class Article {
    id: number;
    name: string;
    content: string;
    thumbnail: string;
    author: string; // must be number, id of author
    category: number[];
    created_at: string;
    views: number;
    comments: number;
    sourceName: string;
    sourceLink: string;
}