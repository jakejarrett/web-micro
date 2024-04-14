import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const StyledApp = styled.div`
  // Your style here
`;

export const App: React.FC = () => {
  const store = useSelector((state: { products: unknown[] | undefined }) => {
    return state.products;
  });

  useEffect(() => {
    console.log('Store', store);
  }, [store]);
  return (
    <StyledApp>
      <p>Product</p>
    </StyledApp>
  );
};

export default App;
