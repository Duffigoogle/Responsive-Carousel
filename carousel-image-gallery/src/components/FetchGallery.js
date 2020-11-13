import React, {useState, useEffect } from 'react';
import axios from 'axios';
import Image from './Image';
// import NoPhotos from 'NoPhotos';
// import apikey   from './key'; 

const flickrURL = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=67d150af20c69717508c11adeeca0670&per_page=16&format=json&nojsoncallback=1';

// 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1';


// https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key={apiKey}&tags=${query}&per_page=10&format=json&nojsoncallback=1

function FetchGallery() {
    const [photos, setPhotos] = useState([]);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [error, setError] = useState(null);
    // const [query, setQuery] = useState("");
  
    const getFlickrImagesWithAxios = async () => {
        const response = await axios.get(flickrURL);
        setPhotos(response.data.photos.photo);
        // console.log(photos);
        // setIsLoaded(true);
    } 

    useEffect(() => {
        getFlickrImagesWithAxios();
        // getFlickrImagesWithFetch();
    }, []);
    
    // const onChange = (e) => {
    //     e.preventDefault();

    //     setQuery(e.target.value);

    // }

        
        // const getFlickrImagesWithAxios = async () => {
        //     try {
        //         setIsLoaded(true);
        //     const response = await axios.get(flickrURL);
        //     setImages(response.data);
        //     console.log(response);
        //     } catch (err) {
        //         setError(err);
        //     } finally {
        //         setIsLoaded(false);
        //     }
        // }

        

        // Note: the empty deps array [] means
        // this useEffect will run once
        // similar to componentDidMount()


    

    // const getFlickrImagesWithFetch = async () => {
    //     const response = await fetch(flickrURL);
    //     const jsonData = await response.json();
    //     setImages(jsonData);
    // }

    // useEffect(() => {
    //   fetch("https://api.example.com/items")
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //         setIsLoaded(true);
    //         setItems(result);
    //       },
    //       // Note: it's important to handle errors here
    //       // instead of a catch() block so that we don't swallow
    //       // exceptions from actual bugs in components.
    //       (error) => {
    //         setIsLoaded(true);
    //         setError(error);
    //       }
    //     )
    // }, [])
    
    // const results = props.data.photos;
    let itemsToRender;
    // const photos = props.photos;
    // let noImage;

    // map variables to each item in fetched image array and return image component
    if (photos.length > 0) {
      itemsToRender = photos.map(photo => { 
        let farm = photo.farm;
        let server = photo.server;
        let id = photo.id;
        let secret = photo.secret;
        let title = photo.title;
        let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
        return <Image url={url} key={id} alt={title} />;
        // <img src={url} key={id} alt={title} />
      });
    } else {
        itemsToRender = "Loading ...";
        // noImage = <NoPhotos />;
    }
    return (
        
        <div className='photo-container'>
                {/* <div className="input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search for an image"
                    value={query}
                    onChange={e => 
                        setQuery(e.target.value)}
                />
                </div> */}
                <ul>{itemsToRender}</ul>
            {/* <ul>
                {photos.photo.map(photo => (
                    <li key={photo.id}>
                    </li>
                ))}
            </ul> */}
        </div> 
    )
};


export default FetchGallery

