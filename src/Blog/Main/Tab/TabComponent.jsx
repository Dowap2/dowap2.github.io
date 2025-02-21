import Search from "../../../Img/Search.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useIntl } from "react-intl";

const SearchBar = styled.div`
  display: flex;
  float: right;
  background: #ffffff;
  border-radius: 40px;
  border: 1px solid #f5f5f5;
  width: ${props => (props.searchState ? "42px" : "400px")};
  transition: width 0.5s;
  padding: 5px;
  height: 42px;
  box-sizing: border-box;
  @media only screen and (max-width: 960px) {
    width: ${props => (props.searchState ? "42px" : "100%")};
  }
`;
const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
`;
const SearchInput = styled.input`
  display: ${props => (props.searchState ? "none" : "block")};
  width: 100%;
  background: none;
  border: 0;
  outline: none;
  padding: 0;
`;

export function TabComponent(props) {
  const searchState = useSelector(state => state.searchState.state.searchState);
  const intl = useIntl();
  return (
    <div>
      <SearchBar
        searchState={searchState}
<<<<<<< HEAD
        onMouseOver={e => props.onChange(false)}
        onMouseOut={e => props.onChange(true)}
=======
        onMouseOver={e => props.onChange(!searchState)}
        onMouseOut={e => props.onChange(!searchState)}
>>>>>>> 899c086434c5d6c0804b33a74e374f36978ac4bd
      >
        <SearchInput
          type="text"
          onChange={e => props.onChangeWord(e.target.value)}
        />
        <SearchIcon src={Search} alt="searchIcon" searchState={searchState} />
      </SearchBar>
    </div>
  );
}
