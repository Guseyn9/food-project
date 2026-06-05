import React from "react"
import ContentLoader from "react-content-loader"

type Props = {
  className?: string;
}

const Skeleton = (props: any, {className}: Props) => (
  <ContentLoader 
    className={className}
    speed={2}
    width={300}
    height={400}
    viewBox="0 0 300 400"
    backgroundColor="#ffffff"
    foregroundColor="#e6e6e6"
    {...props}
  >
    {/* <circle cx="157" cy="126" r="112" /> 
    <rect x="25" y="249" rx="5" ry="5" width="206" height="26" /> 
    <rect x="25" y="288" rx="5" ry="5" width="117" height="27" /> 
    <rect x="25" y="335" rx="5" ry="5" width="143" height="50" /> */}
    <rect x="0" y="0" rx="23" ry="23" width="300" height="370" />
  </ContentLoader>
)

export default Skeleton