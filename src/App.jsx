import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Pomodoro from "./components/Pomodoro";
import coursesData from "./courses";

function App() {
  const [courses, setCourses] = useState([]);
  const [current, setCurrent] = useState(null);
  const [progress, setProgress] = useState({ done: 0, revised: 0 });
  const [progressMap, setProgressMap] = useState({});

  // Dummy user (for UI only)
  const userEmail = "demo@local";

  // ✅ Load courses + progress from localStorage
  useEffect(() => {
    setCourses(coursesData);
    setCurrent(coursesData[0]?.videos[0]);

    const stored = JSON.parse(localStorage.getItem("progressMap")) || {};
    setProgressMap(stored);
  }, []);

  // ✅ Update current video progress from localStorage map
  useEffect(() => {
    if (!current) return;

    if (progressMap[current.id]) {
      setProgress(progressMap[current.id]);
    } else {
      setProgress({ done: 0, revised: 0 });
    }
  }, [current?.id, progressMap]);

  // ✅ Toggle progress + save to localStorage
  const toggle = (field) => {
    const updated = {
      ...progress,
      [field]: progress[field] ? 0 : 1
    };

    const newMap = {
      ...progressMap,
      [current.id]: updated
    };

    setProgress(updated);
    setProgressMap(newMap);

    localStorage.setItem("progressMap", JSON.stringify(newMap));
  };

  // ✅ Reset progress (used as logout replacement)
  const handleReset = () => {
    localStorage.removeItem("progressMap");
    setProgressMap({});
    setProgress({ done: 0, revised: 0 });
  };

  return (
    <div className="app-shell">
      <Sidebar
        courses={courses}
        setCurrent={setCurrent}
        current={current}
        progressMap={progressMap}
        userEmail={userEmail}
        onLogout={handleReset} // reuse logout button as reset
      />
      <div className="main-area">
        <Player current={current} progress={progress} toggle={toggle} />
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;