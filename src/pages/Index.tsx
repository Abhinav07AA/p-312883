import React from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/filters/Sidebar";
import { EquipmentCard } from "@/components/equipment/EquipmentCard";

const equipmentData = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/0b355f5c355752a78e339c2a993e604834202dab75377b31ec7c961264060c7b",
    model: "MAH605DI-1234ZY",
    name: "Mahindra Arjun Novo 605 DI Tractor",
    rating: 4.1,
    location: "Agra, Uttar Pradesh",
    tags: ["Prime Mover", "Operator Included"],
    price: "₹2,000/acre",
  },
  // Duplicate the same equipment 5 more times for the grid
  ...Array(5).fill({
    image:
      "https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/0b355f5c355752a78e339c2a993e604834202dab75377b31ec7c961264060c7b",
    model: "MAH605DI-1234ZY",
    name: "Mahindra Arjun Novo 605 DI Tractor",
    rating: 4.1,
    location: "Agra, Uttar Pradesh",
    tags: ["Prime Mover", "Operator Included"],
    price: "₹2,000/acre",
  }),
];

const Index = () => {
  return (
    <div className="bg-[rgba(249,249,249,1)] min-h-screen flex flex-col">
      <Header />

      <main className="flex flex-1 gap-5 p-6">
        <div className="w-[17%]">
          <Sidebar />
        </div>

        <div className="w-[83%]">
          <div className="flex flex-col">
            <h2 className="text-[#0B0B0B] text-[19px] font-medium leading-[1.1] tracking-[0.03px]">
              Equipment
            </h2>
            <p className="text-[#0B0B0B] text-xs font-normal leading-[1.1] tracking-[0.05px] mt-1">
              Total : 8
            </p>

            <div className="grid grid-cols-3 gap-5 mt-6">
              {equipmentData.map((equipment, index) => (
                <EquipmentCard key={index} {...equipment} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
