export class News {
    constructor(
        public Id: number,
        public Date: string,
        public Title: string,
        public Description: string,
        public Comments: Comment[]
    ){}
}