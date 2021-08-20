import styled from "styled-components";
import { useIntl } from "react-intl";

const ChangeLanguageComponent = styled.select`
  margin: 20px;
`;

export function InputLanguage(props) {
  const intl = useIntl();
  return (
    <ChangeLanguageComponent onChange={e => props.onChange(e.target.value)}>
      <option value="en">
        {intl.formatMessage({
          id: "InputLanguage.English"
        })}
      </option>
      <option value="ko">
        {intl.formatMessage({
          id: "InputLanguage.Korean"
        })}
      </option>
    </ChangeLanguageComponent>
  );
}
