import { SingleEmail } from "./SingleEmail";

export function EmailList({getFilteredEmails,toggleRead, toggleStar}){
    return(
        <main className="emails">
      <ul>
          {getFilteredEmails().map((email, index) => (
            <SingleEmail
            index={index} email={email} toggleRead={toggleRead} toggleStar={toggleStar}/>
          ))}
        </ul>
      </main>
    )
}