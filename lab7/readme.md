# Frontend - Backend
1. create project folder(lab7)
2. create frontend and backend folder within the project folder
3. open terminal and split it two
4. open frontend on the left side of the terminal
5. open backend to the right of the terminal
6. In Backend
      a. initialize backend by `npm init -y`
      b. install nodemon by `npm i nodemon`
      c. open package.json from backend, update `type to module` and script
      d. create app.js 
7. in frontend
      a. npm create vite@latest
      b. enter . as project name
      c. select framework as react from arrow key
      d. select variant as javascript from arrow key
      e. select esList for linting from arrow key 
      f. select install and start the frontend


# Component
1. Simple js function return html directory
2. It must start with capital letter
3. It should be treated as html tag
4. It must be closed

# Object Destructor
const{bname, price, quantity, rating, picUrl} = props.book;
1. does not depend on order, if property is not available then it inizialized with null
2. any component include style : 
   a. external css = create class in index.css and use in component 
   b. internal css =  create property as object, then apply with style attributes
   c. inline css =  in this method we use two curly bracket with style attribute all the css property must be singlr word for       example text-align becomes textAlign

-> App.jsx should be minimum code