import React from 'react';

const Modal = ({ isOpen, onClose, albumInfo }) => {
    if (!isOpen) return null;
    const {artist, album, coverUrl, releaseDate} = albumInfo;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{album}</h2>
                <p>{artist}</p>
                <p>{releaseDate}</p>
                <img src={coverUrl} alt="Album Cover"/>
            </div>
        </div>
    )
};

export default Modal;