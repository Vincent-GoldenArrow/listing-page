"use client"

import { useState } from "react"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink
} from "@/components/ui/pagination"
import Image from "next/image"

export default function WinPagination() {
  const totalWins = 7
  const [current, setCurrent] = useState(1)

  const prev = () => setCurrent((p) => Math.max(1, p - 1))
  const next = () => setCurrent((p) => Math.min(totalWins, p + 1))

  return (
    <Pagination>
      <PaginationContent className="flex items-center gap-2">
        {/* Prev button */}
        <PaginationItem>
          <PaginationLink
            onClick={prev}
            href="#"
            className="cursor-pointer bg-neutral-950 border-neutral-600 border-2 w-12 h-12 hover:bg-transparent"
          >

            <Image
              className="rotate-180"
              src="/arrow-white.png"
              alt="arrow up"
              width={20}
              height={20}
            />
          
          </PaginationLink>
        </PaginationItem>

        {/* Win text */}
        <span className="text-white text-xl font-normal pl-5 pr-5">
          Win <span className="text-yellow-400">{current} </span> of <span className="text-yellow-400">{totalWins} </span>
        </span>

        {/* Next button */}
        <PaginationItem>
          <PaginationLink
            onClick={next}
            href="#"
            className="cursor-pointer bg-neutral-950 border-neutral-600 border-2 w-12 h-12 hover:bg-transparent "
          >
            <Image
              className=" "
              src="/arrow-white.png"
              alt="arrow up"
              width={20}
              height={20}
            />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
