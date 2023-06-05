import styles from './App.module.scss';
import { AppRouter } from './router';
import './styles/index.scss';

export const App = () => {
  return (
    <div className={styles['app']}>
      <AppRouter />
    </div>
  );
}

