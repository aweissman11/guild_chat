# Guilded Conversations

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and was created as part of a code challenge for Guild Education. Server is built using `express` with `Socket.io` to connect users together. Used `MaterialUI` to give the app a clean look without having to do much styling, and implemented `redux` and `thunks` to make the app more easily scalable for future iterations. App is unit tested using `jest` and `enzyme`.

## Useful Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

### `node src/server/index.js`

Runs the server locally. Will need to be run in a separate terminal instance than npm start.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

## How to use

This app is available to use locally. Run npm start in one terminal instance, and then run the node server in another. The app will be live at localhost:3000.

Then, open as many duplicate tabs as you'd like and you will be able to communicate with any of the other tabs as long as they are on the same topic (case sensitive).

## Initial WireFrames

![Wireframe](wireframes.png)

## Final Product Screenshots

![Initial page](initial_page.png)

![Add Topic Modal](add_topic.png)

![Chat View](chats.png)

## Challenges

* Socket.io
  * this was the first time I'd used Socket.io and it was a bit of a challenge to hook it up the way I'd have liked to. Initially my hope was to show a lot more information, like when another user is typing or to load up existing messages on initial login. In the end though, I have run out of a reasonable amount of time to spend on the project.
* Scope of the project
  * I was a bit over-ambitious with my project and have ended up with less than I originally planned. In the end, I spent more time learning than I should have and probably should have stuck with more known technologies. Specifically, looking back, it was unessecary to implement redux in such a small project. Using the React Context API would definitely have done the trick, or even just writing this with vanilla JS could have worked.
  * These opportunities (ie code challenges) are always an opportunity to learn, but if I did it all over again, I would pick fewer of the technologies I am not totally comfortable with and really try to hone in on the ones that I am most excited about or are most necessary to the success of the project.
* React Hooks
  * They are the new tech so I definitely wanted to use this opportunity to learn more about them and become more confident using them. That being said, they have some shortcomings. Specifically, I find them a lot more challenging to test. It may be partly a comfort thing, but I think a big part of it is that they make it difficult to test methods directly and push you towards testing through user interaction. Therefore, if you have events that are not easy  to mimic, opening or closing a modal for example, they can leave something to be desired.

## Known Issues

* Console Errors
  * Still getting some console errors as a result of passing certain props through to the Material UI modal component
  * As well as react hooks warnings about the useEffect hook, despite that I'm using boilerplate code for it.
* Insufficient Test Coverage
  * Would love to see more thorough testing coverage of the components.
* Socket does not open on initial load up
  * Would be great to connect right to a chat as soon as you connect to that specific topic. Instead, it waits until you have started writing messages.

## Successes

* Socket.io
  * Putting this here as well because the app works! That means I successfully sed something new, which is a win in my book.
* Hooks
  * I am continuing to learn the ins and outs of React Hooks, but am glad I was able to use them throughout the appplication without any huge pitfalls to the functionality of  the application.
* Time constraints
  * This project was done while sneaking time in where I could. I am working full time and had friends visiting from out of town for the entire time I worked on this. So, finding the time to work on this was a challenge, and even harder was finding long stretches of time. It takes some ramp-up time to really dive into these things and I am proud to have accomplished what I did in small spurts and without many long stretches of time to really lock in.

## Future enhancements

* Persistant data
  * Save chat messages in a backend somewhere so that when you connect to a topic, you can see the previous messages that were sent.
  * Cache username and login.
* Deploy the application so it can be used live on the web
* UI enhancements to allow for a smoother user flow
  * For example:
    * autofocus on input fields when they appear.
    * Alow user to change their username without refreshing.
    * Allow topics to be deleted or removed from the list.
    * Show different colors for the current user as opposed to other users in the chat.
    * Autofill topics for easy matching. This would require posting the topics to the server as well.