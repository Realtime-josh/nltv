import axios from 'axios';
import { getToken} from '../helpers/auth';


const baseURL = 'https://newlabel-api-staging.herokuapp.com';
// const sectionURL = 'https://newlabel-api-staging.herokuapp.com/section';

//update section
// https://newlabel-api-staging.herokuapp.com/section/:id

// {
//   "name": "Trending Movies",
//   "movies": [], // Ids of movies
//   "series": []  // Ids of series if its a series section
// }


//Delete Section
// https://newlabel-api-staging.herokuapp.com/section/:id


/* 
  "data": [
        {
            "series": [],
            "movies": [
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "6319e6959457bd0016c8f80a",
                    "name": "Leonardo Di",
                    "price": 2000,
                    "description": "Interesting movie",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "leonardo-di",
                    "createdAt": "2022-09-08T12:56:53.479Z",
                    "updatedAt": "2022-10-10T14:52:42.592Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e8042f5a6a0016173ec4"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "6319e7a89457bd0016c8f81f",
                    "name": "Big Bang Theory",
                    "price": 3000,
                    "description": "Interesting Movie",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "2019",
                    "runtime": "2hrs 30mins",
                    "slug": "big-bang-theory",
                    "createdAt": "2022-09-08T13:01:28.563Z",
                    "updatedAt": "2022-09-08T13:01:28.563Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "631a148825474e0016764fab",
                    "name": "Red Rose",
                    "price": 2997,
                    "description": "Nice Movie.",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "red-rose",
                    "createdAt": "2022-09-08T16:12:56.602Z",
                    "updatedAt": "2022-09-08T16:12:56.602Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": false,
                    "isInStock": true,
                    "_id": "63468714edb5c800161cdddd",
                    "name": "1917",
                    "price": 10000,
                    "description": "Two soldiers, assigned the task of delivering a critical message to another battalion, risk their lives for the job in order to prevent them from stepping right into a deadly ambush.",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "200",
                    "runtime": "2hrs 30mins",
                    "slug": "1917",
                    "createdAt": "2022-10-12T09:21:24.347Z",
                    "updatedAt": "2022-10-17T16:43:09.286Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6319eb5e9457bd0016c8f83c"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "63468762edb5c800161cddef",
                    "name": "Tsunami",
                    "price": 800,
                    "description": "Good movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "599",
                    "runtime": "2hrs 30mins",
                    "slug": "tsunami",
                    "createdAt": "2022-10-12T09:22:42.595Z",
                    "updatedAt": "2022-10-12T09:22:42.595Z",
                    "__v": 0
                }
            ],
            "_id": "6368e6bf6e94c7cbb59aa207",
            "name": "Trending Movies",
            "createdAt": "2022-11-07T11:06:39.603Z",
            "updatedAt": "2022-11-07T11:06:39.603Z",
            "__v": 0
        },
        {
            "series": [],
            "movies": [
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "6319e6959457bd0016c8f80a",
                    "name": "Leonardo Di",
                    "price": 2000,
                    "description": "Interesting movie",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "leonardo-di",
                    "createdAt": "2022-09-08T12:56:53.479Z",
                    "updatedAt": "2022-10-10T14:52:42.592Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e8042f5a6a0016173ec4"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "6319e7a89457bd0016c8f81f",
                    "name": "Big Bang Theory",
                    "price": 3000,
                    "description": "Interesting Movie",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "2019",
                    "runtime": "2hrs 30mins",
                    "slug": "big-bang-theory",
                    "createdAt": "2022-09-08T13:01:28.563Z",
                    "updatedAt": "2022-09-08T13:01:28.563Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "631a148825474e0016764fab",
                    "name": "Red Rose",
                    "price": 2997,
                    "description": "Nice Movie.",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "red-rose",
                    "createdAt": "2022-09-08T16:12:56.602Z",
                    "updatedAt": "2022-09-08T16:12:56.602Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": false,
                    "isInStock": true,
                    "_id": "63468714edb5c800161cdddd",
                    "name": "1917",
                    "price": 10000,
                    "description": "Two soldiers, assigned the task of delivering a critical message to another battalion, risk their lives for the job in order to prevent them from stepping right into a deadly ambush.",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "200",
                    "runtime": "2hrs 30mins",
                    "slug": "1917",
                    "createdAt": "2022-10-12T09:21:24.347Z",
                    "updatedAt": "2022-10-17T16:43:09.286Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6319eb5e9457bd0016c8f83c"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "63468762edb5c800161cddef",
                    "name": "Tsunami",
                    "price": 800,
                    "description": "Good movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "599",
                    "runtime": "2hrs 30mins",
                    "slug": "tsunami",
                    "createdAt": "2022-10-12T09:22:42.595Z",
                    "updatedAt": "2022-10-12T09:22:42.595Z",
                    "__v": 0
                }
            ],
            "_id": "636a84e7bee0e70016cd5b65",
            "name": "Trending Movies",
            "createdAt": "2022-11-08T16:33:43.344Z",
            "updatedAt": "2022-11-08T16:33:43.344Z",
            "__v": 0
        },
        {
            "series": [],
            "movies": [
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "6319e6959457bd0016c8f80a",
                    "name": "Leonardo Di",
                    "price": 2000,
                    "description": "Interesting movie",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "leonardo-di",
                    "createdAt": "2022-09-08T12:56:53.479Z",
                    "updatedAt": "2022-10-10T14:52:42.592Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e8042f5a6a0016173ec4"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "6319e7a89457bd0016c8f81f",
                    "name": "Big Bang Theory",
                    "price": 3000,
                    "description": "Interesting Movie",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "2019",
                    "runtime": "2hrs 30mins",
                    "slug": "big-bang-theory",
                    "createdAt": "2022-09-08T13:01:28.563Z",
                    "updatedAt": "2022-09-08T13:01:28.563Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "631a148825474e0016764fab",
                    "name": "Red Rose",
                    "price": 2997,
                    "description": "Nice Movie.",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "red-rose",
                    "createdAt": "2022-09-08T16:12:56.602Z",
                    "updatedAt": "2022-09-08T16:12:56.602Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": false,
                    "isInStock": true,
                    "_id": "63468714edb5c800161cdddd",
                    "name": "1917",
                    "price": 10000,
                    "description": "Two soldiers, assigned the task of delivering a critical message to another battalion, risk their lives for the job in order to prevent them from stepping right into a deadly ambush.",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "200",
                    "runtime": "2hrs 30mins",
                    "slug": "1917",
                    "createdAt": "2022-10-12T09:21:24.347Z",
                    "updatedAt": "2022-10-17T16:43:09.286Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6319eb5e9457bd0016c8f83c"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "63468762edb5c800161cddef",
                    "name": "Tsunami",
                    "price": 800,
                    "description": "Good movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "599",
                    "runtime": "2hrs 30mins",
                    "slug": "tsunami",
                    "createdAt": "2022-10-12T09:22:42.595Z",
                    "updatedAt": "2022-10-12T09:22:42.595Z",
                    "__v": 0
                }
            ],
            "_id": "636a850cbee0e70016cd5b68",
            "name": "Trending Movies",
            "createdAt": "2022-11-08T16:34:20.203Z",
            "updatedAt": "2022-11-08T16:34:20.203Z",
            "__v": 0
        },
        {
            "series": [],
            "movies": [
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "631a148825474e0016764fab",
                    "name": "Red Rose",
                    "price": 2997,
                    "description": "Nice Movie.",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "red-rose",
                    "createdAt": "2022-09-08T16:12:56.602Z",
                    "updatedAt": "2022-09-08T16:12:56.602Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": false,
                    "isInStock": true,
                    "_id": "63468714edb5c800161cdddd",
                    "name": "1917",
                    "price": 10000,
                    "description": "Two soldiers, assigned the task of delivering a critical message to another battalion, risk their lives for the job in order to prevent them from stepping right into a deadly ambush.",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "200",
                    "runtime": "2hrs 30mins",
                    "slug": "1917",
                    "createdAt": "2022-10-12T09:21:24.347Z",
                    "updatedAt": "2022-10-17T16:43:09.286Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e8042f5a6a0016173ec4"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "6319e7a89457bd0016c8f81f",
                    "name": "Big Bang Theory",
                    "price": 3000,
                    "description": "Interesting Movie",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "2019",
                    "runtime": "2hrs 30mins",
                    "slug": "big-bang-theory",
                    "createdAt": "2022-09-08T13:01:28.563Z",
                    "updatedAt": "2022-09-08T13:01:28.563Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "631a148825474e0016764fab",
                    "name": "Red Rose",
                    "price": 2997,
                    "description": "Nice Movie.",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "red-rose",
                    "createdAt": "2022-09-08T16:12:56.602Z",
                    "updatedAt": "2022-09-08T16:12:56.602Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "633868585328cd0016e1b00c"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "63468813edb5c800161cde18",
                    "name": "Solemn",
                    "price": 900,
                    "description": "Good one",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566737/production/aqfizda2uvkqmsuhoc0b.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566737/production/aqfizda2uvkqmsuhoc0b.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "398",
                    "runtime": "2hrs 30mins",
                    "slug": "solemn",
                    "createdAt": "2022-10-12T09:25:39.307Z",
                    "updatedAt": "2022-10-12T09:25:39.307Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e8042f5a6a0016173ec4"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "6319e7a89457bd0016c8f81f",
                    "name": "Big Bang Theory",
                    "price": 3000,
                    "description": "Interesting Movie",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "2019",
                    "runtime": "2hrs 30mins",
                    "slug": "big-bang-theory",
                    "createdAt": "2022-09-08T13:01:28.563Z",
                    "updatedAt": "2022-09-08T13:01:28.563Z",
                    "__v": 0
                }
            ],
            "_id": "636ccb46b6df3700160d7418",
            "name": "Section1",
            "createdAt": "2022-11-10T09:58:30.200Z",
            "updatedAt": "2022-11-10T09:58:30.200Z",
            "__v": 0
        },
        {
            "series": [],
            "movies": [
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e8042f5a6a0016173ec4"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "6319e7a89457bd0016c8f81f",
                    "name": "Big Bang Theory",
                    "price": 3000,
                    "description": "Interesting Movie",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "2019",
                    "runtime": "2hrs 30mins",
                    "slug": "big-bang-theory",
                    "createdAt": "2022-09-08T13:01:28.563Z",
                    "updatedAt": "2022-09-08T13:01:28.563Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "631a148825474e0016764fab",
                    "name": "Red Rose",
                    "price": 2997,
                    "description": "Nice Movie.",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "red-rose",
                    "createdAt": "2022-09-08T16:12:56.602Z",
                    "updatedAt": "2022-09-08T16:12:56.602Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6319eb5e9457bd0016c8f83c"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "63468762edb5c800161cddef",
                    "name": "Tsunami",
                    "price": 800,
                    "description": "Good movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "599",
                    "runtime": "2hrs 30mins",
                    "slug": "tsunami",
                    "createdAt": "2022-10-12T09:22:42.595Z",
                    "updatedAt": "2022-10-12T09:22:42.595Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "631a148825474e0016764fab",
                    "name": "Red Rose",
                    "price": 2997,
                    "description": "Nice Movie.",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "red-rose",
                    "createdAt": "2022-09-08T16:12:56.602Z",
                    "updatedAt": "2022-09-08T16:12:56.602Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "6319e6959457bd0016c8f80a",
                    "name": "Leonardo Di",
                    "price": 2000,
                    "description": "Interesting movie",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "leonardo-di",
                    "createdAt": "2022-09-08T12:56:53.479Z",
                    "updatedAt": "2022-10-10T14:52:42.592Z",
                    "__v": 0
                }
            ],
            "_id": "636ccff1b6df3700160d7424",
            "name": "section2",
            "createdAt": "2022-11-10T10:18:25.103Z",
            "updatedAt": "2022-11-10T10:18:25.103Z",
            "__v": 0
        },
        {
            "series": [],
            "movies": [
                {
                    "itemType": "Movie",
                    "categories": [
                        "6319eb5e9457bd0016c8f83c"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "63468762edb5c800161cddef",
                    "name": "Tsunami",
                    "price": 800,
                    "description": "Good movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "599",
                    "runtime": "2hrs 30mins",
                    "slug": "tsunami",
                    "createdAt": "2022-10-12T09:22:42.595Z",
                    "updatedAt": "2022-10-12T09:22:42.595Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "631a148825474e0016764fab",
                    "name": "Red Rose",
                    "price": 2997,
                    "description": "Nice Movie.",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "red-rose",
                    "createdAt": "2022-09-08T16:12:56.602Z",
                    "updatedAt": "2022-09-08T16:12:56.602Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": false,
                    "isInStock": true,
                    "_id": "63468714edb5c800161cdddd",
                    "name": "1917",
                    "price": 10000,
                    "description": "Two soldiers, assigned the task of delivering a critical message to another battalion, risk their lives for the job in order to prevent them from stepping right into a deadly ambush.",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "200",
                    "runtime": "2hrs 30mins",
                    "slug": "1917",
                    "createdAt": "2022-10-12T09:21:24.347Z",
                    "updatedAt": "2022-10-17T16:43:09.286Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "634e60521ab54c00168fb88a",
                    "name": "Big Bang Theory 8",
                    "price": 5000,
                    "description": "God is good.",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1666080846/production/uiftwmt6p6oaeowy6ibq.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1666080848/production/hwa5ryymtncnnwz5jewo.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "4000",
                    "runtime": "2hrs 30mins",
                    "slug": "big-bang-theory-8",
                    "createdAt": "2022-10-18T08:14:10.387Z",
                    "updatedAt": "2022-10-18T08:14:10.387Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "633868585328cd0016e1b00c"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "63468813edb5c800161cde18",
                    "name": "Solemn",
                    "price": 900,
                    "description": "Good one",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566737/production/aqfizda2uvkqmsuhoc0b.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566737/production/aqfizda2uvkqmsuhoc0b.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "398",
                    "runtime": "2hrs 30mins",
                    "slug": "solemn",
                    "createdAt": "2022-10-12T09:25:39.307Z",
                    "updatedAt": "2022-10-12T09:25:39.307Z",
                    "__v": 0
                }
            ],
            "_id": "636e13852de6f80016a943ae",
            "name": "Section3",
            "createdAt": "2022-11-11T09:19:01.800Z",
            "updatedAt": "2022-11-11T09:19:01.800Z",
            "__v": 0
        },
        {
            "series": [],
            "movies": [
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "631a148825474e0016764fab",
                    "name": "Red Rose",
                    "price": 2997,
                    "description": "Nice Movie.",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "red-rose",
                    "createdAt": "2022-09-08T16:12:56.602Z",
                    "updatedAt": "2022-09-08T16:12:56.602Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6319eb5e9457bd0016c8f83c"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "63468762edb5c800161cddef",
                    "name": "Tsunami",
                    "price": 800,
                    "description": "Good movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "599",
                    "runtime": "2hrs 30mins",
                    "slug": "tsunami",
                    "createdAt": "2022-10-12T09:22:42.595Z",
                    "updatedAt": "2022-10-12T09:22:42.595Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "633868585328cd0016e1b00c"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "63468813edb5c800161cde18",
                    "name": "Solemn",
                    "price": 900,
                    "description": "Good one",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566737/production/aqfizda2uvkqmsuhoc0b.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566737/production/aqfizda2uvkqmsuhoc0b.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "398",
                    "runtime": "2hrs 30mins",
                    "slug": "solemn",
                    "createdAt": "2022-10-12T09:25:39.307Z",
                    "updatedAt": "2022-10-12T09:25:39.307Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "636eeb4d29e39700167decf1",
                    "name": "Lancer",
                    "price": 2000,
                    "description": "Nice movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1668213578/production/w9vtyjeqhylqppif07sz.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1668213579/production/sgqey63ljgdcqabseo7w.png",
                    "videoUrl": "https://movie.com",
                    "year": "2021",
                    "runtime": "2hrs 30mins",
                    "slug": "lancer",
                    "createdAt": "2022-11-12T00:39:41.007Z",
                    "updatedAt": "2022-11-12T00:39:41.007Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": false,
                    "isInStock": true,
                    "_id": "63468714edb5c800161cdddd",
                    "name": "1917",
                    "price": 10000,
                    "description": "Two soldiers, assigned the task of delivering a critical message to another battalion, risk their lives for the job in order to prevent them from stepping right into a deadly ambush.",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "200",
                    "runtime": "2hrs 30mins",
                    "slug": "1917",
                    "createdAt": "2022-10-12T09:21:24.347Z",
                    "updatedAt": "2022-10-17T16:43:09.286Z",
                    "__v": 0
                }
            ],
            "_id": "63712b2780b3700016b3fbfd",
            "name": "Section9",
            "createdAt": "2022-11-13T17:36:39.497Z",
            "updatedAt": "2022-11-13T17:36:39.497Z",
            "__v": 0
        },
        {
            "series": [],
            "movies": [
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "631a148825474e0016764fab",
                    "name": "Red Rose",
                    "price": 2997,
                    "description": "Nice Movie.",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "red-rose",
                    "createdAt": "2022-09-08T16:12:56.602Z",
                    "updatedAt": "2022-09-08T16:12:56.602Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6319eb5e9457bd0016c8f83c"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "63468762edb5c800161cddef",
                    "name": "Tsunami",
                    "price": 800,
                    "description": "Good movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "599",
                    "runtime": "2hrs 30mins",
                    "slug": "tsunami",
                    "createdAt": "2022-10-12T09:22:42.595Z",
                    "updatedAt": "2022-10-12T09:22:42.595Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "633868585328cd0016e1b00c"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "63468813edb5c800161cde18",
                    "name": "Solemn",
                    "price": 900,
                    "description": "Good one",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566737/production/aqfizda2uvkqmsuhoc0b.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566737/production/aqfizda2uvkqmsuhoc0b.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "398",
                    "runtime": "2hrs 30mins",
                    "slug": "solemn",
                    "createdAt": "2022-10-12T09:25:39.307Z",
                    "updatedAt": "2022-10-12T09:25:39.307Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "636eeb4d29e39700167decf1",
                    "name": "Lancer",
                    "price": 2000,
                    "description": "Nice movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1668213578/production/w9vtyjeqhylqppif07sz.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1668213579/production/sgqey63ljgdcqabseo7w.png",
                    "videoUrl": "https://movie.com",
                    "year": "2021",
                    "runtime": "2hrs 30mins",
                    "slug": "lancer",
                    "createdAt": "2022-11-12T00:39:41.007Z",
                    "updatedAt": "2022-11-12T00:39:41.007Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": false,
                    "isInStock": true,
                    "_id": "63468714edb5c800161cdddd",
                    "name": "1917",
                    "price": 10000,
                    "description": "Two soldiers, assigned the task of delivering a critical message to another battalion, risk their lives for the job in order to prevent them from stepping right into a deadly ambush.",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "200",
                    "runtime": "2hrs 30mins",
                    "slug": "1917",
                    "createdAt": "2022-10-12T09:21:24.347Z",
                    "updatedAt": "2022-10-17T16:43:09.286Z",
                    "__v": 0
                }
            ],
            "_id": "63712b9580b3700016b3fc00",
            "name": "Section10",
            "createdAt": "2022-11-13T17:38:29.388Z",
            "updatedAt": "2022-11-13T17:38:29.388Z",
            "__v": 0
        },
        {
            "series": [],
            "movies": [
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "631a148825474e0016764fab",
                    "name": "Red Rose",
                    "price": 2997,
                    "description": "Nice Movie.",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "red-rose",
                    "createdAt": "2022-09-08T16:12:56.602Z",
                    "updatedAt": "2022-09-08T16:12:56.602Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6319eb5e9457bd0016c8f83c"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "63468762edb5c800161cddef",
                    "name": "Tsunami",
                    "price": 800,
                    "description": "Good movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "599",
                    "runtime": "2hrs 30mins",
                    "slug": "tsunami",
                    "createdAt": "2022-10-12T09:22:42.595Z",
                    "updatedAt": "2022-10-12T09:22:42.595Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "634e60521ab54c00168fb88a",
                    "name": "Big Bang Theory 8",
                    "price": 5000,
                    "description": "God is good.",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1666080846/production/uiftwmt6p6oaeowy6ibq.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1666080848/production/hwa5ryymtncnnwz5jewo.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "4000",
                    "runtime": "2hrs 30mins",
                    "slug": "big-bang-theory-8",
                    "createdAt": "2022-10-18T08:14:10.387Z",
                    "updatedAt": "2022-10-18T08:14:10.387Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "636eeb4d29e39700167decf1",
                    "name": "Lancer",
                    "price": 2000,
                    "description": "Nice movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1668213578/production/w9vtyjeqhylqppif07sz.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1668213579/production/sgqey63ljgdcqabseo7w.png",
                    "videoUrl": "https://movie.com",
                    "year": "2021",
                    "runtime": "2hrs 30mins",
                    "slug": "lancer",
                    "createdAt": "2022-11-12T00:39:41.007Z",
                    "updatedAt": "2022-11-12T00:39:41.007Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "6319e6959457bd0016c8f80a",
                    "name": "Leonardo Di",
                    "price": 2000,
                    "description": "Interesting movie",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "leonardo-di",
                    "createdAt": "2022-09-08T12:56:53.479Z",
                    "updatedAt": "2022-10-10T14:52:42.592Z",
                    "__v": 0
                }
            ],
            "_id": "6372262900ad7200160ee03f",
            "name": "Section20",
            "createdAt": "2022-11-14T11:27:37.831Z",
            "updatedAt": "2022-11-14T11:27:37.831Z",
            "__v": 0
        },
        {
            "series": [],
            "movies": [
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": false,
                    "isInStock": true,
                    "_id": "63468714edb5c800161cdddd",
                    "name": "1917",
                    "price": 10000,
                    "description": "Two soldiers, assigned the task of delivering a critical message to another battalion, risk their lives for the job in order to prevent them from stepping right into a deadly ambush.",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "200",
                    "runtime": "2hrs 30mins",
                    "slug": "1917",
                    "createdAt": "2022-10-12T09:21:24.347Z",
                    "updatedAt": "2022-10-17T16:43:09.286Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6319eb5e9457bd0016c8f83c"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "63468762edb5c800161cddef",
                    "name": "Tsunami",
                    "price": 800,
                    "description": "Good movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "599",
                    "runtime": "2hrs 30mins",
                    "slug": "tsunami",
                    "createdAt": "2022-10-12T09:22:42.595Z",
                    "updatedAt": "2022-10-12T09:22:42.595Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "634e60521ab54c00168fb88a",
                    "name": "Big Bang Theory 8",
                    "price": 5000,
                    "description": "God is good.",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1666080846/production/uiftwmt6p6oaeowy6ibq.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1666080848/production/hwa5ryymtncnnwz5jewo.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "4000",
                    "runtime": "2hrs 30mins",
                    "slug": "big-bang-theory-8",
                    "createdAt": "2022-10-18T08:14:10.387Z",
                    "updatedAt": "2022-10-18T08:14:10.387Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "636eeb4d29e39700167decf1",
                    "name": "Lancer",
                    "price": 2000,
                    "description": "Nice movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1668213578/production/w9vtyjeqhylqppif07sz.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1668213579/production/sgqey63ljgdcqabseo7w.png",
                    "videoUrl": "https://movie.com",
                    "year": "2021",
                    "runtime": "2hrs 30mins",
                    "slug": "lancer",
                    "createdAt": "2022-11-12T00:39:41.007Z",
                    "updatedAt": "2022-11-12T00:39:41.007Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e8042f5a6a0016173ec4"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "6319e7a89457bd0016c8f81f",
                    "name": "Big Bang Theory",
                    "price": 3000,
                    "description": "Interesting Movie",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "2019",
                    "runtime": "2hrs 30mins",
                    "slug": "big-bang-theory",
                    "createdAt": "2022-09-08T13:01:28.563Z",
                    "updatedAt": "2022-09-08T13:01:28.563Z",
                    "__v": 0
                }
            ],
            "_id": "63723301eca0f00016166131",
            "name": "test 1",
            "createdAt": "2022-11-14T12:22:25.718Z",
            "updatedAt": "2022-11-14T12:22:25.718Z",
            "__v": 0
        },
        {
            "series": [],
            "movies": [
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e8042f5a6a0016173ec4"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "6319e7a89457bd0016c8f81f",
                    "name": "Big Bang Theory",
                    "price": 3000,
                    "description": "Interesting Movie",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "2019",
                    "runtime": "2hrs 30mins",
                    "slug": "big-bang-theory",
                    "createdAt": "2022-09-08T13:01:28.563Z",
                    "updatedAt": "2022-09-08T13:01:28.563Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "631a148825474e0016764fab",
                    "name": "Red Rose",
                    "price": 2997,
                    "description": "Nice Movie.",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "red-rose",
                    "createdAt": "2022-09-08T16:12:56.602Z",
                    "updatedAt": "2022-09-08T16:12:56.602Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6319eb5e9457bd0016c8f83c"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "63468762edb5c800161cddef",
                    "name": "Tsunami",
                    "price": 800,
                    "description": "Good movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566560/production/s8f5rvwoapt3cvmlptkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "599",
                    "runtime": "2hrs 30mins",
                    "slug": "tsunami",
                    "createdAt": "2022-10-12T09:22:42.595Z",
                    "updatedAt": "2022-10-12T09:22:42.595Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "634e60521ab54c00168fb88a",
                    "name": "Big Bang Theory 8",
                    "price": 5000,
                    "description": "God is good.",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1666080846/production/uiftwmt6p6oaeowy6ibq.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1666080848/production/hwa5ryymtncnnwz5jewo.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "4000",
                    "runtime": "2hrs 30mins",
                    "slug": "big-bang-theory-8",
                    "createdAt": "2022-10-18T08:14:10.387Z",
                    "updatedAt": "2022-10-18T08:14:10.387Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "636eeb4d29e39700167decf1",
                    "name": "Lancer",
                    "price": 2000,
                    "description": "Nice movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1668213578/production/w9vtyjeqhylqppif07sz.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1668213579/production/sgqey63ljgdcqabseo7w.png",
                    "videoUrl": "https://movie.com",
                    "year": "2021",
                    "runtime": "2hrs 30mins",
                    "slug": "lancer",
                    "createdAt": "2022-11-12T00:39:41.007Z",
                    "updatedAt": "2022-11-12T00:39:41.007Z",
                    "__v": 0
                }
            ],
            "_id": "63724f1dda09ad0016e63e14",
            "name": "top 10",
            "createdAt": "2022-11-14T14:22:21.804Z",
            "updatedAt": "2022-11-14T14:22:21.804Z",
            "__v": 0
        },
        {
            "series": [],
            "movies": [
                {
                    "itemType": "Movie",
                    "categories": [
                        "633868585328cd0016e1b00c"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "63468813edb5c800161cde18",
                    "name": "Solemn",
                    "price": 900,
                    "description": "Good one",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566737/production/aqfizda2uvkqmsuhoc0b.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566737/production/aqfizda2uvkqmsuhoc0b.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "398",
                    "runtime": "2hrs 30mins",
                    "slug": "solemn",
                    "createdAt": "2022-10-12T09:25:39.307Z",
                    "updatedAt": "2022-10-12T09:25:39.307Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "631a148825474e0016764fab",
                    "name": "Red Rose",
                    "price": 2997,
                    "description": "Nice Movie.",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "red-rose",
                    "createdAt": "2022-09-08T16:12:56.602Z",
                    "updatedAt": "2022-09-08T16:12:56.602Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "6313e9d82f5a6a0016173ecd"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "6319e6959457bd0016c8f80a",
                    "name": "Leonardo Di",
                    "price": 2000,
                    "description": "Interesting movie",
                    "banner": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "poster": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "2022",
                    "runtime": "2hrs 30mins",
                    "slug": "leonardo-di",
                    "createdAt": "2022-09-08T12:56:53.479Z",
                    "updatedAt": "2022-10-10T14:52:42.592Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "634e60521ab54c00168fb88a",
                    "name": "Big Bang Theory 8",
                    "price": 5000,
                    "description": "God is good.",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1666080846/production/uiftwmt6p6oaeowy6ibq.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1666080848/production/hwa5ryymtncnnwz5jewo.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571541/NewLabelTV/img4_vytqkl.png",
                    "year": "4000",
                    "runtime": "2hrs 30mins",
                    "slug": "big-bang-theory-8",
                    "createdAt": "2022-10-18T08:14:10.387Z",
                    "updatedAt": "2022-10-18T08:14:10.387Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": true,
                    "isInStock": true,
                    "_id": "636eeb4d29e39700167decf1",
                    "name": "Lancer",
                    "price": 2000,
                    "description": "Nice movie",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1668213578/production/w9vtyjeqhylqppif07sz.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1668213579/production/sgqey63ljgdcqabseo7w.png",
                    "videoUrl": "https://movie.com",
                    "year": "2021",
                    "runtime": "2hrs 30mins",
                    "slug": "lancer",
                    "createdAt": "2022-11-12T00:39:41.007Z",
                    "updatedAt": "2022-11-12T00:39:41.007Z",
                    "__v": 0
                },
                {
                    "itemType": "Movie",
                    "categories": [
                        "631a084825474e0016764f34"
                    ],
                    "cast": [
                        "Leonardo Di Caprio, John Travolta, Nicolas Cage"
                    ],
                    "isOnSale": false,
                    "isInStock": true,
                    "_id": "63468714edb5c800161cdddd",
                    "name": "1917",
                    "price": 10000,
                    "description": "Two soldiers, assigned the task of delivering a critical message to another battalion, risk their lives for the job in order to prevent them from stepping right into a deadly ambush.",
                    "banner": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "poster": "https://res.cloudinary.com/newlabel/image/upload/v1665566483/production/o5fbghlkl3kt1oczxgww.png",
                    "videoUrl": "https://res.cloudinary.com/daw8l0o1v/image/upload/v1650571540/NewLabelTV/img7_jfkpzn.png",
                    "year": "200",
                    "runtime": "2hrs 30mins",
                    "slug": "1917",
                    "createdAt": "2022-10-12T09:21:24.347Z",
                    "updatedAt": "2022-10-17T16:43:09.286Z",
                    "__v": 0
                }
            ],
            "_id": "6372fcb0fe34dc00163a2de5",
            "name": "Section20",
            "createdAt": "2022-11-15T02:42:56.232Z",
            "updatedAt": "2022-11-15T02:42:56.232Z",
            "__v": 0
        }
    ],
    "meta": null
}

*/



export const setSectionStatus = (sectionState) => (
  {
    type: 'SET_SECTION_STATE',
    sectionState
  }
);

export const setSectionStatusTwo = (sectionStateTwo) => (
  {
    type: 'SET_SECTION_STATETWO',
    sectionStateTwo
  }
);

export const setSectionBoardStatus = (sectionBoardState) => (
  {
    type: 'SET_SECTION_BOARD_STATE',
    sectionBoardState
  }
);

export const setSectionMovies = (sectionMovies) => (
  {
    type: 'SET_SECTION_MOVIES',
    sectionMovies  
  }
);

export const setSectionId = (sectionid) => (
  {
    type: 'SET_SECTION_ID',
    sectionid  
  }
);

export const setSectionDelete = (sectDeleteValue) => (
  {
    type: 'SET_SECTION_DELETE',
    sectDeleteValue  
  }
);

export const setSectionResponse = (sectionResponse) => (
  {
    type: 'SET_SECTION_RESPONSE',
    sectionResponse  
  }
);

export const getSections = () => dispatch => {
  dispatch(setSectionResponse('retrieving...'));
  return axios({
    method: 'get',
    url: `${baseURL}/section`,
    headers: {
      'Content-Type': 'application/json',
      'a-authorization': `Bearer ${getToken()}`
    },
})
  .then((response) => {
    dispatch(setSectionMovies(response.data));
    dispatch(setSectionResponse(''));
  })
  .catch((error) =>{
    dispatch(setSectionResponse('Could not fetch sections'));
  });
};


export const addSection = (sectionName, movieid) => dispatch => {
  dispatch(setSectionResponse('creating...'));
  return axios({
    method: 'post',
    url: `${baseURL}/${`section`}`,
    headers: {
      'Content-Type': 'application/json',
      'a-authorization': `Bearer ${getToken()}`
    },
    data: {
      "name": sectionName,
      "movies": movieid,
    },
})
  .then(() => {
    dispatch(setSectionResponse('Section Created.'));
  })
  .catch((error) =>{
    dispatch(setSectionResponse('Could not create section'));
  });
};