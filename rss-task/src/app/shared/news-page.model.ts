import { News } from './news.model';

export class NewsPage {
    constructor(
        public PageOfNews:News[],
        public PageAmount:number,
        public CollectionSize:number
    ){}
}