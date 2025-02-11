import React from "react";
import { FilterSection } from "./FilterSection";

export const Sidebar = () => {
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
          <div className="relative flex flex-col items-stretch text-[10px] text-black font-normal whitespace-nowrap tracking-[0.15px] justify-center mt-3 pt-[5px] pb-6 px-10">
            <div className="bg-[#F25921] z-0 flex min-h-1 w-full rounded-[100px]" />
            <div className="absolute z-0 flex min-h-2 max-w-full w-[214px] gap-5 justify-between h-2 bottom-2 inset-x-0">
              {[0, 2, 4, 6, 8, 10].map((value) => (
                <div
                  key={value}
                  className="z-10 bg-black w-px pt-1.5 rounded-[1px]"
                >
                  {value}kg
                </div>
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
