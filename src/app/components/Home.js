import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import { clearMessage } from "../actions/message";
import { useLocation  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


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
                <p>HOME PAGE!</p>
            
            </header>
        </div>
    )
}

export default Home;