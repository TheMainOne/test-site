import MenuIcon from "@mui/icons-material/Menu";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import { useState } from "react";
import { ModalWindow } from "components/ModalWindow/ModalWindow";
import { Container } from "components/GlobalStyles";
import {
  Header,
  Navigation,
  HeaderTitle,
  CompanyName,
  NavigationWrapper,
  NavigationLargeList,
  NavigationLargeListItem,
  NavigationContactsWrapper,
  NavigationContactsButton,
  NavigationContactsLink,
  NavigationTitleInformation,
  HeaderText,
} from "./Header.styled";

var Scroll = require("react-scroll");
var Link = Scroll.Link;

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <StarBorderRoundedIcon
              fontSize="large"
              sx={{ color: "transparent" }}
            />
            <MenuIcon fontSize="large" onClick={handleOpen} />
          </Navigation>
          <NavigationWrapper>
            <nav>
              <NavigationLargeList>
                <NavigationLargeListItem>
                  <Link
                    activeClass="active"
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    О нас
                  </Link>
                </NavigationLargeListItem>
                <NavigationLargeListItem>
                  <Link
                    activeClass="active"
                    to="goods"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Мастера
                  </Link>
                </NavigationLargeListItem>
                <NavigationLargeListItem>
                  <Link
                    activeClass="active"
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-30}
                    duration={500}
                  >
                    Контакты
                  </Link>
                </NavigationLargeListItem>
              </NavigationLargeList>
            </nav>
            <NavigationContactsWrapper>
              <NavigationContactsButton>
                Связаться с нами
              </NavigationContactsButton>
              <NavigationContactsLink href="tel:+380441111111">
                +38 044 111 11 11
              </NavigationContactsLink>
            </NavigationContactsWrapper>
          </NavigationWrapper>
          <NavigationTitleInformation>
            <HeaderTitle>A HAIR SALON FOR MEN IN KYIV</HeaderTitle>
            <CompanyName>barbershop</CompanyName>
            <HeaderText>
              Мы эксперты в модных мужских <br /> стрижках. Работаем быстро,{" "}
              <br />
              осторожно и со вкусом.
            </HeaderText>
          </NavigationTitleInformation>
          <ModalWindow open={open} handleClose={handleClose} />
        </Container>
      </Header>
    </>
  );
};
