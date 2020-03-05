import React from "react"
import ContentLoader, { Rect, Circle } from "react-content-loader/native";

export default MyLoader = () => (
  <ContentLoader 
    speed={1}
    width={480}
    height={475}
    viewBox="0 0 480 475"
    backgroundColor="#f3f3f3"
    foregroundColor="#ccc"
  >
    <Rect x="5" y="41" rx="5" ry="5" width="128" height="190" /> 
    <Rect x="148" y="41" rx="5" ry="5" width="128" height="190" /> 
    <Rect x="291" y="41" rx="5" ry="5" width="128" height="190" /> 
    <Rect x="5" y="241" rx="5" ry="5" width="128" height="190" /> 
    <Rect x="148" y="241" rx="5" ry="5" width="128" height="190" /> 
    <Rect x="291" y="241" rx="5" ry="5" width="128" height="190" />
  </ContentLoader>
)
