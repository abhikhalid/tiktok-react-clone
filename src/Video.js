import React, { useRef, useState } from 'react';

import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

const Video = ({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares
}) => {

    const [play, setPlay] = useState(false);

    const videoRef = useRef(null);

    const onVideoPress = () => {

        if (play) {
            videoRef.current.pause();
            setPlay(false);
        }
        else {
            videoRef.current.play();
            setPlay(true);
        }

    }

    return (
        <div className="video">

            <video
                className="video__player"
                loop
                onClick={onVideoPress}
                ref={videoRef}
                src={url}
            />

            {/* <VideoFooter/> */}

            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />

            {/* <VideoSidebar/> */}

            <VideoSidebar
                likes={111}
                messages={222}
                shares={333}
            />

        </div>
    );
};

export default Video;