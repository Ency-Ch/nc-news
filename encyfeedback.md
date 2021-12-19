# Checklist for Northcoders News Front End

Good work, Ency. I know you have worked really hard to make progress on this projet and it's looking quite good so far. There are quite a lot of errors and warnings in the console though. I assume you have ignored these as you have gone along and they have piled up 😅 most errors lead to more errors, so the sooner they are resolved, the more of the other errors that disappear 😅 You are doing some things that unecessary too, like passing your setVotes as a prop. To track the vote, we should set up state separate to the current vote. I would also gather all your api calls into a util file instead of having them live at the bottom of components. So far, you've put in some really nice work and should be proud of yourself 😄

## README - write your own and make sure that it:

`you should add your own readme using the points below. https://readme.so/ can be helpful if you're not sure where to start`

- [ ] has a link to the deployed version
- [ ] provides general info about your app
- [ ] includes links to your back end repo
- [ ] specifies the minimum version of Node required to run locally (check your Node version, `node --version` and use the major version that you are on)
- [ ] has clear instructions on how to run your project locally (`git clone <repo-url>, cd ...`)

## UX

- [✅] Basic styling added
- [✅] Responsive design `some squishing of elements as the screen gets quite small but mostly responsive`
- [✅] Items aligned
- [✅] Content legible (not too wide, obstructed, etc)
- [✅] Refreshing doesn’t cause an issue on sub-pages `refreshing comments makes them disappear` this has been corrected
- [ ] No errors in the console `A lot of errors and warnings. These are there to help you so take a read of each issue and try to solve them one by one`
- [✅] Votes / Posts / Deletions happen instantly _OR_ give user indication of loading `only votes releveant at the moment as delete doesn't seem to do anything` //instant update on delete imn[]

## Functionality

### Login

- [✅] Some indication of who is logged in (this can be hardcoded)

### Articles

- [✅] Serves all articles / top articles
- [✅] Can vote on articles
- [ ✅] Can vote a maximum of once in either direction per page load
- [✅] Votes are persistent when page is refreshed
- [✅] Topic pages load only relevant articles (especially when navigating from one topic page to another)
- [✅] Can sort articles by date created / comment_count / votes

### Individual Article / Comments

- [✅] Individual articles are served with comments
- [] Can vote on comments
- [✅ ] Can vote a maximum of once in either direction per page load
- [✅] Votes are persistent when page is refreshed
- [✅] Can post new comments, which are persistent

### Additional functionality:

- [✅ ] Can only delete comments of logged in user
- [✅ ] Deleted comments don’t re-appear on re-render/refresh
- [ ] sort comments by date created / votes
      <!-- `sorting is the issue` -->
- [ ] navigate over pages of articles (if implemented in back-end)
- [ ] navigate over pages of comments (if implemented in back-end)
- [ ] filter / display articles by specific user
- [ ] post new article
- [ ] delete logged in user's articles

## Error Handling

- [ ] Bad url
- [✅ ] Bad topic slug in url
- [ ✅] Bad article id in url
- [✅] Post comment: (No text in comment body / Can you post without logging in?)

## Code

- [✅] Well named components
- [ ] Components reused where possible (`Articles` / `Voter`...) `article voter could be expanded to be used in comments too, comment voter implemented independently`
- [✅] Minimal state - don't hold derivable data in state
- [✅] Set state correctly, using previous state where possible
- [ ] Handle asynchronicity clearly (i.e. isLoading pattern)
- [ ] Functions are DRY (`handleChange` for controlled components / api calls)
- [✅] Use object destructuring where possible
- [✅] Tidy? If not: ESLint / Prettier
- [✅] `node_modules` git ignored
- [ ] No `console.log`s / comments
- [✅] remove unnecessary files (e.g. App.test.js)

## MAKE SURE ALL TESTS ARE STILL PASSING IN BACK END

## Once everything else is complete, here are some extra challenges:

- [ ] Use `aXe` extension to check for a11y issues
- [ ] Make sure any pure functions are extracted and tested with `Jest`
- [ ] Use Context API for sharing logged in user amongst components
- [ ] Create a user page where you can change their profile information if they are "logged in as the right user". This will require having an additional PATCH endpoint on your backend
- [ ] Create a view for all the articles a user has liked. This will require additional functionality on your backend
- [ ] Make use of [web sockets](https://en.wikipedia.org/wiki/WebSocket) to allow your page to automatically update with a little notification if there have been any recent posts. [socket.io](https://socket.io/) is quite a good one to use and has some good getting started guides. This will require additional functionality on your backend for recent articles e.g. last 10 minutes
