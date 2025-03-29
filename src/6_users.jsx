import { use } from "react"

export default function Users({fetchUsers}){
  const users = use(fetchUsers);
  console.log(users);
  return(
    <div className="card">
      <h2>Users :{users.length} </h2>
    </div>
  )
}



// "use client";
// import { use, Suspense } from "react";


// function Message({ messagePromise }) {
//   const messageContent = use(messagePromise);
//   return <p>Here is the message: {messageContent}</p>;
  
// }

// export function MessageContainer({ messagePromise }) {
//   return (
//     <Suspense fallback={<p>⌛Downloading message...</p>}>
//       <Message messagePromise={messagePromise} />
//     </Suspense>
//   );
// }
