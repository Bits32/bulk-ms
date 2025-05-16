import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Box, 
  Button, 
  Grid as MuiGrid, 
  Card, 
  CardContent, 
  CardActions,
  CardHeader,
  Avatar,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Switch,
  FormControlLabel
} from '@mui/material';
import { 
  Add, 
  Edit, 
  Delete, 
  Visibility, 
  VisibilityOff,
  Category as CategoryIcon
} from '@mui/icons-material';
import type { 
  DropResult, 
  DroppableProvided, 
  DraggableProvided 
} from 'react-beautiful-dnd';
import { 
  DragDropContext, 
  Droppable, 
  Draggable 
} from 'react-beautiful-dnd';

// Enhanced interface for Onboard Section
interface OnboardSection {
  id: string;
  title: string;
  description: string;
  icon?: string;
  category?: string;
  isActive: boolean;
  order: number;
  requiredFields?: string[];
  estimatedCompletionTime?: number; // in minutes
}

// Predefined categories and icons
const SECTION_CATEGORIES = [
  'Getting Started', 
  'Profile Setup', 
  'Account Configuration', 
  'Learning', 
  'Onboarding'
];

const ICON_OPTIONS = [
  'welcome', 
  'profile', 
  'settings', 
  'learn', 
  'start', 
  'complete'
];

const OnboardSections: React.FC = () => {
  const [sections, setSections] = useState<OnboardSection[]>([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentSection, setCurrentSection] = useState<OnboardSection | null>(null);

  // Mock initial data (replace with actual data fetching later)
  useEffect(() => {
    const initialSections: OnboardSection[] = [
      { 
        id: '1', 
        title: 'Welcome', 
        description: 'Initial onboarding welcome section', 
        icon: 'welcome',
        category: 'Getting Started',
        isActive: true,
        order: 1,
        requiredFields: ['name', 'email'],
        estimatedCompletionTime: 5
      },
      { 
        id: '2', 
        title: 'Profile Setup', 
        description: 'Create and customize your profile', 
        icon: 'profile',
        category: 'Profile Setup',
        isActive: true,
        order: 2,
        requiredFields: ['avatar', 'bio'],
        estimatedCompletionTime: 10
      }
    ];
    setSections(initialSections.sort((a, b) => a.order - b.order));
  }, []);

  // Drag and drop handler
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const reorderedSections = Array.from(sections);
    const [reorderedItem] = reorderedSections.splice(result.source.index, 1);
    reorderedSections.splice(result.destination.index, 0, reorderedItem);

    // Update order
    const updatedSections = reorderedSections.map((section, index) => ({
      ...section,
      order: index + 1
    }));

    setSections(updatedSections);
    // TODO: Call backend API to update section order
  };

  const handleAddSection = () => {
    setCurrentSection({
      id: `${sections.length + 1}`,
      title: '',
      description: '',
      icon: '',
      category: 'Getting Started',
      isActive: true,
      order: sections.length + 1,
      requiredFields: [],
      estimatedCompletionTime: 5
    });
    setOpenDialog(true);
  };

  const handleEditSection = (section: OnboardSection) => {
    setCurrentSection({...section});
    setOpenDialog(true);
  };

  const handleDeleteSection = (id: string) => {
    setSections(sections.filter(section => section.id !== id));
    // TODO: Call backend API to delete section
  };

  const handleSaveSection = () => {
    if (currentSection) {
      if (sections.some(s => s.id === currentSection.id)) {
        // Edit existing section
        setSections(sections.map(s => 
          s.id === currentSection.id ? currentSection : s
        ));
      } else {
        // Add new section
        setSections([...sections, currentSection]);
      }
      setOpenDialog(false);
      setCurrentSection(null);
      // TODO: Call backend API to save/update section
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Onboard Sections Management
      </Typography>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Button 
          variant="contained" 
          color="primary" 
          startIcon={<Add />}
          onClick={handleAddSection}
        >
          Add New Section
        </Button>
      </Box>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="onboard-sections">
          {(provided: DroppableProvided) => (
            <MuiGrid 
              container 
              spacing={3} 
              {...provided.droppableProps} 
              ref={provided.innerRef}
            >
              {sections.map((section, index) => (
                <Draggable 
                  key={section.id} 
                  draggableId={section.id} 
                  index={index}
                >
                  {(provided: DraggableProvided) => (
                    <MuiGrid 
                      component="div"
                      item 
                      xs={12} 
                      md={6} 
                      lg={4} 
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card 
                        sx={{ 
                          height: '100%', 
                          display: 'flex', 
                          flexDirection: 'column',
                          opacity: section.isActive ? 1 : 0.6
                        }}
                      >
                        <CardHeader
                          avatar={
                            <Avatar 
                              sx={{ 
                                bgcolor: section.isActive ? 'primary.main' : 'grey.500' 
                              }}
                            >
                              {section.icon || 'S'}
                            </Avatar>
                          }
                          title={section.title}
                          subheader={`Order: ${section.order}`}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography variant="body2" color="text.secondary">
                            {section.description}
                          </Typography>
                          <Box sx={{ mt: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            <Chip 
                              icon={<CategoryIcon />} 
                              label={section.category} 
                              size="small" 
                              color="secondary"
                            />
                            <Chip 
                              label={`${section.estimatedCompletionTime} mins`} 
                              size="small" 
                              color="info"
                            />
                          </Box>
                        </CardContent>
                        <CardActions>
                          <Button 
                            startIcon={<Edit />} 
                            onClick={() => handleEditSection(section)}
                          >
                            Edit
                          </Button>
                          <Button 
                            color="error" 
                            startIcon={<Delete />} 
                            onClick={() => handleDeleteSection(section.id)}
                          >
                            Delete
                          </Button>
                        </CardActions>
                      </Card>
                    </MuiGrid>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </MuiGrid>
          )}
        </Droppable>
      </DragDropContext>

      {/* Dialog for Adding/Editing Section */}
      <Dialog 
        open={openDialog} 
        onClose={() => setOpenDialog(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>
          {currentSection?.id ? 'Edit Section' : 'Add New Section'}
        </DialogTitle>
        <DialogContent>
          <MuiGrid container spacing={2}>
            <MuiGrid 
              component="div"
              item 
              xs={12} 
              md={6}
            >
              <TextField
                autoFocus
                margin="dense"
                label="Title"
                fullWidth
                value={currentSection?.title || ''}
                onChange={(e) => setCurrentSection(prev => 
                  prev ? {...prev, title: e.target.value} : null
                )}
              />
            </MuiGrid>
            <MuiGrid 
              component="div"
              item 
              xs={12} 
              md={6}
            >
              <FormControl fullWidth margin="dense">
                <InputLabel>Category</InputLabel>
                <Select
                  value={currentSection?.category || 'Getting Started'}
                  label="Category"
                  onChange={(e) => setCurrentSection(prev => 
                    prev ? {...prev, category: e.target.value} : null
                  )}
                >
                  {SECTION_CATEGORIES.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </MuiGrid>
            <MuiGrid 
              component="div"
              item 
              xs={12}
            >
              <TextField
                margin="dense"
                label="Description"
                fullWidth
                multiline
                rows={4}
                value={currentSection?.description || ''}
                onChange={(e) => setCurrentSection(prev => 
                  prev ? {...prev, description: e.target.value} : null
                )}
              />
            </MuiGrid>
            <MuiGrid 
              component="div"
              item 
              xs={12} 
              md={6}
            >
              <FormControl fullWidth margin="dense">
                <InputLabel>Icon</InputLabel>
                <Select
                  value={currentSection?.icon || ''}
                  label="Icon"
                  onChange={(e) => setCurrentSection(prev => 
                    prev ? {...prev, icon: e.target.value} : null
                  )}
                >
                  {ICON_OPTIONS.map((icon) => (
                    <MenuItem key={icon} value={icon}>
                      {icon}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </MuiGrid>
            <MuiGrid 
              component="div"
              item 
              xs={12} 
              md={6}
            >
              <TextField
                margin="dense"
                label="Estimated Completion Time (mins)"
                fullWidth
                type="number"
                value={currentSection?.estimatedCompletionTime || 5}
                onChange={(e) => setCurrentSection(prev => 
                  prev ? {...prev, estimatedCompletionTime: Number(e.target.value)} : null
                )}
              />
            </MuiGrid>
            <MuiGrid 
              component="div"
              item 
              xs={12}
            >
              <FormControlLabel
                control={
                  <Switch
                    checked={currentSection?.isActive || false}
                    onChange={(e) => setCurrentSection(prev => 
                      prev ? {...prev, isActive: e.target.checked} : null
                    )}
                  />
                }
                label="Active Section"
              />
            </MuiGrid>
          </MuiGrid>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button 
            onClick={handleSaveSection} 
            color="primary" 
            variant="contained"
          >
            Save Section
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OnboardSections; 