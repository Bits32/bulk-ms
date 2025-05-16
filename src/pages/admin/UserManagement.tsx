import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  Button
} from '@mui/material';

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Placeholder for fetching users
    const mockUsers: User[] = [
      { id: '1', username: 'admin', email: 'admin@example.com', role: 'Admin' },
      { id: '2', username: 'editor', email: 'editor@example.com', role: 'Editor' },
    ];
    setUsers(mockUsers);
  }, []);

  const handleDeleteUser = (id: string) => {
    // Placeholder for delete user functionality
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button 
                    color="error" 
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default UserManagement; 