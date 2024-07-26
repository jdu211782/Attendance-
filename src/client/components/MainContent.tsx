import React from 'react';
import { Box, Typography, Button, Divider, Tabs, Tab } from '@mui/material';
import { format, intervalToDuration } from 'date-fns';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttendanceSummary from './AttendanceSummary';

interface MainContentProps {
  tabIndex: number;
  handleTabChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  attendanceSummary: {
    [key: string]: number;
  };
}

const MainContent: React.FC<MainContentProps> = ({ tabIndex, handleTabChange, attendanceSummary }) => {
  const [checkInTime, setCheckInTime] = React.useState<Date | null>(null);
  const [checkOutTime, setCheckOutTime] = React.useState<Date | null>(null);
  const [totalHours, setTotalHours] = React.useState<string>('--:--');
  const [message, setMessage] = React.useState<string | null>(null);

  const handleComeClick = () => {
    const now = new Date();
    setCheckInTime(now);
    setMessage(`Welcome! You checked in at ${format(now, 'HH:mm')}`);
    setCheckOutTime(null);
    setTotalHours('--:--');
  };

  const handleLeaveClick = () => {
    if (checkInTime) {
      const now = new Date();
      setCheckOutTime(now);
      setMessage(`Goodbye! You checked out at ${format(now, 'HH:mm')}`);
      const duration = intervalToDuration({ start: checkInTime, end: now });
      setTotalHours(`${duration.hours || 0}h ${duration.minutes || 0}m`);
    } else {
      setMessage('You need to check in first!');
    }
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'white', borderRadius: 4, boxShadow: 3, p: 3, overflow: 'hidden', textAlign: 'center' }}>
      <Tabs value={tabIndex} onChange={handleTabChange} centered sx={{ mb: 2 }}>
        <Tab icon={<AccessTimeIcon />} aria-label="time" />
        <Tab icon={<BarChartIcon />} aria-label="summary" />
      </Tabs>
      {tabIndex === 0 && (
        <>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#1c1f26' }}>
            {format(new Date(), 'HH:mm:ss')}
          </Typography>
          <Typography variant="h6" color="#666666" sx={{ fontSize: '0.70rem' }}>
            {format(new Date(), 'PPP - EEEE')}
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ color: '#1c1f26' }}>
                {checkInTime ? format(checkInTime, 'HH:mm') : '--:--'}
              </Typography>
              <Typography variant="body2" color="#666666" sx={{ mt: 1 }}>
                Check In
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: 1, borderColor: '#d6d6d6' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ color: '#1c1f26' }}>
                {checkOutTime ? format(checkOutTime, 'HH:mm') : '--:--'}
              </Typography>
              <Typography variant="body2" color="#666666" sx={{ mt: 1 }}>
                Check Out
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: 1, borderColor: '#d6d6d6' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ color: '#1c1f26' }}>
                {totalHours}
              </Typography>
              <Typography variant="body2" color="#666666" sx={{ mt: 1 }}>
                Total Hours
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button
              variant="contained"
              onClick={handleComeClick}
              sx={{
                borderRadius: 28,
                backgroundColor: '#1cbeca',
                '&:hover': {
                  backgroundColor: '#1a9bde',
                },
              }}
            >
              Come
            </Button>
            <Button
              variant="contained"
              onClick={handleLeaveClick}
              sx={{
                borderRadius: 28,
                backgroundColor: '#ff9500',
                '&:hover': {
                  backgroundColor: '#e88e00',
                },
              }}
            >
              Leave
            </Button>
          </Box>
          {message && (
            <Typography variant="body1" align="center" sx={{ mt: 2, color: '#1cbeca' }}>
              {message}
            </Typography>
          )}
        </>
      )}
      {tabIndex === 1 && <AttendanceSummary attendanceSummary={attendanceSummary} />}
    </Box>
  );
};

export default MainContent;