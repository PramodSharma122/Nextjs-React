import { HomeIcon,MenuIcon } from "@cct/icons";
import React from "react";

export const AppFooter = () => {
  return (
    <footer className="bg-[#081b29] flex py-6 px-[10%] justify-between items-center">
        <p className="text-[#bdbdbd] text-l">Copyright &copy; 2023 by Pramod.</p>
        <svg className="inline-flex justify-center text-[#f5f5f5] bg-[#12f7ff] p-2.5 rounded-md" href="/" xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
    </footer>
  );
};
