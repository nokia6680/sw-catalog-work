const iframeVideos: NodeListOf < HTMLIFrameElement > = document.querySelectorAll("iframe");

if (videos.length > 0) {
    videos.forEach((videoItem) => {
        videoItem.pause();
    });
};

if (iframeVideos.length > 0) {
    iframeVideos.forEach((iframe) => {
        if (iframe.contentWindow) {
            // Pause Vimeo Videos
            if (iframe.src.startsWith("https://player.vimeo.com/")) {
                iframe.contentWindow.postMessage('{"method":"pause"}', "*");
            }
        }
    });
}
