import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

import { useRouter } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export function ScenarioView() {
  const router = useRouter();

  const handleSelectScenario = () => {
    router.push('/scenario-options');
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          py: 5,
        }}
      >
        <Card
          sx={{
            width: '100%',
            boxShadow: 3,
          }}
        >
          <CardContent
            sx={{
              p: { xs: 3, sm: 5 },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: 3,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                Welcome to Scenario Builder
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: 'text.secondary',
                  maxWidth: 600,
                  lineHeight: 1.8,
                  fontSize: '1.1rem',
                }}
              >
                Create and explore different scenarios tailored to your needs. 
                Our interactive scenario builder helps you visualize outcomes, 
                make informed decisions, and plan ahead with confidence. 
                Select a scenario to get started on your journey.
              </Typography>

              <Button
                size="large"
                variant="contained"
                color="primary"
                onClick={handleSelectScenario}
                sx={{
                  mt: 2,
                  px: 5,
                  py: 1.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  borderRadius: 2,
                }}
              >
                Select Scenario
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}