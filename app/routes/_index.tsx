import { Link } from "@remix-run/react";
export default function Index(){
    return(
        <main id="content">
            <h1>A better way of keeping track of your notes</h1>
            <p> Try our early beta and never loose track of your notes again !</p>
            <p id="cta">
                <Link to="./notes"> Try Now !</Link>
            </p>
             <h1 className="text-3xl  font-bold  text-pink-500 underline">
        Hello world!
      </h1>
            
        </main>
    );
}
  