import React, { useEffect } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useLocalStorage from "../config/useLocalStorage";
import Dropdown from "./Dropdown";
export default function Header() {
  const [user] = useLocalStorage("user");
  useEffect(() => {
    console.log(user.length, user);
  }, []);
  const handleSubmit = () => {};

  return (
    <div className=" h-16 flex items-center content-center shadow-xl">
      <div className="container flex items-center w-full mx-auto px-10">
        <h1 className="font-black hidden md:inline text-gray-500">OlShop</h1>
        <from
          className="md:mx-10 mx-5 flex-grow relative flex w-full flex-wrap items-stretch "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="flex-1  border-gray-500 rounded h-10 px-5 border-2 focus:border-gray-900 placeholder-blueGray-300 relative hadow focus:outline-none  w-full "
          />
          <span className="z-10 h-full leading-snug font-normal  text-center text-blueGray-300  absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </from>
        <div className=" flex-row  justify-between hidden md:flex  ">
          {Object.keys(user).length > 0 ? (
            <div className=" rounded-full flex shadow-lg items-center justify-center ">
              <Dropdown
                button={
                  <img
                    src={`https://ui-avatars.com/api/?name=${user.name}&color=7F9CF5&background=EBF4FF&size512`}
                    className="rounded-full"
                    alt=""
                  />
                }
                menus={[{ title: "logout", to: "/logout" }]}
              />
            </div>
          ) : (
            <>
              <Button title="Login" to="/login" />
              <Button
                title="Register"
                to="/register"
                styles="border-2 border-gray-700 ml-5 "
              />
            </>
          )}
        </div>
        <Link to="/Login" className="mr-5 md:hidden ">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </div>
  );
}
