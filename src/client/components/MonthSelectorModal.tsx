// MonthSelectorModal.tsx

import React from 'react';
import { Box, Typography, IconButton, Modal, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface MonthSelectorModalProps {
  open: boolean;
  onClose: () => void;
  selectedMonth: number;
  onMonthChange: (event: SelectChangeEvent<number>) => void;
  selectedYear: number;
  onYearChange: (event: SelectChangeEvent<number>) => void;
}

const months = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];

const years = [2024, 2023, 2022, 2021]; // Добавьте нужные годы

const MonthSelectorModal: React.FC<MonthSelectorModalProps> = ({ open, onClose, selectedMonth, onMonthChange, selectedYear, onYearChange }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}
    >
      <Box
        sx={{
          width: '90%', // Ширина модального окна в процентах от ширины экрана
          maxWidth: 400, // Максимальная ширина
          height: '60%', // Высота модального окна
          bgcolor: 'background.paper',
          borderRadius: 2,
          p: 2,
          overflowY: 'auto',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: '#105f82'
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Select month and year
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Select
            value={selectedYear}
            onChange={onYearChange}
            fullWidth
            displayEmpty
          >
            {years.map(year => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
          {months.map((month, index) => (
            <Box
              key={index}
              sx={{
                p: 1,
                borderRadius: 1,
                bgcolor: '#f0f0f0',
                cursor: 'pointer',
                textAlign: 'left',
                '&:hover': {
                  bgcolor: '#e0e0e0'
                },
                backgroundColor: selectedMonth === index ? '#d0d0d0' : '#f0f0f0'
              }}
              onClick={() => onMonthChange({ target: { value: index } } as SelectChangeEvent<number>)}
            >
              {month}
            </Box>
          ))}
        </Box>
      </Box>
    </Modal>
  );
};

export default MonthSelectorModal;
