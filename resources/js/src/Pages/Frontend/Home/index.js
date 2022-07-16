import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h4>Home Component</h4>
            <ul>
                <li>
                    <Link to="admin/dashboard"> Admin Dashboard </Link>
                </li>
                <li>
                    <Link to="admin/login"> Admin Login </Link>
                </li>
            </ul>
        </>
    );
};

export default Home;
