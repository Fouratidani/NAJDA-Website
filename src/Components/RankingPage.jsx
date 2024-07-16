import { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Navbar from './Navbar';
const mockRankingData = [
  { rank: 1, name: 'User A', points: 1000 },
  { rank: 2, name: 'User B', points: 950 },
  { rank: 3, name: 'User C', points: 800 },
  { rank: 4, name: 'User D', points: 700 },
  { rank: 5, name: 'User E', points: 600 },
  { rank: 6, name: 'User F', points: 500 },
  { rank: 7, name: 'User G', points: 560 },
  { rank: 8, name: 'User H', points: 400 },
  { rank: 9, name: 'User I', points: 250 },
  { rank: 10, name: 'User J', points: 130 },
  { rank: 11, name: 'User K', points: 70 },
  { rank: 12, name: 'User L', points: 50 },
  { rank: 13, name: 'User M', points: 30 },
  { rank: 14, name: 'User N', points: 10 },

];

const RankingPage = () => {
  const [rankingData, setRankingData] = useState([]);

  useEffect(() => {
    // Simulate fetching data (replace with actual fetch call)
    setRankingData(mockRankingData);
  }, []);

  return (
    <>
    <Navbar />
    <Container maxWidth="xl" style={{backgroundColor: "#4e54c8"}}>
      
      <TableContainer component={Paper}>
        <Table aria-label="ranking table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Points</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rankingData.map((row) => (
              <TableRow key={row.rank}>
                <TableCell component="th" scope="row">
                  {row.rank}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
    </>
  );
};

export default RankingPage;
