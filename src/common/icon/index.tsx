import React from 'react';
import styled from 'styled-components';

interface IconLayoutProps {
  ImageUrl: string;
  isVisible?: boolean;
  alt: string;
  className?: string;
  onClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function IconLayout(props: IconLayoutProps) {
  const { ImageUrl, isVisible, alt, onClick, className } = props;

  return (
    <>
      {isVisible && (
        <IconS
          src={ImageUrl}
          alt={alt}
          onClick={onClick}
          className={className}
        />
      )}
    </>
  );
}

const IconS = styled.img`
  width: 30px;
  height: 30px;
`;

export default IconLayout;
