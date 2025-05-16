import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@mui/material';
import { Add, Edit, Delete } from '@mui/icons-material';

// Define interface for Blog Post
interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  imageUrl?: string;
  publishDate: string;
}

const BlogManagement: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentBlog, setCurrentBlog] = useState<BlogPost | null>(null);

  // Categories for blogs
  const blogCategories = [
    'Technology', 
    'Lifestyle', 
    'Business', 
    'Personal Development', 
    'Uncategorized'
  ];

  // Mock initial data (replace with actual data fetching later)
  useEffect(() => {
    const initialBlogs: BlogPost[] = [
      { 
        id: '1', 
        title: 'Introduction to React', 
        content: 'A beginner\'s guide to React development...',
        author: 'John Doe',
        category: 'Technology',
        imageUrl: 'https://example.com/react-intro.jpg',
        publishDate: new Date().toISOString()
      },
      { 
        id: '2', 
        title: 'Productivity Tips', 
        content: 'Boost your productivity with these simple strategies...',
        author: 'Jane Smith',
        category: 'Personal Development',
        publishDate: new Date().toISOString()
      }
    ];
    setBlogs(initialBlogs);
  }, []);

  const handleAddBlog = () => {
    setCurrentBlog({
      id: `${blogs.length + 1}`,
      title: '',
      content: '',
      author: '',
      category: 'Uncategorized',
      publishDate: new Date().toISOString()
    });
    setOpenDialog(true);
  };

  const handleEditBlog = (blog: BlogPost) => {
    setCurrentBlog(blog);
    setOpenDialog(true);
  };

  const handleDeleteBlog = (id: string) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const handleSaveBlog = () => {
    if (currentBlog) {
      if (blogs.some(b => b.id === currentBlog.id)) {
        // Edit existing blog
        setBlogs(blogs.map(b => 
          b.id === currentBlog.id ? currentBlog : b
        ));
      } else {
        // Add new blog
        setBlogs([...blogs, currentBlog]);
      }
      setOpenDialog(false);
      setCurrentBlog(null);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Blog Management
      </Typography>
      
      <Button 
        variant="contained" 
        color="primary" 
        startIcon={<Add />}
        onClick={handleAddBlog}
        sx={{ mb: 2 }}
      >
        Add New Blog Post
      </Button>

      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item xs={12} md={6} lg={4} key={blog.id}>
            <Card>
              {blog.imageUrl && (
                <CardMedia
                  component="img"
                  height="140"
                  image={blog.imageUrl}
                  alt={blog.title}
                />
              )}
              <CardContent>
                <Typography variant="h5">{blog.title}</Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {blog.author} | {blog.category}
                </Typography>
                <Typography variant="body2" noWrap>
                  {blog.content}
                </Typography>
                <Typography variant="caption">
                  Published: {new Date(blog.publishDate).toLocaleDateString()}
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  startIcon={<Edit />} 
                  onClick={() => handleEditBlog(blog)}
                >
                  Edit
                </Button>
                <Button 
                  color="error" 
                  startIcon={<Delete />} 
                  onClick={() => handleDeleteBlog(blog.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for Adding/Editing Blog */}
      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {currentBlog?.id ? 'Edit Blog Post' : 'Add New Blog Post'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            value={currentBlog?.title || ''}
            onChange={(e) => setCurrentBlog(prev => 
              prev ? {...prev, title: e.target.value} : null
            )}
          />
          <TextField
            margin="dense"
            label="Content"
            fullWidth
            multiline
            rows={6}
            value={currentBlog?.content || ''}
            onChange={(e) => setCurrentBlog(prev => 
              prev ? {...prev, content: e.target.value} : null
            )}
          />
          <TextField
            margin="dense"
            label="Author"
            fullWidth
            value={currentBlog?.author || ''}
            onChange={(e) => setCurrentBlog(prev => 
              prev ? {...prev, author: e.target.value} : null
            )}
          />
          <TextField
            margin="dense"
            label="Image URL"
            fullWidth
            value={currentBlog?.imageUrl || ''}
            onChange={(e) => setCurrentBlog(prev => 
              prev ? {...prev, imageUrl: e.target.value} : null
            )}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Category</InputLabel>
            <Select
              value={currentBlog?.category || 'Uncategorized'}
              label="Category"
              onChange={(e) => setCurrentBlog(prev => 
                prev ? {...prev, category: e.target.value} : null
              )}
            >
              {blogCategories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button 
            onClick={handleSaveBlog} 
            color="primary" 
            variant="contained"
          >
            Save Blog Post
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default BlogManagement; 