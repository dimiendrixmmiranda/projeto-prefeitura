'use client'
import Template from "@/components/template/Template";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/map"), { ssr: false });

export default function Page() {
    return (
        <Template>
            <div className="text-black">
                <div className="w-[300px] h-[300px] bg-red-400 relative">
                    <Map latitude={-23.498468956489504} longitude={-49.9247063530446} texto="Centro" />
                </div>
            </div>
        </Template>
    );
}
