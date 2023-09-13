import React from "react";
import LatestRelease from "../latestRelease/LatestRelease";

export default function Main({ data }) {
    return (
        <div>
            <LatestRelease fantasyBooks={data} />
        </div>
    )
}