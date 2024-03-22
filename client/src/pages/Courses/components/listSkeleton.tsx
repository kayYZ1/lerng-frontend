import CourseSkeleton from "./courseSkeleton"

export default function ListSkeleton() {
  return (
    <>
      {Array(10).fill(1).map((_, index) => {
        <CourseSkeleton key={index} />
      })}
    </>
  )
}