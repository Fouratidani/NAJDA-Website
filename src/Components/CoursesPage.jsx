import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Navbar from './Navbar';
const coursesData = [
  { id: 1, title: 'First Aid Basics', progress: 75 },
  { id: 2, title: 'CPR Training', progress: 50 },
  { id: 3, title: 'Emergency Response', progress: 20 },
  { id: 3, title: 'Emergency Response', progress: 20 },
  { id: 3, title: 'Emergency Response', progress: 20 },
  { id: 3, title: 'Emergency Response', progress: 20 },
  { id: 3, title: 'Emergency Response', progress: 20 },
  { id: 3, title: 'Emergency Response', progress: 20 },
  { id: 3, title: 'Emergency Response', progress: 20 },
  { id: 3, title: 'Emergency Response', progress: 20 },
  { id: 3, title: 'Emergency Response', progress: 20 },
  { id: 3, title: 'Emergency Response', progress: 20 },
];

const CoursesPage = () => {
  const [courses, setCourses] = useState(coursesData);

  const handleStartCourse = (courseId) => {
    console.log(`Starting course with ID: ${courseId}`);
    // Logic to start or access the course
  };

  return (
    <>
    <Navbar />
    <Box sx={{ p: 3 }} style={{backgroundColor:'#4e54c8'}}>
      
      <Grid container spacing={3}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {course.title}
                </Typography>
                <LinearProgress variant="determinate" value={course.progress} />
                <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                  Progress: {course.progress}%
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => handleStartCourse(course.id)}
                >
                  Start/Resume Course
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default CoursesPage;
