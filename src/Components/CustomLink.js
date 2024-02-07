import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{
          fontWeight: match ? "bold" : " ",
        }}
        to={to}
        {...props}
        className={`${
          match ? "text-[#ffa500] md:text-[#014E9C] text-[20px] md:text-[16px]" : "text-[#fff] md:text-[#000]"
        } py-1 inline-block`}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
