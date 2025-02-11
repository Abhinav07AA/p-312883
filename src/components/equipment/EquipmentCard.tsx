import React from "react";

interface EquipmentCardProps {
  image: string;
  model: string;
  name: string;
  rating: number;
  location: string;
  tags: string[];
  price: string;
}

export const EquipmentCard: React.FC<EquipmentCardProps> = ({
  image,
  model,
  name,
  rating,
  location,
  tags,
  price,
}) => {
  return (
    <article className="border bg-white rounded-xl border-solid border-[#D9D9D9]">
      <img
        loading="lazy"
        src={image}
        className="aspect-[1.63] object-contain w-full rounded-[12px_12px_0px_0px]"
        alt={name}
      />
      <div className="flex flex-col p-4">
        <div className="flex justify-between">
          <div>
            <h3 className="text-[#0B0B0B] text-[19px] font-medium tracking-[0.1px]">
              {model}
            </h3>
            <p className="text-[#666] text-sm font-normal tracking-[0.04px] mt-1">
              {name}
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs text-[#0B0B0B] font-normal tracking-[0.05px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/fffffd9f2f490f286a693cf3333be08347f81d3f590c17e4818637aaefc6fd77?placeholderIfAbsent=true"
              className="w-[15px] h-[15px]"
              alt=""
            />
            <span>{rating} reviews</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-[#0B0B0B] font-normal tracking-[0.05px] mt-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/1b142f4e0d50321d4e4ac5f1187c8e54cdb404b635d3a49d66bfbaa86b7d59ee?placeholderIfAbsent=true"
            className="w-5 h-5"
            alt=""
          />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-4 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[rgba(249,249,249,1)] border text-xs text-[#0B0B0B] font-normal tracking-[0.05px] px-3.5 py-2 rounded-[100px] border-[rgba(205,205,205,1)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mt-5">
          <span className="text-[#0B0B0B] text-[23px] font-normal">
            {price}
          </span>
          <button className="bg-[#388E3C] text-white text-sm font-medium uppercase tracking-[0.18px] px-8 py-[13px] rounded-[100px]">
            Rent Now
          </button>
        </div>
      </div>
    </article>
  );
};
