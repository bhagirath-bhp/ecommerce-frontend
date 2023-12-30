import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const deliverySteps = [
  {
    type: 'Order Placed',
    description: 'Your order has been placed successfully.',
    date: '12 Jan 2023',
  },
  {
    type: 'Processing',
    description: 'We are currently processing your order.',
    date: '13 Jan 2023',
  },
  {
    type: 'Shipped',
    description: 'Your order has been shipped and is on its way to you.',
    date: '14 Jan 2023',
  },
  {
    type: 'Delivered',
    description: 'Your order has been delivered. Enjoy your products!',
    date: '15 Jan 2023',
  },
];

const DeliveryStatusStepper = (props) => {
  const activeStep = deliverySteps.findIndex((step) => step.type === props.currentType);

  return (
    <Box sx={{ maxWidth: 600, py: "3rem"}}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {deliverySteps.map((step, index) => (
          <Step key={step.type}>
            <StepLabel>
              <Typography>
                {step.type}
                <Chip label={step.date} size="small" sx={{ ml: 1, borderRadius: '10px', backgroundColor: '#e0e0e0' }} />
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === deliverySteps.length && (
        <Paper square elevation={0} sx={{ p: 3, mt: 2 }}>
          <Typography>All steps completed - your order is delivered</Typography>
        </Paper>
      )}
    </Box>
  );
};

export default DeliveryStatusStepper;
