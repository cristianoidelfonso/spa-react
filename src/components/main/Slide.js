import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class Slide extends React.Component {
    render() {
        const images = [
            {
                original: '/img/photos/original/a.jpg',
                thumbnail: '/img/photos/thumb/a.jpg',
            },
            {
                original: '/img/photos/original/b.jpg',
                thumbnail: '/img/photos/thumb/b.jpg',
            },
            {
                original: '/img/photos/original/c.jpg',
                thumbnail: '/img/photos/thumb/c.jpg',
            },
            {
                original: '/img/photos/original/d.jpg',
                thumbnail: '/img/photos/thumb/d.jpg',
            },
            {
                original: '/img/photos/original/e.jpg',
                thumbnail: '/img/photos/thumb/e.jpg',
            },
            {
                original: '/img/photos/original/f.jpg',
                thumbnail: '/img/photos/thumb/f.jpg',
            },
            {
                original: '/img/photos/original/g.jpg',
                thumbnail: '/img/photos/thumb/g.jpg',
            },
            {
                original: '/img/photos/original/h.jpg',
                thumbnail: '/img/photos/thumb/h.jpg',
            },
            {
                original: '/img/photos/original/i.jpg',
                thumbnail: '/img/photos/thumb/i.jpg',
            },
            {
                original: '/img/photos/original/j.jpg',
                thumbnail: '/img/photos/thumb/j.jpg',
            }
        ]
        return (
            <ImageGallery items={images} autoPlay={true} />
        );
    }
}