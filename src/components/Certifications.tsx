import SCHCertification from "../assets/img/Certifications/SCH_certification.jpg";

const Certifications: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-full mb-2">
      <div className="title">
        <h1>Certifications</h1>
      </div>
      <div className="flex justify-center items-center w-full mt-2 px-4">
        <img
          src={SCHCertification}
          alt="Smart Contract Hacking Certification"
          className="max-w-full md:max-w-[70%] lg:max-w-[55%] h-auto max-h-[75vh] object-contain rounded-lg shadow-[0_15px_60px_rgba(0,0,0,1)] border border-white/20"
        />
      </div>
    </div>
  );
};

export default Certifications;
