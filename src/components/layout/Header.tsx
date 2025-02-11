import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.08)] flex w-full items-center gap-5 justify-between px-4 py-[5px]">
      <div className="flex items-center gap-2 text-sm text-[#121212] font-medium tracking-[0.04px] leading-[15px]">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00f05de1567dea6f1dfa1a705eba1330096dd4086f92bcd1a69d22fee2bc1fd4?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00f05de1567dea6f1dfa1a705eba1330096dd4086f92bcd1a69d22fee2bc1fd4?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00f05de1567dea6f1dfa1a705eba1330096dd4086f92bcd1a69d22fee2bc1fd4?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00f05de1567dea6f1dfa1a705eba1330096dd4086f92bcd1a69d22fee2bc1fd4?placeholderIfAbsent=true&width=800 800w"
          className="aspect-[1] object-contain w-[55px] shrink-0"
          alt="Portal Logo"
        />
        <h1 className="w-[219px]">
          Uttar Pradesh Farm Equipment Management Portal
        </h1>
      </div>

      <nav className="flex items-center gap-8 text-sm font-normal text-justify tracking-[0.04px] leading-[1.1]">
        <Link to="/browse" className="text-[#0B0B0B] font-medium">
          Browse Equipment
        </Link>
        <Link to="/rentals" className="text-[#666]">
          My Rentals
        </Link>
        <Link to="/marketplace" className="text-[#666]">
          Residue Marketplace
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <button aria-label="Notifications">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/b69a4e222c87e1c4e996ac48ff969cf7e400097f7c85fb131003a6bafc324791?placeholderIfAbsent=true"
            className="w-8 h-8"
            alt=""
          />
        </button>
        <button aria-label="Messages">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00ed34c031431e90f25ffdd445313d366623a6818e9df7323415884fe0391d5a?placeholderIfAbsent=true"
            className="w-8 h-8"
            alt=""
          />
        </button>
        <button aria-label="Profile">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/1741de0da35527ccef29d9421814faae1fa6833c377682c2f65997f0c9806754?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/1741de0da35527ccef29d9421814faae1fa6833c377682c2f65997f0c9806754?placeholderIfAbsent=true&width=200 200w"
            className="w-8 h-8 rounded-full"
            alt=""
          />
        </button>
      </div>
    </header>
  );
};
