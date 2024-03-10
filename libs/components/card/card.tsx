import Html, { e } from "@kitajs/html"

export const Card = ({contents, liked}: {contents: string, liked: boolean})=> {
  return (
    <div>
      <p>{e`${contents}`}</p>
      {liked ? <p>Liked</p> : <p>Unliked</p>}
    </div>
  )
}