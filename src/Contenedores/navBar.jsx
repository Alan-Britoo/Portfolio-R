import React from "react";

export function NavBar({ nom, url }) {
  return (
    <>
      <a href={url}>{nom}</a>
    </>
  );
}

export function NavIcons({ url, alt, url2 }) {
  return (
    <>
      <a
        className="transform hover:scale-110 transition duration-300 ease-in-out w-full h-full flex justify-center items-center"
        href={url2}
      >
        <img className="h-full w-full" src={url} alt={alt} />
      </a>
    </>
  );
}
