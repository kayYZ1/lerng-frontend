import { Link } from 'react-router-dom';

import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Grid from '@mui/joy/Grid';
import Sheet from '@mui/joy/Sheet';
import IconButton from '@mui/joy/IconButton';

import GitHub from '@mui/icons-material/GitHub';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Mail from '@mui/icons-material/Mail';
import { DefaultPath } from 'routes/paths';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: GitHub,
      href: 'https://github.com/kayYZ1/lerng-frontend',
      label: 'GitHub',
    },
    { icon: LinkedIn, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  return (
    <Sheet
      component="footer"
      sx={{
        backgroundColor: 'inherit',
        pt: 8,
        pb: 2,
      }}
    >
      <Grid container spacing={2} sx={{ margin: '0 auto', px: 2 }}>
        <Grid xs={12} sm={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography level="title-lg" sx={{ mb: 1 }}>
              LERNG
            </Typography>
            <Typography level="body-sm">
              Level-Up your skills with the specialized knowledge!
            </Typography>
          </Box>
        </Grid>
        <Grid xs={12} sm={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography level="title-sm">Quick Links</Typography>
            <Link to="aboutus">About Us</Link>
            <Link to="services">Services</Link>
            <Link to="contact">Contact</Link>
          </Box>
        </Grid>
        <Grid xs={12} sm={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography level="title-sm">Connect With Us</Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <IconButton
                  key={label}
                  variant="plain"
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid xs={12}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid',
              borderColor: 'divider',
              mt: 3,
              pt: 3,
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <Typography level="body-xs" textColor="text.tertiary">
              © {currentYear} LERNG. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link to={DefaultPath.POLICY}>Privacy Policy</Link>
              <Link to={DefaultPath.TOS}>Terms of Service</Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Sheet>
  );
}
