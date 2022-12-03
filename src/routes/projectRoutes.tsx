import {
    BrowserRouter,
    Link,
    Route,
    Routes
  } from "react-router-dom";
import { GraphicsCardDetail } from "../components/GraphicsCardDetail";
import { GraphicsCardListContainer } from "../components/GraphicsCardListContainer";
  
  
const ProjectRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<GraphicsCardListContainer />} />
                <Route path='/details/:idGraphic' element={<GraphicsCardDetail />} />
            </Routes>
        </BrowserRouter>
    )
}
  
export default ProjectRoutes;