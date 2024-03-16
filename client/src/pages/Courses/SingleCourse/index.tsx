import { useParams } from "react-router-dom"

export default function Course() {
  const { id } = useParams<{ id: string }>();
  return (
    <div>Single Course with id: {id}</div>
  )
}