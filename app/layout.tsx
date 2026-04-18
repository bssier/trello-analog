import type {Metadata} from "next";
import {ReactNode} from "react";

export const metadata: Metadata = {
    title: "trello analog",
    description: "Default analog app trello"
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang={"en"} suppressHydrationWarning={true}>
        <body suppressHydrationWarning={true}>
        <header></header>
        <main>
            {children}
        </main>
        <footer></footer>
        </body>
        </html>
    );
}
