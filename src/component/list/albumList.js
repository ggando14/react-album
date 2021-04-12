import React from 'react';
import Album from '../album/album';
import './albumList.css'

const AlbumList = (props) =>{
    return (
      <div className="album__list">
        { props.albums.map((album)=> <Album key={album.collectionId} album={album} /> ) }
      </div>
    )
}

export default AlbumList;