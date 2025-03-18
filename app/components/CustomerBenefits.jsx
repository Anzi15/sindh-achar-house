import { FiTruck } from "react-icons/fi";
import { PiPackage } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";

const CustomerBenefits = () => {
  return (
    <section className="bg-[#F6F6F0] min-h-[20rem] flex items-center gap-6 overflow-x-auto md:overflow-x-hidden snap-x snap-mandatory">
      <div className="flex min-w-full md:min-w-[20%] flex-col items-center text-center text-brandBrown gap-4 snap-center">
        <FiTruck className="text-5xl" />
        <h2 className="text-xl font-bold">Fast Nationwide Delivery</h2>
        <p className="max-w-[70%]">
          Enjoy fresh homemade aachar delivered straight to your doorstep, anywhere in Pakistan.
        </p>
      </div>
      <div className="flex min-w-full md:min-w-[20%] flex-col items-center text-center text-brandBrown gap-4 snap-center">
        <PiPackage className="text-5xl" />
        <h2 className="text-xl font-bold">Fresh & Preservative-Free</h2>
        <p className="max-w-[70%]">
          Our aachars are made with 100% natural ingredients, free from artificial preservatives.
        </p>
      </div>
      <div className="flex min-w-full md:min-w-[20%] flex-col items-center text-center text-brandBrown gap-4 snap-center">
        <TfiWorld className="text-5xl font-thin" />
        <h2 className="text-xl font-bold">Traditional Recipes, Modern Hygiene</h2>
        <p className="max-w-[70%]">
          We follow authentic homemade recipes while maintaining the highest hygiene standards.
        </p>
      </div>
      <div className="flex min-w-full md:min-w-[20%] flex-col items-center text-center text-brandBrown gap-4 snap-center">
        <FaWhatsapp className="text-5xl" />
        <h2 className="text-xl font-bold">Custom Orders & Bulk Requests</h2>
        <p className="max-w-[70%]">
          Need a special blend or a bulk order? Message us on WhatsApp for personalized service.
        </p>
      </div>
    </section>
  );
};

export default CustomerBenefits;
