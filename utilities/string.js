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

const spacedString = `Online    courses are a great place to learn the foundations of code. But it’s when you put things into practice that you      cement the concepts into your brain.

Figuring out how to   solve problems and conquer coding challenges can be truly rewarding (and fun!). Stephanie, a Software Developer       from Baltimore, shares why practice (including code challenges) is key to mastering a programming language:

“Codecademy is a great starting    point for learning different programming languages and introducing concepts, but there’s only so much you can cover in a         course. A good chunk of mastering a language      is learning through experience.”

In this article, we’ll describe 10   short beginner JavaScript code challenges that you can tackle. Try selecting one each day and see how you do. We’ll     also share how you can continue challenging yourself     and your JavaScript skills after completing     our suggested list.

Top 10 JavaScript code challenges for  beginners
Each of these challenges is suitable for       beginners, but you may find that having a base-level knowledge of JavaScript is helpful. Or, if you have a little bit of experience, you might benefit from refreshing     your knowledge with our introductory        course on JavaScript.

While we don’t specify here, you can  use whatever coding environment suits you best. You can use what you’re comfortable with on your local machine, or you can use the environments you’re familiar with in online     JavaScript courses. Don’t forget that       Google can also help if you find yourself stuck on a coding problem, but try to see if you can create a solution before heading to the search engine.
  
  
       
1.   Print all even numbers from 0 – 10
Try to make the solution to this problem as efficiently as possible. Consider using loops that would allow you to type the fewest characters/commands. While       you could simply print the even numbers, get creative      and see how you could output them in a way that would work up to 10 or even up to 10,000 with little extra effort.

2.  Print a table containing multiplication tables
Let’s start with the tables that many of us had to memorize in school. Can you print a table that contains all the answers to the multiplication       tables from 1 through 10?
  
Like Challenge #1, can you create an efficient solution that you could easily expand should you need the 12 times table?

3. Create a length converter function
Creating a    function is a skill that’ll be useful in many settings, and as you progress, you’ll      be working on much more complicated functions than this one.        But a function that converts units of measure     can be pretty handy in multiple       professions and industries.

Let’s start with a conversion from kilometers to miles. The function should include the input in kilometers and return the answer     in miles.
        
4. Calculate the sum of numbers within an array     
You can create your own array of numbers but consider trying this problem with a     few different sets to verify your solution.      Have one array with negative and    positive numbers and another with integers   and decimals.

You could also try using arrays of different lengths. If you’re feeling    comfortable with this, try the slightly more challenging bonus challenge below.

Bonus intermediate challenge: Create a function that can return the sum of a particular column or row number in a table.

5. Create a function that reverses an array
This challenge is particularly helpful if you’re planning to become a Data Scientist.       Manipulating data is a significant part of the role, and building the        foundations now will help you later down the road when you’re working       with large databases.

Start small here and work your way up. Begin with an array of 5     numbers, and then try your program with a larger array to verify its success.

6. Sort an array from lowest to highest
You could create a function for this solution as well, but be sure      to try your program with varying lengths and types of arrays. Try one with all integers, another with negative numbers, and another with decimals.

7. Create a function that filters out negative numbers
In this challenge, you’ll have a function that takes     an array      as an input and returns    an array. But if all goes according to plan, it’ll remove the negative numbers. This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”

8. Remove the spaces found in a string
Yet another way to clean up data is to remove any errors or unnecessary spaces. This     function will take in a string and then return it with all spaces removed. Think about if you were tasked with cleaning up customer data at your job. You could scale this function to clean up specific fields of data, such as zip codes.

9. Return a Boolean if a number is divisible by 10
Here, you’ll create a function that’ll give you a “true” or “false” Boolean as its output. The inputted     number should only return a “true” if it’s divisible      by 10. Otherwise,       your program should return a “false” answer.
        
10. Return the number of vowels in a     
Create a function that’ll return an integer of the   number of      vowels found in a string. This is a great way to practice determining the features of a dataset. If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of. If you feel like an extra challenge, consider returning the number of characters.

Brush up on your JavaScript with courses and challenges
If you enjoyed putting your       JavaScript         skills to the test with    these challenges, then consider signing up for more by downloading the       Codecademy Go app. Participating in our daily or weekly challenges is an excellent way to keep your skills fresh and continue learning to solve problems.

If you wish to go a little deeper with your learning       or explore more complex problems and coding challenges, consider taking an intermediate-level course. You can          learn more and level up your skills to prepare for your future career with courses and Skill Paths like Create an Advanced Web App with React and Reduct or Create a Back-End App with JavaScript. So what are you waiting for? Get started today!

`;
module.exports = { alphabet, palindromes, medium1, lorem1, spacedString };
