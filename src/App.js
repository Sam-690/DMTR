import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Dashboard from "./scenes/dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Calendar from "./scenes/calendar";
import Bar from "./scenes/bar"
import Geography from "./scenes/geography"
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import { useState } from "react";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true)


  return ( 
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div clasName="app">
            <Sidebar isSidebar={isSidebar} /> 
            <main className="content">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/calendar" element={<Calendar />}/>
                <Route path="/bar" element={<Bar />} />
                <Route path="/geography" element={<Geography />} />
                <Route path="/line" element={<Line />} />
                <Route path="/pie" element={<Pie />} />
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
