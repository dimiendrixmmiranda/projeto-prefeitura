import { ReactNode } from "react";

interface MainProps {
    children: ReactNode;
}

export default function Main({ children }: MainProps) {
    return (
        <main className="bg-[--cinza]">
            {children}
        </main>
    );
}
