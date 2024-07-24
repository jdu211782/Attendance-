import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Tabs as BaseTabs, TabsList as BaseTabsList, TabPanel as BaseTabPanel, Tab as BaseTab } from '@mui/base';
import { tabClasses } from '@mui/base/Tab';
import { buttonClasses } from '@mui/base/Button';

interface TabsProps {
  onTabChange: (event: React.SyntheticEvent<any, Event> | null, newValue: string | number | null) => void;
}

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Tab = styled(BaseTab)`
  background-color: transparent; 
  color: #333;                  
  padding: 10px 15px;         
  border: none;                
  border: 1px solid #ccc; 
  border-radius: 5px;
  text-align: left;             
  transition: background-color 0.3s ease;
  margin-bottom: 10px;

  &:hover {
        background-color: ${grey[400]};
    }

    &:focus {
        color: #fff;
        outline: 3px solid ${grey[200]};
    }

    &.${buttonClasses.focusVisible} {
        background-color: #fff;
        color: ${grey[600]};
    }

    &.${tabClasses.disabled} {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &.${tabClasses.selected} {
        background-color: #fff;
        color: ${grey[600]};
    }
`;


const TabPanel = styled(BaseTabPanel)`
  padding: 16px;
`;


const Tabs = styled(BaseTabs)`
  /* Стили для Tabs */
`;

const TabsList = styled(BaseTabsList)`
  display: flex;
  flex-direction: column;
  gap: 0; 
`;


function UnstyledTabsVertical({ onTabChange }: TabsProps) {
  const [value, setValue] = useState<number | string>(0);

  const handleChange = (event: React.SyntheticEvent<any, Event> | null, newValue: string | number | null) => {
    setValue(newValue as number);
    onTabChange(event, newValue);
  };

  return (
    <Tabs value={value} orientation="vertical" onChange={handleChange}>
      <TabsList>
        <Tab value={0}>One</Tab>
        <Tab value={1}>Two</Tab>
      </TabsList>
      <TabPanel value={0}>
        {/* Содержимое первой вкладки */}
      </TabPanel>
      <TabPanel value={1}>
        {/* Содержимое второй вкладки */}
      </TabPanel>
    </Tabs>
  );
}

export default UnstyledTabsVertical;
