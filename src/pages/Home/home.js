import { Link } from "react-router-dom";

export default function HomePage(){
    return(
        <div>
            <Link to='/products'>Product</Link>
            -------------
            <Link to='/students'>Student</Link>
        </div>
    )
}