This is a starter template for [Learn Next.js](https://nextjs.org/learn).


For basic use
- npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"

Suppose you want to use mangodb
what we should install
-  npm i -s @typegoose/typegoose -> install typegoose itself
-  npm i -s mongoose -> nstall peer-dependencie mongoose
-  npm i -D @types/mongoose -> install all types for mongoose - this is required for typegoose to work in typescript

For custom server
 - npm install express
 - npm install --save-dev @types/node @types/express



 # here i am going to learn basic of nextjs
 with help of next i can build website which will fast and seo friendly
 now question is how can i make we application.
 basic idea behind this logic
 let me clear this i just wan to make sure how it work for country let me clear this before going into deep dive
 inside page we have to create new page just like in php we can create page very simple way that way we can make we application
 inside page folder we will create index.tsx file
 we have to make sure start
 ```javascript

 export default App = () => {
     return 
     <>
        <h1> welcome to page </h1>
        // now question is how can make web application using the nextjs framework with help of regex
        <p> lore </p>
     </>
 }

 ```

how to loop array object and display data
{posts.map((user, index) => (
          <div key={index}>
            <h3>{user.id}</h3>
            <p>{user.title}</p>
            <p>{user.body}</p>
          </div>
        ))}