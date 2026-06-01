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
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [pomodoroOpen, setPomodoroOpen] = useState(true);
  const [theatreMode, setTheatreMode] = useState(false);
  const userEmail = "demo@local";

  useEffect(() => {
    setCourses(coursesData);
    setCurrent(coursesData[0]?.videos[0]);

    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const res = await fetch("http://localhost:5000/progress");

      if (!res.ok) {
        throw new Error("Failed to fetch progress");
      }

      const data = await res.json();
      setProgressMap(data);
    } catch (err) {
      console.error("Failed to load progress:", err);
    }
  };

  useEffect(() => {
    if (!current) return;

    if (progressMap[current.id]) {
      setProgress(progressMap[current.id]);
    } else {
      setProgress({ done: 0, revised: 0 });
    }
  }, [current, progressMap]);

  const toggle = async (field) => {
    if (!current) return;

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

    try {
      const res = await fetch("http://localhost:5000/progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          videoId: current.id,
          done: updated.done,
          revised: updated.revised
        })
      });

      if (!res.ok) {
        throw new Error("Failed to save progress");
      }
    } catch (err) {
      console.error("Failed to save progress:", err);
    }
  };

  const handleReset = async () => {
    try {
      const res = await fetch("http://localhost:5000/progress", {
        method: "DELETE"
      });

      if (!res.ok) {
        throw new Error("Failed to reset progress");
      }

      setProgressMap({});
      setProgress({ done: 0, revised: 0 });
    } catch (err) {
      console.error("Failed to reset progress:", err);
    }
  };

  return (
    <div className="app-shell">
      {sidebarOpen && !theatreMode && (
        <Sidebar
          courses={courses}
          setCurrent={setCurrent}
          current={current}
          progressMap={progressMap}
          userEmail={userEmail}
          onLogout={handleReset}
        />
      )}

      <div
        className={`main-area ${theatreMode ? "theatre-mode" : ""
          }`}
      >
        <Player
          current={current}
          progress={progress}
          toggle={toggle}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          pomodoroOpen={pomodoroOpen}
          setPomodoroOpen={setPomodoroOpen}
          theatreMode={theatreMode}
          setTheatreMode={setTheatreMode}
        />

        {pomodoroOpen && !theatreMode && (
          <Pomodoro />
        )}
      </div>
    </div>
  );
}

export default App;