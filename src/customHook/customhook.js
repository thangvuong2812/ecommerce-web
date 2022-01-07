import React, { useEffect, useRef } from 'react'

export const useFadeModal = () => {
    const filterRef = useRef();

    const showHideFilter = () => filterRef.current.classList.toggle('active');

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (filterRef.current && !filterRef.current.contains(e.target)) {
                const arrClassList = [...filterRef.current.classList];
                if (arrClassList.includes("active")) {
                    filterRef.current.classList.remove("active");
                }
            }
        }
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [filterRef]);
    return { filterRef, showHideFilter };
}
export const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    },[value]);
    return ref.current;
}
