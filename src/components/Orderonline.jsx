import { deliveryGuy } from "../utils";
import { FaLongArrowAltRight } from "react-icons/fa"; 

const Orderonline = () => {
  return (
    <div className="bg-white flex items-center justify-center" style={{ height: '90vh' }}>
      <div className="flex flex-row items-center justify-between w-10/12">
        <div className="flex justify-center w-7/12">
          <img src={deliveryGuy} alt="Delivery Guy" className="h-auto w-full max-w-xl pt-4" />
        </div>
        <div className="flex flex-col items-start w-5/12 pl-8">
          <span className="text-black text-lg font-bold">ONLINE DELIVERY</span>
          <h1 className="text-4xl font-bold text-orange-600 mt-2 mb-4">Fastest & Safe Food Delivery</h1>
          <p className="text-gray-600 text-light mb-4">
            Enjoy the convenience of our fast and safe food delivery service, bringing your favorite meals right to your doorstep.
          </p>
          <button className="flex items-center bg-orange-600 text-white px-4 py-2 rounded-lg">
            <span className="mr-2">ORDER ONLINE</span>
            <FaLongArrowAltRight className="mt-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orderonline;
