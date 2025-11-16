
import { useState, useEffect } from 'react';
import { Box, Card, Typography, Table, TableBody, TableRow, TableCell } from '@mui/material';
import { DashboardContent } from 'src/layouts/dashboard';
import { useParams } from 'react-router-dom';

import { _users } from 'src/_mock';

export function UserInfo() {
  const { id } = useParams();
  const [user, setUser] = useState<any>(null);
  const [activities, setActivities] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any[]>([]);

  useEffect(() => {
    const found = _users.find(u => String(u.id) === String(id));
    setUser(found || null);
    // dummy activities and answers - in real app replace with real data fetch
    setActivities([
      { category: 'Product', scenarioId: 'Product 1', result: 'Low - 2' },
      { category: 'Product', scenarioId: 'Product 2', result: 'high - 7' },
    ]);
    setAnswers([
      { question: 'Does the innovation address a significant problem or unmet need?', answer: 'Low Innovation Potential' },
      { question: 'Is the solution novel or significantly different from existing alternatives?', answer: 'High Innovation Potential' },
      { question: 'Does the innovation address a significant problem or unmet need?', answer: 'Low Innovation Potential' },
      { question: 'Is the solution novel or significantly different from existing alternatives?', answer: 'High Innovation Potential' },
      { question: 'Does the innovation address a significant problem or unmet need?', answer: 'Low Innovation Potential' },
      { question: 'Is the solution novel or significantly different from existing alternatives?', answer: 'High Innovation Potential' },
      { question: 'Does the innovation address a significant problem or unmet need?', answer: 'Low Innovation Potential' },
      { question: 'Is the solution novel or significantly different from existing alternatives?', answer: 'High Innovation Potential' },
    ]);
  }, [id]);

  if (!user) return <DashboardContent><Typography>User not found</Typography></DashboardContent>;

  return (
    <DashboardContent>
      <Box sx={{ mb:2 }}>
        <Typography variant="h4">User Info</Typography>
      </Box>

      <Card sx={{ p:2, mb:2 }}>
        <Typography variant="h6">Personal Info</Typography>
        <Typography><strong>Name:</strong> {user.name}</Typography>
        <Typography><strong>Phone:</strong> {user.phone || '-'}</Typography>
        <Typography><strong>Email:</strong> {user.email || '-'}</Typography>
      </Card>

      <Card sx={{ p:2, mb:2 }}>
        <Typography variant="h6">Activities Done</Typography>
        <Table>
          <TableBody>
            {activities.map((a, idx)=>(
              <TableRow key={idx}>
                <TableCell>{a.category}</TableCell>
                <TableCell>{a.scenarioId}</TableCell>
                <TableCell>{a.result}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <Card sx={{ p:2, mb:2 }}>
        <Typography variant="h6">Product 1 Questions & Answers</Typography>
        <Table>
          <TableBody>
            {answers.map((a, idx)=>(
              <TableRow key={idx}>
                <TableCell>{a.question}</TableCell>
                <TableCell>{a.answer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      <Card sx={{ p:2, mb:2 }}>
        <Typography variant="h6">Product 2 Questions & Answers</Typography>
        <Table>
          <TableBody>
            {answers.map((a, idx)=>(
              <TableRow key={idx}>
                <TableCell>{a.question}</TableCell>
                <TableCell>{a.answer}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </DashboardContent>
  );
}

export default UserInfo;
