import {
	Route,
	Routes,
	useLocation,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { redishTheme } from './components/Theme/themes';
import GlobalStyle from './globalStyles';

//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import GoalPage from './components/GoalPage';
import ProjectPage from './components/ProjectPage';
import MySkillsPage from './components/MySkillsPage';
import { AnimatePresence } from "framer-motion";

function App() {
	const location = useLocation();
	return (
		<>
			<GlobalStyle />

      <ThemeProvider theme={redishTheme}>
        
				<AnimatePresence exitBeforeEnter>
					<Routes location={location} key={location.pathname}>
						<Route path='/' element={<Main />}></Route>
						<Route
							path='/about'
							element={<AboutPage />}
						></Route>
						<Route
							path='/goal'
							element={<GoalPage />}
						></Route>
						<Route
							path='/projects'
							element={<ProjectPage />}
						></Route>
						<Route
							path='/myskills'
							element={<MySkillsPage />}
						></Route>
					</Routes>
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
}

export default App;
