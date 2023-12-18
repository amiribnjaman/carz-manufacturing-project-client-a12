import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  console.log(match)

  return (
    <div>
      <Link
        style={{
          color: match ? "#014E9C" : "",
          // background: match && '#f4faff',
          // padding: match && '8px 20px',
          fontWeight: match ? "bold" : " ",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
