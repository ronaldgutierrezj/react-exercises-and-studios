import classes from './BookList.module.css'

export default function BookList() {
   let pageTitle = "shrug";
   let book1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAci3zcqGMxzJpUkwyD8NUCaqzA975zWxf2g&usqp=CAU";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhfiPduI5kq9E5QWsAf1chi3FBjmUzT2tRA&usqp=CAU";
   let book3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtmfOFoxe8Dqnf5UaNMwk16r76Kn08frbcdQ&usqp=CAU";

   return (
      <div>
         <h3 className = {classes.bookHeading}>{pageTitle}</h3>
         <img src={book1} alt="choose to run" />
         <img src={book2} alt="Michelle Obama" />
         <img src={book3} alt="The Hobbit" />
      </div>      
   );
}