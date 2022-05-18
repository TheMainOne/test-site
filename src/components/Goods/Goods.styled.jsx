import styled from "styled-components";

export const Goods = styled.section`
  padding-top: 84px;
  padding-bottom: 84px;
  background: #f7f7f7;

  @media screen and (min-width: 768px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media screen and (min-width: 1024px) {
    padding-top: 130px;
    padding-bottom: 130px;
  }
`;

export const GoodsWrapper = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 64px;
  }
`;

export const GoodsText = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 11px;
  line-height: 1.36;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #303030;

  &:before {
    content: "";
    display: inline-block;
    width: 60px;
    height: 1px;
    background-color: currentColor;
    margin-right: 20px;
  }
`;

export const GoodsTitle = styled.h3`
  margin-bottom: 33px;
  font-size: 42px;
  line-height: 1.16;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: #303030;
`;

export const GoodsThumb = styled.div`
  text-align: center;
  padding: 30px 82px 0 82px;
`;

export const GoodsItemTitle = styled.h4`
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 1.38;
  letter-spacing: 0.02em;
  color: #303030;
`;

export const GoodsItemText = styled.p`
  margin-bottom: 30px;
  font-size: 14px;
  line-height: 1.35;
  letter-spacing: 0.02em;
  color: #ff6c00;
`;

export const GoodsItemSocialMediasList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const GoodsItemSocialMediasListItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 10px;
  }
`;

export const GoodsItemSocialMediasListLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
`;
