"use client";

import {useEffect, useState} from "react";

const useDimensions = () => {
    const [{innerWidth, innerHeight}, setInnerDimensions] = useState<{
        innerWidth: number,
        innerHeight: number
    }>({innerWidth: 0, innerHeight: 0});

    const [{clientWidth, clientHeight}, setClientDimentions] = useState<{
        clientWidth: number,
        clientHeight: number
    }>({clientWidth: 0, clientHeight: 0});

    useEffect(() => {
        if (window !== undefined && typeof window !== "undefined") {
            const {innerWidth, innerHeight} = window;
            const {clientWidth, clientHeight} = window.document.documentElement;
            setInnerDimensions({innerWidth, innerHeight});
        }
    }, []);
}
