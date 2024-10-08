import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styledComponents from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Container = styledComponents.div`
  height: 60px;
  ${mobile({ height: "50px" })}
  }
`;

const Wrapper = styledComponents.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Select = styledComponents.select`
  ${mobile({ display: "none" })}
`;

const Option = styledComponents.option`
  ${mobile({ display: "none" })}
`;

const SearchContainer = styledComponents.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  cursor: pointer;
`;

const Input = styledComponents.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styledComponents.div`
  flex: 1;
  text-align: center;
`;

const Logo = styledComponents.h1`
  font-weight: bold;
  ${mobile({ fontSize: "5px" })}
`;
const Right = styledComponents.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styledComponents.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "7px", marginLeft: "8px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Select>
          <Option>EN</Option>
          <Option>FR</Option>
          <Option>CH</Option>
          </Select>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/">
          <Logo>pinKPink.</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register">
          <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to="/login">
          <MenuItem>SIGN IN</MenuItem>
          </Link>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;