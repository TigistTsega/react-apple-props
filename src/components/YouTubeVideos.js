/** @format */

import React, { useState, useEffect } from "react";

function YouTubeVideos() {
  const [YouTubeVideos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyB6edAsWI6KUnc-7igzDjbX7XNDsF_I9p8&&channelId=UCE_M8A5yxnLfW0KghEeajjw%20&part=snippet,id&order=date&maxResults=6"
    )
      .then((response) => response.json())
      .then((data) => {
        const YouTubeVideosData = data.items;
        setVideos(YouTubeVideosData);
      });
  }, []);
  return (
    <div className='allVideosWrapper'>
      <div className='container'>
        <div className='row h-100 align-items-center justify-content-center text-center'>
          <div className='col-12'>
            <div className='title-wraper bold video-title-wrapper'>
              <h3><b> Apple Latest Videos </b> </h3>
            </div>
          </div>
          {YouTubeVideos.map((singleVideo) => {
            let vidId = singleVideo.id.videoId;
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            let videoWrapper = (
              <div key={vidId} className='col-sm-12 col-md-4'>
                <div className='singleVideoWrapper'>
                  <div className='videoThumbnail'>
                    <a href={vidLink} target='_blank'>
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className='videoInfoWrapper'>
                    <div className='videoTitle'>
                    </div>
                    <div className='videoDesc'>
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
            return videoWrapper;
          })}
        </div>
      </div>
    </div>
  );
}

export default YouTubeVideos;
