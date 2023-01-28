import React from "react";

export function CardSite() {
  return (
    <div
      className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3"
      onClick={() => alert(99)}
    >
      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center h-56 p-4"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80)",
          }}
        ></div>
        <div className="p-4">
          <p className="uppercase tracking-wide text-md font-bold text-gray-700">
            Figma Jam
          </p>
          <p className="text-gray-700">Projeto que simula o Figma</p>
        </div>
        <div className="p-4 border-t border-gray-300 text-gray-700">
          <p className="text-sm font-bold text-gray-700">Tecnologias</p>
          <p className="text-sm text-gray-700">Redux, Stitches, SWR</p>
        </div>
      </div>
    </div>
  );
}
