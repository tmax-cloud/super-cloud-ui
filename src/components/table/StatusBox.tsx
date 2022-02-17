import React from 'react';
import { Box } from '@mui/material';

const StatusBox = ({ message }: StatusBoxProps) => {
  if (message) {
    return <ErrorBox message={message} />;
  }
  return <EmptyBox />; // 현재까지는 StatusBox가 Error랑 Empty 밖에 없음.
};

const ErrorBox = ({ message }: ErrorBannerProps) => {
  return <Box data-testid="error-box">{message}</Box>;
};

const EmptyBox = () => <Box data-testid="empty-box">해당 리소스를 찾을 수 없습니다.</Box>;

export default StatusBox;

interface ErrorBannerProps {
  message: string;
}

interface StatusBoxProps {
  message: string;
}
