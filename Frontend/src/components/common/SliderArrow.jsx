import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";



// Custom Arrow Button Component - FIXED
export const SliderArrow = ({ direction, onClick, disabled }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            aria-label={direction === "left" ? "Previous" : "Next"}
            className={`
        group relative flex items-center justify-center
        w-12 h-12 rounded-lg border-2 overflow-hidden
        transition-colors duration-300
        ${disabled
                    ? "border-gray-300 text-gray-400 cursor-not-allowed bg-transparent"
                    : "border-gray-300 text-gray-900 hover:bg-gray-900 hover:text-white hover:border-gray-900 cursor-pointer bg-transparent"
                }
      `}
        >
            {/* Arrow Container - child of group */}
            <span className="relative w-5 h-5 overflow-hidden">

                {/* Default Arrow - slides OUT on hover */}
                <span
                    className={`
            absolute inset-0 flex items-center justify-center
            transition-transform duration-300 ease-out
            ${direction === "left"
                            ? "group-hover:-translate-x-full"
                            : "group-hover:translate-x-full"
                        }
          `}
                >
                    {direction === "left" ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </span>

                {/* Hover Arrow - slides IN from opposite side */}
                <span
                    className={`
            absolute inset-0 flex items-center justify-center
            transition-transform duration-300 ease-out
            ${direction === "left"
                            ? "translate-x-full group-hover:translate-x-0"
                            : "-translate-x-full group-hover:translate-x-0"
                        }
          `}
                >
                    {direction === "left" ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
                </span>

            </span>
        </button>
    );
};