async function start() {
  const yts = require("yt-search");
  const r = await yts("superman theme");
  const result = [];
  const videos = r.videos.slice(0, 3);
  videos.forEach(function (v) {
      result.push(v);
    // const views = String(v.views).padStart(10, " ");
    // console.log(`${views} | ${v.title} (${v.timestamp}) | ${v.author.name}`);
  });

  return result;
}

start().then(res => console.log(res));