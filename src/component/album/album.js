import React from 'react';
import moment from 'moment';
import './album.css';

const Album = (props) =>{
    return (
      <div className="album">
        <div className="album__main">
          <img src={props.album.artworkUrl60} alt={props.album.collectionName + 'cover'} />
          <div className="album__info">
            <div className="album__name">{props.album.collectionName}</div>
            <div className="album__artist">{props.album.artistName}</div>
            
            <div className="album__released">Released on {moment(props.album.releaseDate).format('MMM D, YYYY')}</div>
          </div>
        </div>
        <div className="album__songs"> {props.album.trackCount} song{props.album.trackCount>1?'s':''}</div>
      </div>
    )
}

export default Album;
  