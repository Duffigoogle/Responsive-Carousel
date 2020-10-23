import React from 'react'


const galleryData = [
    {
        id: 1,
        img: '',
        title:'Port Harcourt',
        author:'Duffigoogle',
    }, 
    {
        id: 2,
        img: '',
        title:'Lagos',
        author:'TheLastGoodMan',
    }, 
    {
        id: 3,
        img: '',
        title:'Maimi',
        author:'Samuel',
    }, 
    {
        id: 4,
        img: '',
        title:'Ibeno',
        author:'Princess',
    }, 
    {
        id: 5,
        img: '',
        title:'Cashew Beach',
        author:'David',
    }, 
    {
        id: 6,
        img: '',
        title:'Obudu',
        author:'Kendrick',
    }, 
    {
        id: 7,
        img: '',
        title:'Plateau',
        author:'Loveth',
    }, 
    {
        id: 8,
        img: '',
        title:'Niger Bridge',
        author:'Shelton',
    }, 
    {
        id: 9,
        img: '',
        title:'Ogbunike Cave',
        author:'Governor',
    }, 
    {
        id: 10,
        img: '',
        title:'War Museum',
        author:'Stella',
    }, 
    {
        id: 11,
        img: '',
        title:'Ojukwu Bunker',
        author:'Jennifer',
    }, 
    {
        id: 12,
        img: '',
        title:'Las Vegas',
        author:'Funke',
    }, 
    {
        id: 13,
        img: '',
        title:'Land of Hope',
        author:'Debby',
    },  
    {
        id: 14,
        img: '',
        title:'Centre of Excellence',
        author:'Imaobong',
    }, 
    {
        id: 15,
        img: '',
        title:'Bridge of No Return',
        author:'Mercy',
    }, 
    {
        id: 16,
        img: '',
        title:'Home Zone',
        author:'Paul',
    }, 
    {
        id: 17,
        img: '',
        title:'Road Trip',
        author:'Joshua',
    }, 
    {
        id: 18,
        img: '',
        title:'Left Wing',
        author:'Syndey',
    }, 
];


export default function Gallery() {
    return (
        <section className='gallerylist'>
            {galleryData.map((imageB) => {
                // const { img, title, author } = imageB;
                return (
                    <ImageBox key={galleryData.id} {...imageB}></ImageBox>
                );
            })}

        </section>
    );
}

const ImageBox = (props) => {
    const { img, title, author } = props;
    return (
        <article className='imageBox'>
            <img src={img} alt='' />
            <h3>{title}</h3>
            <h6>{author}</h6>
        </article>
    );
};



// export default function Places() {
//     return (
//         <div>
//             <div>
//                 <img src='' alt=''/>
//                 <p>Few descriptions</p>
//             </div>
//             <div>
//                 <img src='' alt=''/>
//                 <p>Few descriptions</p>
//             </div>
//             <div>
//                 <img src='' alt=''/>
//                 <p>Few descriptions</p>
//             </div>
//             <div>
//                 <img src='' alt=''/>
//                 <p>Few descriptions</p>
//             </div>
//             <div>
//                 <img src='' alt=''/>
//                 <p>Few descriptions</p>
//             </div>
//             <div>
//                 <img src='' alt=''/>
//                 <p>Few descriptions</p>
//             </div>
//             <div>
//                 <img src='' alt=''/>
//                 <p>Few descriptions</p>
//             </div>
//             <div>
//                 <img src='' alt=''/>
//                 <p>Few descriptions</p>
//             </div>
//             <div>
//                 <img src='' alt=''/>
//                 <p>Few descriptions</p>
//             </div>
//         </div>
//     )
// }

// const imageBox = [
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// },  
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// }, 
//     {img: '',
//     title:'',
//     author:'',
// }, 
// ];
