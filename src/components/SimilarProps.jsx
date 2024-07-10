
const properties = [
    {
        id: 1,
        image: 'https://media.istockphoto.com/id/1142747548/photo/modern-house-interior-design.jpg?s=612x612&w=0&k=20&c=vqh5Cx0xMp9mZfMPOUbivOQ9v2WLN07g-guVS6MsjaY=',
        title: '2 BHK Luxury Apartment',
        address: 'Mira Road, Mumbai',
        price: '₹60 Lac',
        size: '800 sq.ft',
    },
    {
        id: 2,
        image: 'https://media.istockphoto.com/id/1142747548/photo/modern-house-interior-design.jpg?s=612x612&w=0&k=20&c=vqh5Cx0xMp9mZfMPOUbivOQ9v2WLN07g-guVS6MsjaY=',
        title: '3 BHK Modern Flat',
        address: 'Andheri, Mumbai',
        price: '₹75 Lac',
        size: '1200 sq.ft',
    },
    {
        id: 3,
        image: 'https://media.istockphoto.com/id/1142747548/photo/modern-house-interior-design.jpg?s=612x612&w=0&k=20&c=vqh5Cx0xMp9mZfMPOUbivOQ9v2WLN07g-guVS6MsjaY=',
        title: '1 BHK Cozy Apartment',
        address: 'Bandra, Mumbai',
        price: '₹50 Lac',
        size: '600 sq.ft',
    },
    {
        id: 4,
        image: 'https://media.istockphoto.com/id/1142747548/photo/modern-house-interior-design.jpg?s=612x612&w=0&k=20&c=vqh5Cx0xMp9mZfMPOUbivOQ9v2WLN07g-guVS6MsjaY=',
        title: '3 BHK Modern Flat',
        address: 'Andheri, Mumbai',
        price: '₹75 Lac',
        size: '1200 sq.ft',
    },
    {
        id: 5,
        image: 'https://media.istockphoto.com/id/1142747548/photo/modern-house-interior-design.jpg?s=612x612&w=0&k=20&c=vqh5Cx0xMp9mZfMPOUbivOQ9v2WLN07g-guVS6MsjaY=',
        title: '1 BHK Cozy Apartment',
        address: 'Bandra, Mumbai',
        price: '₹50 Lac',
        size: '600 sq.ft',
    },
    // Add more properties as needed
];

const PropertyCard = ({ property }) => (
    <div className="flex-shrink-0 w-60 p-4 m-2 mr-6 bg-white rounded-md shadow-md">
        <img src={property.image} alt={property.title} className="w-full h-40 object-cover rounded" />
        <div className="py-4">
            <h3 className="mt-2 text-lg md:text-base sm:text-sm font-semibold">{property.title}</h3>
            <p className="text-gray-600 text-base md:text-sm sm:text-xs">{property.address}</p>
            <p className="mt-1 text-gray-800 font-bold text-base md:text-sm sm:text-xs">{property.price}</p>
            <p className="text-gray-600 text-base md:text-sm sm:text-xs">{property.size}</p>
        </div>
    </div>
);

const SimilarProps = () => {
    return (
        <div className="p-4 bg-[#fdfaf7]">
            <h3 className="p-4 text-xl md:text-2xl font-semibold mb-4">Similar Properties In Mira Road</h3>
            <div className="flex overflow-x-scroll scrollbar-hide border border-gray-100 md:border-none rounded-lg">
                {properties.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </div>
    );
};

export default SimilarProps;
