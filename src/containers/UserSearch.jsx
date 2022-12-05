import { useState } from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import team from "../assets/data/data";


const UserSearch = (props) => {
    const {}

    const handleInput = (event) => {
        const cleanInput = event.target.value.toLowerCase();
        setSearchTerm(cleanInput);
}
