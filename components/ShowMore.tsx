'use client'

import { useRouter } from "next/navigation"

import { ShowMoreProps } from "@/types"
import { UpdateSearchParams } from "@/utils"
import CustomButton from "./CustomButton"


const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter()

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10

    // Update the "limit" search parameter in the URL with the new value
    const newPathName = UpdateSearchParams('limit', `${newLimit}`)

    router.push(newPathName)
  }

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore