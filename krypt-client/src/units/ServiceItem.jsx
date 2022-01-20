const ServiceItem = ({ icon, title, desc, color }) => {
  return (
    <div
      className={
        "text-white flex justify-start items-center space-x-4 p-4 white-glassmorphism hover:bg-white/[0.05] transition cursor-pointer hover:border hover:border-solid hover:border-white/20"
      }
    >
      <div className={`p-2 rounded-full ${color}`}>{icon}</div>
      <div className={"space-y-1.5"}>
        <h1>{title}</h1>
        <h4 className={"text-xs"}>{desc}</h4>
      </div>
    </div>
  );
};

export default ServiceItem;
