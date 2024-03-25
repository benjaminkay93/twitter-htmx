import Html from "@kitajs/html"

export const TweetInput = () => {
  return (
    <form id="new_tweet_input" hx-post="/tweet/new" hx-target="#new_tweet_input" hx-swap="outerHTML">
      <input name="new_tweet" required />
    </form>
  )
}
