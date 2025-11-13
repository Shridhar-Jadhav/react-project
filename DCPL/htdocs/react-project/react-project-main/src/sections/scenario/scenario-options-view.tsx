import { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { useRouter } from 'src/routes/hooks';

const scenarios = [
  {
    id: 'product',
    icon: '📦',
    title: 'Product',
    description: 'Evaluate product innovation, design, and market fit',
    subScenarios: [
      { id: 1, path: '/evaluation' },
      { id: 2, path: '/evaluation' },
    ],
  },
  {
    id: 'technology',
    icon: '💡',
    title: 'Technology',
    description: 'Assess technological advancement and implementation',
    subScenarios: [
      { id: 1, path: '/evaluation' },
      { id: 2, path: '/evaluation' },
    ],
  },
  {
    id: 'policy',
    icon: '📋',
    title: 'Policy',
    description: 'Analyze policy innovation and governance impact',
    subScenarios: [
      { id: 1, path: '/policy-scenario-1' },
      { id: 2, path: '/policy-scenario-2' },
    ],
  },
  {
    id: 'practice',
    icon: '🔄',
    title: 'Practice',
    description: 'Review process innovation and best practices',
    subScenarios: [
      { id: 1, path: '/practice-scenario-1' },
      { id: 2, path: '/practice-scenario-2' },
    ],
  },
];

export function ScenarioOptionsView() {
  const router = useRouter();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleScenarioClick = (scenarioId: string, subScenarios: any[]) => {
    if (subScenarios.length === 0) {
      router.push(`/evaluation?type=${scenarioId}`);
    }
  };

  const handleSubScenarioClick = (path: string) => {
    router.push(path);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        py: 1,
        px: 1,
      }}
    >
      <Container maxWidth={false} sx={{ width: '100%', px: 0 }}>
        <Box
          sx={{
            textAlign: 'center',
            mb: 6,
            px: 2,
            animation: 'fadeIn 0.8s ease-in',
            '@keyframes fadeIn': {
              from: { opacity: 0, transform: 'translateY(-20px)' },
              to: { opacity: 1, transform: 'translateY(0)' },
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'white',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Select Innovation Domain
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.95)',
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontWeight: 300,
            }}
          >
            Choose the area you want to evaluate
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          {scenarios.map((scenario, index) => (
            <Grid item xs={12} sm={6} md={3} key={scenario.id}>
              <Card
                onMouseEnter={() => setHoveredCard(scenario.id)}
                onMouseLeave={() => setHoveredCard(null)}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 3,
                  border: '2px solid transparent',
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                  '@keyframes slideUp': {
                    from: { opacity: 0, transform: 'translateY(30px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                    borderColor: 'primary.main',
                    background: 'rgba(255, 255, 255, 1)',
                  },
                }}
                onClick={() => handleScenarioClick(scenario.id, scenario.subScenarios)}
              >
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <Box
                    sx={{
                      fontSize: '5rem',
                      mb: 3,
                      transition: 'transform 0.3s ease',
                      transform: hoveredCard === scenario.id ? 'scale(1.2) rotate(5deg)' : 'scale(1)',
                      display: 'inline-block',
                    }}
                  >
                    {scenario.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: 'primary.main',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {scenario.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      lineHeight: 1.6,
                      minHeight: '48px',
                    }}
                  >
                    {scenario.description}
                  </Typography>

                  {scenario.subScenarios.length > 0 && (
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 1.5,
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                      }}
                    >
                      {scenario.subScenarios.map((sub) => (
                        <Box
                          key={sub.id}
                          component="span"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSubScenarioClick(sub.path);
                          }}
                          sx={{
                            px: 2.5,
                            py: 1,
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            color: 'white',
                            borderRadius: 2,
                            fontSize: '0.875rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 20px rgba(102, 126, 234, 0.6)',
                            },
                          }}
                        >
                          Scenario {sub.id}
                        </Box>
                      ))}
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}