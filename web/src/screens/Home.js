import React, { lazy, Suspense } from "react";
import TopNav from "../components/TopNav";

const Downloads = lazy(() => import("../screens/Downloads"));
const Drive = lazy(() => import("../screens/Drive"));

export default function Home({ tab }) {
  const nav = tab || "search";

  return (
    <>
      <TopNav nav={nav} />
      <main>
        <div className="content">
          <Suspense fallback={<div className="div-loading" />}>
            {nav === "downloads" && <Downloads />}
            {nav === "drive" && <Drive />}
          </Suspense>
        </div>
      </main>
    </>
  );
}
