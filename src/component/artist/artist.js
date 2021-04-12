import React from 'react';
import './artist.css';

//Ideally will render image from API but Itunes api does not have artist images.

const Artist = (props) =>{
    return (
        <>
            <img src="https://is3-ssl.mzstatic.com/image/thumb/Features114/v4/29/d2/d0/29d2d01b-840b-64c9-e758-214c432610c6/mzl.mftabmww.jpg/380x380cc-60.jpg" alt="Marron 5" />
            <h2>{props.album.artistName}</h2>
            <span>{props.album.primaryGenreName}</span>
        </>
    )
}

export default Artist;
  