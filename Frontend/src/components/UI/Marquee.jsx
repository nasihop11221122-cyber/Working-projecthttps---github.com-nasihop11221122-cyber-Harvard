export default function Marquee({ items, speed = 30 }) {
  const tripled = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* <div
        className="absolute left-0 top-0 bottom-0 w-36 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #eff6ff, transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-36 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #eff6ff, transparent)" }}
      /> */}

      <div
        className="flex w-max"
        style={{ animation: `marqueeRTL ${speed}s linear infinite` }}
      >
        {tripled.map((item, i) => (
          <div key={i}>
            {item.image ? (
              <div className="inline-flex items-center px-2 mx-2 ">
                <img
                  src={item.image}
                  alt={item.label || ""}
                  className="h-8 w-auto object-contain"
                />
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-5 py-2 mx-2 rounded-full backdrop-blur-md text-lg font-semibold tracking-widest uppercase whitespace-nowrap cursor-default transition-all duration-300 hover:-translate-y-1 text-gray-200">
                <span className="text-sm">{item.icon}</span>
                {item.label}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}



// const InfiniteMarquee = ({ items, speed = 10 }) => {
//   const tripled = [...items, ...items, ...items];

//   return (
//     <div className="relative w-full overflow-hidden py-4">
//       {/* fade left */}
//       <div
//         className="absolute left-0 top-0 bottom-0 w-36 z-10 pointer-events-none"
//         style={{ background: "linear-gradient(to right, #eff6ff, transparent)" }}
//       />
//       {/* fade right */}
//       <div
//         className="absolute right-0 top-0 bottom-0 w-36 z-10 pointer-events-none"
//         style={{ background: "linear-gradient(to left, #eff6ff, transparent)" }}
//       />

//       <div
//         className="flex w-max"
//         style={{ animation: `marqueeRTL ${speed}s linear infinite` }}
//       >
//         {tripled.map((item, i) => (
//           <div
//             key={i}
//             className="inline-flex items-center gap-2 px-5 py-2 mx-2 rounded-full border border-black/[0.07] backdrop-blur-md text-xs font-semibold tracking-widest uppercase whitespace-nowrap cursor-default transition-all duration-300 hover:-translate-y-1 bg-white/55 text-gray-500 hover:bg-white hover:text-gray-900"
//           >
//             <span className="text-sm">{item.icon}</span>
//             {item.label}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };