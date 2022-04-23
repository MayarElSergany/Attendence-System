import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Task = lazy(() => import("../pages/Task"));
const UserModule = lazy(() => import("../modules/UserModule"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Navbar = lazy(() => import("../components/Navbar"));

function App() {
	return (
		<div className="App">
			<Suspense fallback={<div>Loading.........</div>}>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="about" element={<About />} />
						<Route path="task" element={<Task />} />
						<Route path="users/*" element={<UserModule />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
