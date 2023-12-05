import type { Metadata } from 'next'
import { ReactNode } from "react";
import { Inter } from 'next/font/google'
import '../../../../../app/globals.css'
import { Body, HTML, joinClassnames, Main } from "@/fsd-structure/shared";
import cls from "./layout.module.scss";
import {ProvidersWrapper} from "@/config/providers/ProvidersWrapper";

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
        <ProvidersWrapper>
            <HTML
                lang="en"
            >
                <Body
                    className={joinClassnames([cls.body, inter.className])}
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
        </ProvidersWrapper>
    )
}
