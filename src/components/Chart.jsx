
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

const Container = styled.div`
    flex: 4;
    -webkit-box-shadow: 2px 4px 10px 1px black;
    box-shadow: 2px 4px 10px 1px rgb(201, 201, 201, 0.47);
    padding: 10px;
    color: gray;
`;

const Title = styled.div`
    margin-bottom: 20px;
`;

const data = [
    { name: "January", Total: 1200 },
    { name: "Febuary", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },

];
const Chart = () => {
    return (
        <Container >
            <Title>Last 6 Months (Doanh thu)</Title>
            <ResponsiveContainer width="100%" aspect={2 / 1}>
                <AreaChart width={730} height={250} data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" color="gray" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area
                        type="monotone"
                        dataKey="Total"
                        stroke="#8884d8"
                        fillOpacity={1}
                        fill="url(#total)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </Container>
    )
}

export default Chart
