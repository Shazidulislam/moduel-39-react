import { use } from "react"


export default function Friends({friendsPromises}){
  const friends = use(friendsPromises)
  return(
    <div className="card">
      <h3>Friends :{friends.length} </h3>
    </div>
  )
}