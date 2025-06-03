import { ReactNode } from "react"

interface CardProps {

    children: ReactNode
    className?: string

}

export default function Card({ children, className = "" }: CardProps){

    return (

        <div className = {`${className} h-full rounded-2xl bg-[var(--background)] text-[var(--foreground)] dark:border dark:border-gray-500 shadow-xl overflow-hidden`}>{children}</div>

    )

}