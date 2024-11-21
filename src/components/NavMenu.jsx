import React, { useContext, useEffect, useState } from 'react'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import userContext from '../context/userContext';

const NavMenu = ({ count }) => {
  const [user, setUser] = useState({ role: "Admin" });
  const { setCurrentUser } = useContext(userContext)
  useEffect(() => {
    setCurrentUser(user)
  }, [user])

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value })
  }

  return (
    <Navbar bg="light" style={{ marginBottom: 20 }} className='shadow-lg' >
      <div className='container-fluid px-3'>
        <Navbar.Brand className='fs-3'>E-Commerce</Navbar.Brand>
        <Nav className="m-auto">
          <Link className='link fs-5' to={"/"} >Home</Link>
          <Link className='link fs-5' to={"/addProduct"} >Add Product</Link>
          <Link className='link fs-5' to={"/viewProduct"} >View Product</Link>
        </Nav>
        <Nav className="">
          <select name="role" id="" className='me-5 bg-transparent px-2 py-1' onChange={handleChange}>
            <option value="Admin">Admin</option>
            <option value="user">User</option>
          </select>
          <Link to='/cart' className='text-dark text-decoration-none'>
            <FaCartShopping fontSize={26} />
            <sup className='fs-6 ms-1' >{count}</sup>
          </Link>
        </Nav>
      </div>
    </Navbar>
  )
}

export default NavMenu
