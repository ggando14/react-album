import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AlbumList from './component/list/albumList';
import Artist from './component/artist/artist';
import loadingSvg from './assets/svg/loading.svg';
import headerSvg from './assets/svg/header.svg';
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
      <header> <img src={headerSvg} alt="Favorite Album" /> Favorite Album </header>
      <main className="favorite">
        <aside className="favorite__left">
          <div className="fixed__layer">
          {loading?  <Artist album={albums[0]}/> : '' } 
          </div>
        </aside>
        <section className="favorite__right">
          {loading? (<AlbumList albums={albums} />): ( <img src={loadingSvg} alt="loading" /> ) }
        </section>
      </main>
      
    </div>
  );
}

export default App;
