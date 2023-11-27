import type { Metadata } from 'next'
import { ReactNode } from "react";
import { Inter } from 'next/font/google'
import '../../../../../app/globals.css'
import { Body, HTML, joinClasses, Main } from "@/fsd-structure/shared";
import cls from "./layout.module.scss";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Spirit Fit",
  description: "Content Management System For AddReality Software"
}

export default function RootLayout({
    children,
}: {
    children: ReactNode
}) {
    return (
        <HTML
            lang="en"
        >
            <Body
                className={joinClasses([cls.body, inter.className])}
            >
                <Main
                    className={cls.main}
                >
                    {
                        children
                    }
                </Main>
            </Body>
        </HTML>
    )
}
