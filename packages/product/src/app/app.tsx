import styled from '@emotion/styled';
import { useSelector } from 'react-redux';

const StyledApp = styled.div`
  // Your style here
`;

export const App: React.FC = () => {
  const store = useSelector((state: unknown) => {
    console.log('Product', state);
    return state;
  });
  return (
    <StyledApp>
      <p>Product</p>
    </StyledApp>
  );
};

export default App;
