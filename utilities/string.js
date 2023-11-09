const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const palindromes = [
  "kayak",
  "deified",
  "rotator",
  "repaper",
  "deed",
  "peep",
  "wow",
  "noon",
  "civic",
  "racecar",
  "level",
  "mom",
  "bird rib",
  "taco cat",
  "UFO tofu",
  "Borrow or rob",
  "Never odd or even",
  "We panic in a pew",
  "Eva can I see bees in a cave?",
  "ihsan",
  "Berkay",
  "asdkfjg sldkfg slkfgjasdlkfg sdflkgmsdlfkg sdşflkg jslkfjg",
  "asd, dsa",
  "  Red roses run no risk, sir, on Nurse’s order. ",
  "He lived as a devil, eh?",
  "Ned, I am a maiden. ",
  "Now, sir, a war is won!",
  "Evade me, Dave!",
  "Dennis and Edna sinned. ",
  "Step on no pets!",
];

const lorem1 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi morbi tempus iaculis. Blandit turpis cursus in hac. Odio tempor orci dapibus ultrices in. Quis eleifend quam adipiscing vitae proin sagittis. Lectus vestibulum mattis ullamcorper velit. Sed elementum tempus egestas sed. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Enim lobortis scelerisque fermentum dui faucibus in ornare. Est lorem ipsum dolor sit amet consectetur.

Faucibus purus in massa tempor nec. Ac placerat vestibulum lectus mauris ultrices eros in cursus. Phasellus faucibus scelerisque eleifend donec. Cursus sit amet dictum sit amet. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Non sodales neque sodales ut. Scelerisque fermentum dui faucibus in ornare quam.

Facilisis magna etiam tempor orci eu lobortis. Dignissim cras tincidunt lobortis feugiat. Dui accumsan sit amet nulla. Purus in mollis nunc sed. Fusce ut placerat orci nulla pellentesque dignissim enim sit amet. Ornare lectus sit amet est placerat in egestas. Est ante in nibh mauris cursus. Tristique senectus et netus et malesuada fames ac turpis egestas. Sollicitudin tempor id eu nisl nunc mi. Tincidunt augue interdum velit euismod.

Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Adipiscing tristique risus nec feugiat in. Magna sit amet purus gravida quis blandit. Tincidunt ornare massa eget egestas purus viverra accumsan in nisl. Tempor id eu nisl nunc mi ipsum faucibus vitae aliquet. Netus et malesuada fames ac turpis egestas. Semper feugiat nibh sed pulvinar. Et ligula ullamcorper malesuada proin. Viverra aliquet eget sit amet tellus. Arcu non sodales neque sodales ut. Auctor eu augue ut lectus arcu bibendum at varius vel.

Faucibus et molestie ac feugiat. In hendrerit gravida rutrum quisque non. Convallis convallis tellus id interdum velit laoreet. Volutpat ac tincidunt vitae semper. Volutpat odio facilisis mauris sit amet. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Ut eu sem integer vitae justo eget. Curabitur vitae nunc sed velit dignissim sodales. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque. Lacus sed viverra tellus in. Orci phasellus egestas tellus rutrum. Non consectetur a erat nam at lectus urna duis convallis. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Lobortis mattis aliquam faucibus purus in massa tempor nec. Convallis tellus id interdum velit laoreet. Nunc non blandit massa enim nec. Cras adipiscing enim eu turpis egestas. Tellus cras adipiscing enim eu. Sed risus ultricies tristique nulla aliquet enim tortor.`;

const medium1 = `Today, I want to show you an alternative for the useState and useEffect hook in React. (It reduces a lot of boilerplate codes)

Many developers continue to use the useState and useEffect hooks to update states, but I have not been fond of this approach. The issue is that it causes the component to mount, remount, and unmount simultaneously, leading to unexpected behavior. As a result, when logging something into the console, you may see the result repeated three times.

Introducing the useLoaderData Hook:
The useLoaderData hook is a custom hook in React that helps you load data into your component. It simplifies the process of fetching data from an API or performing any asynchronous operation.

When you use the useLoaderData hook, you provide it with a function that returns a Promise. This Promise represents an asynchronous operation that will fetch the data you need. Once the Promise resolves, the data becomes available to your component.

The useLoaderData hook handles the loading state for you, so you don't need to manually track whether the data is still loading or if it has finished loading. It provides you with a convenient way to access the data and also handles any potential errors that might occur during the data loading process.

By using the useLoaderData hook, you can keep your component code clean and organized, separating the data-loading logic from the rest of your component's responsibilities. It allows you to easily fetch and manage data in a more beginner-friendly way.

Why the useLoaderHook?
The useLoaderHook from react-router helps achieve the same functionality with minimal effort. These are some examples of why you should use it.

Loading state management: Loaders handle the loading state for you, providing a clear indication of when data is being fetched. This helps you manage loading spinners, progress indicators, or any other UI elements related to data loading.
Error handling: Loaders often include error handling mechanisms, allowing you to handle and display errors that occur during the data loading process. They provide a standardized way to handle errors, making it easier to implement consistent error handling across your application.
Separation of concerns: Loaders allow you to separate the data loading logic from other aspects of your component. This promotes better code organization and maintainability, as you can focus on specific responsibilities without mixing them.
And lots more.

Let’s see How This Works.
It’s assumed that you have a good knowledge of how react-router 6 works. If you don’t, Feel free to check out the docs here

Firstly, we have to set up the routing system in our application to work with the Loader API. Before now, we have been using the BrowserRouter setup to handle the various routes for our application.
Let’s spend a little time talking about this.`;
module.exports = { alphabet, palindromes, medium1, lorem1 };
