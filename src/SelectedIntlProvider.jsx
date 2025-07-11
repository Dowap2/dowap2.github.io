import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import "moment/locale/ko";
import en from "./locale/en";
import ko from "./locale/ko";

export default function SelectedIntlProvider({ children }) {
  const language = useSelector(
    (state) => state.languageState?.language || "en"
  );
  const message = language === "en" ? en : ko;

  return (
    <IntlProvider locale={language} messages={message} children={children} />
  );
}
