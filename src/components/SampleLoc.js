const products = [
  {
    id: 1,
    name: 'Hyderabad',
    href: 'https://travel-209.vercel.app/product/hyderabad',
    imageSrc: 'https://images.pexels.com/photos/11321238/pexels-photo-11321238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    imageAlt: "https://travel-209.vercel.app/product/hyderabad",
    price: '₹6000',
    color: 'Best time to go: September',
  },
  {
      id: 2,
      name: 'Dubai',
      href: 'https://travel-209.vercel.app/product/dubai',
      imageSrc: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: "venice",
      price: '₹50000',
      color: 'Best time to go: June',
    },
    {
      id: 3,
      name: 'Rome',
      href: 'https://travel-209.vercel.app/product/rome',
      imageSrc: 'https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: "venice",
      price: '₹800',
      color: 'Best time to go: June',
    },
    {
      id: 4,
      name: 'New York',
      href: 'https://travel-209.vercel.app/product/new-york',
      imageSrc: 'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: "venice",
      price: '₹600',
      color: 'Best time to go: June',
    },
]

export default function SampleLoc() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular Destinations</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import Destination
//  from '../backend/models/Destinations';
// const SampleLoc = () => {
//   const [destination, setDestinations] = useState([]);

//   useEffect(() => {
//     fetch('../backend/api/destination')
//       .then(response => response.json())
//       .then(data => {
//         console.log('Data from API:', data);
//         setDestinations(data);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);


//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular Destinations</h2>
//         <h1>namaste</h1>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {destination.map(destination => (
//             <div key={destination.id} className="group relative">
//               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                 <img
//                   src={destination.imageSrc}
//                   alt={destination.imageAlt}
//                   className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                 />
//               </div>
//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-gray-700">
//                     <a href={/details/${destination.id}}>
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {destination.name}
//                     </a>
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">{destination.color}</p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">{destination.price}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SampleLoc;