import Search from "../../../Img/Search.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useIntl } from "react-intl";

const SearchBar = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 40px;
  border: 1px solid #d3d3d3;
  width: ${props => (props.searchState ? "650px" : "42px")};
  transition: width 0.5s;
  padding: 5px;
  height: 42px;
  box-sizing: border-box;
  @media only screen and (max-width: 960px) {
    width: ${props => (props.searchState ? "100%" : "42px")};
  }
`;
const SearchIcon = styled.img`
  width: 30px;
  height: 30px;

  margin-left: auto;
`;
const SearchInput = styled.input`
  margin-left: ${props => (props.searchState ? "10px" : "0")};
  transition: margin-left 0.5s;
  width: ${props => (props.searchState ? "100%" : "0px")};
  border: 0;
  outline: none;
  padding: 0px;
`;

export function TabComponent(props) {
  const searchState = useSelector(state => state.searchState.state.searchState);
  const intl = useIntl();
  return (
    <div>
      <SearchBar
        searchState={searchState}
        // onClick={e => props.onChange(!searchState)}
      >
        <SearchInput
          searchState={searchState}
          type="text"
          onChange={e => {
            props.onChangeWord(e.target.value);
          }}
        />
        <SearchIcon src={Search} alt="searchIcon" searchState={searchState} />
      </SearchBar>
    </div>
  );
}
