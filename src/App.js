import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AlbumList from './component/list/albumList';
import Artist from './component/artist/artist';
import loadingSvg from './loading.svg';
import './App.css';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const App= () => {
  const [albums,setAlbums]= useState([]);
  const [loading,setLoading] = useState(false);
 

  const loadAlbums = async() => {
    try {
      await axios
        .get('https://itunes.apple.com/search?term=Maroon+5&media=music&entity=album&limit=200&explicit=yes' )
        .then( res => {
          //filter out singles and EP from result
          let list=res.data.results.filter((v)=> !v.collectionName.match(/- Single|- EP/ig) );
          //remove duplicates and then sort before setting Albums
          setAlbums([...new Map(list.map(item => [item.collectionName, item])).values()].sort((a,b) => a.releaseDate > b.releaseDate? -1:1));
        });
        setLoading(true);

      }catch(e){
      alert(e);
    }
        
     
  };



  useEffect(()=> {
    loadAlbums();

  },[]);

  return (
    <div className="App">

      <div className="favorite">
        <div className="favorite__left">
          <div className="fixed__layer">
          {loading?  <Artist album={albums[0]}/> : '' } 
          </div>
        </div>
        <div className="favorite__right">
          {loading? (<AlbumList albums={albums} />): ( <img src={loadingSvg} alt="loading" /> ) }
        </div>
      </div>
      
    </div>
  );
}

export default App;
