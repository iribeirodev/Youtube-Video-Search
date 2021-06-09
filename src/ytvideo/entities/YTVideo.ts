import Author from "./Author";

export default class YTVideo {
    constructor(
        public videoId: string,
        public title: string,
        public url: string,
        public description: string,
        public image: string,
        public thumbnail: string,
        public timestamp: string,
        public duration: string,
        public timeElapsedPost: string,
        public views: number,
        public author?: Author
    ){}
}

