import { Route, Routes } from 'react-router-dom';

export interface ComponentRouterProps {
  path?: string;
}

export function ComponentRouter({ path }: ComponentRouterProps) {
  const RouterChild: React.FC<unknown> = () => {
    return <div>router component test</div>;
  };

  return (
    <Routes>
      <Route path={path} element={<RouterChild />} />
    </Routes>
  );
}

export default ComponentRouter;
