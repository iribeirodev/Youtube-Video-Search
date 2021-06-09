import Author from "../entities/Author";
import YTVideo from "../entities/YTVideo";

export class YTVideoService {
    async start(criteria: string) {
        const yts = require("yt-search");
        const r = await yts(criteria);
        const result: YTVideo[] = [];
        const videos = r.videos.slice(0, 10);

        for (let i = 0; i < videos.length; i++) {
            let v = videos[i];
            let ytVideo = new YTVideo(v.videoId, v.title, v.url,
                v.description, v.image, v.thumbnail, v.timestamp, v.duration,
                v.timeElapsedPost, v.views, new Author(v.author.name, v.author.url));
            result.push(ytVideo);
        }
      
        return result;
    }
}
