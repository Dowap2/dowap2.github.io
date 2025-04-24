import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect, useState, useMemo, useRef } from "react";

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
`;
const Tag = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-size: 11px;
  font-weight: 500;
  color: ${({ theme }) => theme.pointText};
  width: auto;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 5px;
  height: 24px;
  border-radius: 3px;
  background: ${({ theme }) => theme.pointBackground};
  margin-bottom: 5px;
`;

export function SideBarComponent({ TagList }) {
  const uniqueTagList = [...new Set(TagList)];
  const Tags = uniqueTagList.map(tag => {
    return <Tag>{tag}</Tag>;
  });

  return (
    <SideBar>
      <TagTitle>Tag</TagTitle>
      <TagComponent>{Tags}</TagComponent>
    </SideBar>
  );
}
