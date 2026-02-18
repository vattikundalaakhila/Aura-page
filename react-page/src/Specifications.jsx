


const specsLeft = [
  { label: "Dimensions", value: "7.9mm × 2.8mm" },
  { label: "Materials", value: "Titanium with PVD coating" },
  { label: "Charging", value: "Wireless, 90 min full charge" },
  { label: "Sensors", value: "PPG, Temperature, Accelerometer" },
  { label: "Sizes", value: "6-13 US ring/bracelet sizes" },
];

const specsRight = [
  { label: "Weight", value: "4-6g (size dependent)" },
  { label: "Battery", value: "Up to 7 days" },
  { label: "Water Resistance", value: "5ATM (50m)" },
  { label: "Connectivity", value: "Bluetooth 5.2" },
  { label: "Colors", value: "Stealth Black, Silver, Rose Gold" },
];

const SpecCard = ({ label, value }) => (
  <div className="rounded-xl border border-cyan-500/30 bg-gradient-to-r from-[#0f1a1c] to-[#0b0f11] px-6 py-5 flex justify-between items-center hover:border-cyan-400 transition duration-300">
    <span className="text-cyan-400 font-medium">{label}</span>
    <span className="text-gray-200 text-sm md:text-base">{value}</span>
  </div>
);

const Specifications = () => {
  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      
      {/* Background subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold">
            Technical{" "}
            <span className="text-cyan-400">Specifications</span>
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            Premium materials meet cutting-edge technology
          </p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column */}
          <div className="space-y-6">
            {specsLeft.map((item, index) => (
              <SpecCard key={index} {...item} />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {specsRight.map((item, index) => (
              <SpecCard key={index} {...item} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Specifications;

    
