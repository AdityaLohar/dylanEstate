import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { imgState } from '../atom';

const PropertyImages = ({ setFlag }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const setImg = useSetRecoilState(imgState);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFlag(1)
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
                setImg((prevImg) => [...prevImg, reader.result]);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="text-sm sm:text-md text-gray-800 flex flex-col items-center sm:items-start p-5 sm:p-10 space-y-4">
            <div className="text-center sm:text-left pb-2">
                Add Photos / Videos to attract more tenants!
            </div>

            <div className="text-center sm:text-left py-3">
                Add Photos of living room, bedroom, bathroom, floor, kitchen, doors, balcony, location map, neighbourhood, etc.
            </div>

            <div className={`flex flex-col items-center sm:items-start w-full border border-1 ${selectedImage ? 'h-auto' : 'h-64'} justify-center`}>
                <label className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer m-auto">
                    Add photo now
                    <input type="file" className="hidden" onChange={handleFileChange} />
                </label>
                {selectedImage && (
                    <img src={selectedImage} alt="Selected" className="mt-4 w-full p-4" />
                )}
            </div>
        </div>
    );
};

export default PropertyImages;
