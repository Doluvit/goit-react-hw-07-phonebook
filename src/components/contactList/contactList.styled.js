import styled from 'styled-components';

export const ContactsContainer = styled.div`
  margin-top: 20px;
`;

export const ContactsList = styled.ul`
  padding: 20px 20px 10px 20px;
  margin: 0;
  width: 380px;
  border: solid 2px transparent;
  border-radius: 5px;
  box-shadow: var(--mainBoxShadow);
  list-style: inside;
  background-color: #daecf0;
`;

export const ContactsItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContactsText = styled.p`
  margin: 0;
  font-size: large;
  font-weight: 500;
  color: var(--textColor);
`;

export const ContactsBtn = styled.button`
  font-size: 14px;
  font-weight: 500;
  color: var(--textColor);

  background-color: var(--itemBackgroundColor);
  border-radius: 5px;
  border: 2px solid transparent;
  box-shadow: var(--mainBoxShadow);

  cursor: pointer;

  transition: all 250ms ease-in-out;

  :hover {
    color: var(--accentTextColor);
    background-color: var(--mainBackgroundColor);
  }
`;
