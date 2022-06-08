import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import { clearMessage } from "../actions/message";
import { useLocation  } from "react-router-dom";
import { useDispatch} from "react-redux";
import Login from "./Login";



const Home = () => {
    const [content, setcontent] = useState("");
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
    dispatch(clearMessage());
    }, [location]);

    useEffect(() => {
        UserService.getPublicContent().then((response) =>{
        setcontent(response.data);
    },
    (error) => {
        const _content = (error.response && error.response.data) || error.message || error.toString();
        setcontent(_content);
    }
    );
    },[]);
    return (
        <div className="container">
            <header className="jumbotron">
                <h1>Welcome to Scott's website</h1>
            </header>
            <div className="row ">
                
                <div className="h-100 d-flex align-items-center justify-content-center">
                    <Login showRegisterLink = {true} />
                </div>
            </div>
        </div>
    )
}

export default Home;