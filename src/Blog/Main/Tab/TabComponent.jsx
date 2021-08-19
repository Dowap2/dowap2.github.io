import Search from "../../../Img/Search.png";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useIntl } from "react-intl";

const SearchBar = styled.div`
  display: flex;
  float: right;
  background: #ffffff;
  border-radius: 40px;
  border: 1px solid #2770f5;
  width: ${props => (props.searchState ? "32px" : "400px")};
  transition: width 0.5s;
  padding: 5px;
  padding-left: ${props => (props.searchState ? "5px" : "20px")};
  height: 32px;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
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
      <SearchBar searchState={searchState}>
        <SearchInput
          type="text"
          placeholder={intl.formatMessage({
            id: "searchInputPlaceholder"
          })}
          onChange={e => props.onChangeWord(e.target.value)}
        />
        <SearchIcon
          src={Search}
          alt="searchIcon"
          searchState={searchState}
          onClick={e => props.onChange(!searchState)}
        />
      </SearchBar>
    </div>
  );
}