import React from "react";
import { Timeline } from "./timeline"; // pastikan T kapital dan path benar
export function TimelineDemo() {
    const data = [
        {
            title: "2024",
            content: <p>PKL Network Engineer & Project Website</p>,
        },
        {
            title: "2023",
            content: <p>Belajar React & Tailwind CSS</p>,
        },
    ];

    return (
        <div style={{ width: "100%" }}>
            <Timeline data={data} />
        </div>
    );
}