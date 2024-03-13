import CardSkeleton from "@/components/blocks/CardSkeleton"

const Loading = () => {
  return (
    <div className="p-">
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>
    </div>
  )
}

export default Loading
