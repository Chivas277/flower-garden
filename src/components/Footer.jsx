import { Facebook, GitHub, Instagram, MailOutline, Phone, Room } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../Responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1`
    
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-content: center;
`;

const Payment = styled.img`
    width: 50%;
`;
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>Đồ án chuyên ngành</Logo>
                <Desc>Tỉa Hứa Hoàng Vũ</Desc>
                <Desc>Trương Vĩnh Thành</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="000000">
                        <GitHub />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Liên kết hữu ích</Title>
                <List>
                    <ListItem>Trang chủ</ListItem>
                    <ListItem>Giỏ hàng</ListItem>
                    <ListItem>Samsung</ListItem>
                    <ListItem>Iphone</ListItem>
                    <ListItem>Oppo</ListItem>
                    <ListItem>Theo dõi đơn hàng</ListItem>
                    <ListItem>Danh sách yêu thích</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Liên hệ</Title>
                <ContactItem><Room style={{marginRight:"10px"}}/>180 Cao Lỗ, F4, Q8</ContactItem>
                <ContactItem><Phone style={{ marginRight: "10px" }} />0707697593</ContactItem>
                <ContactItem><MailOutline style={{ marginRight: "10px" }} />DH51902793@stuent.stu.edu.vn</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png/"/>
            </Right>
        </Container>
    )
}

export default Footer