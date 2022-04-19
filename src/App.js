import { useState, useEffect } from 'react';
import './App.css';
import db from './firebase';
import Video from './Video';

function App() {

  const [videos, setVideos] = useState([]);

  useEffect(() => {

    //fires once when the component load but never laods after

    db.collection('videos').onSnapshot(snapshot => {

      setVideos(snapshot.docs.map(doc => doc.data()));

      // console.log(snapshot.docs.map(doc => doc.data()));
    })

  }, [])

  // console.log(videos);




  return (
    //BEM
    <div className="app">

      <div className="app__videos">
        {
          videos.map(({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              key={Math.random() * 1000}
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          ))


        }


      </div>



    </div>
  );
}

export default App;
