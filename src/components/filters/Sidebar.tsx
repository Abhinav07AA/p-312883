
import React, { useState } from "react";
import { FilterSection } from "./FilterSection";
import * as Slider from "@radix-ui/react-slider";

export const Sidebar = () => {
  const [quantityValue, setQuantityValue] = useState([5]); // Default to middle value

  return (
    <aside className="bg-white flex flex-col w-full pt-4 pb-12 px-4">
      <h2 className="text-[#0B0B0B] text-base font-normal leading-[1.1] tracking-[0.08px]">
        Filter by
      </h2>

      <div className="w-full mt-4">
        <FilterSection title="Equipment Type">
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 text-sm text-[#0B0B0B] font-normal">
              <input type="checkbox" checked className="w-5 h-5" />
              <span>All</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-[#0B0B0B] font-normal">
              <input type="checkbox" className="w-5 h-5" />
              <span>Prime Movers</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-[#0B0B0B] font-normal">
              <input type="checkbox" className="w-5 h-5" />
              <span>Implementors</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-[#0B0B0B] font-normal">
              <input type="checkbox" className="w-5 h-5" />
              <span>Spraying Solution</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-[#0B0B0B] font-normal">
              <input type="checkbox" className="w-5 h-5" />
              <span>Crop Residue Management (CRM)</span>
            </label>
          </div>
        </FilterSection>

        <FilterSection title="Village" className="mt-4">
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 text-sm text-[#0B0B0B] font-normal">
              <input type="checkbox" checked className="w-5 h-5" />
              <span>All</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-[#0B0B0B] font-normal">
              <input type="checkbox" className="w-5 h-5" />
              <span>Village A</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-[#0B0B0B] font-normal">
              <input type="checkbox" className="w-5 h-5" />
              <span>Village B</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-[#0B0B0B] font-normal">
              <input type="checkbox" className="w-5 h-5" />
              <span>Village C</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-[#0B0B0B] font-normal">
              <input type="checkbox" className="w-5 h-5" />
              <span>Village D</span>
            </label>
          </div>
        </FilterSection>

        <FilterSection title="Quantity Available" className="mt-4">
          <div className="pt-6 pb-8 px-2">
            <Slider.Root
              className="relative flex items-center select-none touch-none w-full h-5"
              value={quantityValue}
              onValueChange={setQuantityValue}
              max={10}
              step={1}
              aria-label="Quantity"
            >
              <Slider.Track className="bg-[#E5E5E5] relative grow rounded-full h-[3px]">
                <Slider.Range className="absolute bg-[#F25921] rounded-full h-full" />
              </Slider.Track>
              <Slider.Thumb className="block w-5 h-5 bg-white border-2 border-[#F25921] rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#F25921]" />
            </Slider.Root>
            <div className="flex justify-between mt-2 px-2">
              {[0, 2, 4, 6, 8, 10].map((value) => (
                <span
                  key={value}
                  className="text-[10px] text-black font-normal tracking-[0.15px]"
                >
                  {value}kg
                </span>
              ))}
            </div>
          </div>
        </FilterSection>

        <FilterSection title="Price Range" className="mt-4">
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="₹ Min per kg/ton"
              className="rounded bg-white border px-3 py-2.5 border-[#D9D9D9] text-xs"
            />
            <input
              type="text"
              placeholder="₹ Max per kg/ton"
              className="rounded bg-white border px-3 py-2.5 border-[#D9D9D9] text-xs"
            />
          </div>
        </FilterSection>

        <FilterSection title="Delivery Option" className="mt-4">
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 text-sm text-[#0B0B0B] font-normal">
              <input type="checkbox" checked className="w-5 h-5" />
              <span>All</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-[#0B0B0B] font-normal">
              <input type="checkbox" className="w-5 h-5" />
              <span>Self-Pickup</span>
            </label>
            <label className="flex items-center gap-2 text-sm text-[#0B0B0B] font-normal">
              <input type="checkbox" className="w-5 h-5" />
              <span>Delivery Available</span>
            </label>
          </div>
        </FilterSection>
      </div>
    </aside>
  );
};
