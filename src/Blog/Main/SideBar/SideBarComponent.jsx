import styled from "styled-components";

const SideBar = styled.div`
  margin: 0 60px;
  width: 100%;
  border-left: 1px solid ${({ theme }) => theme.subBackground};
`;

const TagTitle = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-left: 20px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

const TagComponent = styled.div`
  width: 100%;
  margin-top: 20px;
  padding-left: 20px;
  display: flex;
  flex-wrap: wrap; /* 줄바꿈 가능하게 */
`;

const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.pointText};
  padding: 0 10px;
  margin: 0 5px 5px 0;
  height: 24px;
  border-radius: 3px;
  background: ${({ theme }) => theme.pointBackground};
`;

export function SideBarComponent({ TagList }) {
  console.log(TagList);
  return (
    <SideBar>
      <TagTitle>Tag</TagTitle>
      <TagComponent>
        {TagList !== undefined
          ? TagList.map((tag) => <Tag key={tag}>{tag}</Tag>)
          : null}
      </TagComponent>
    </SideBar>
  );
}
