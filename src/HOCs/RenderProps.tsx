// Render Props Approces

//HOC ClickTrackingHOC
interface ClickTrackingProps {
  trackingInfo: string;
  children: React.ReactNode;
}

const WithClickTracking: React.FC<ClickTrackingProps> = (props) => {
  const handleClick = () => {
    console.log("Click tracked:", props.trackingInfo);
  };
  return <div onClick={handleClick}>{props.children}</div>;
};

interface ButtonProps {
  label: string;
}

// Original component
const Button: React.FC<ButtonProps> = (props) => {
  return <button>{props.label}</button>;
};

const HOC2 = () => {
  return (
    <div>
      <h1>Render Props Example</h1>
      <WithClickTracking trackingInfo="Button 1">
        <Button label="Click Me" />
      </WithClickTracking>
      <WithClickTracking trackingInfo="Button 2">
        <Button label="Click Me Too" />
      </WithClickTracking>
      <HOC3/>
    </div>
  );
};
export default HOC2;

interface withIconProps{
  children: React.ReactNode;
  className:string
}

const WithIconStyle: React.FC<withIconProps> = (props)=>{
  return(
    <div className={props.className}>
      {props.children}
    </div>
  ) 
}

interface socialMediaProps {
  src:string;
  href:string;
 
}
const SocialMediaIcon: React.FC <socialMediaProps> = (props) =>{
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
<img  className="w-10 h-10 p-1" src={props.src} alt ="icon"  />
    </a>
  )
  
}

export const HOC3: React.FC = () =>{
  return(
    <div className="flex flex-row justify-center">
      <WithIconStyle className="p-1">
        <SocialMediaIcon href="https://www.instagram.com/" src="/instagram.png"/>
      </WithIconStyle>
      <WithIconStyle className="p-1">
        <SocialMediaIcon href="https://www.linkedin.com/" src="/linkedin.png" />
      </WithIconStyle>
      <WithIconStyle className="p-1">
        <SocialMediaIcon href="https://www.youtube.com/" src="/youtube.png"  />
      </WithIconStyle>
      <WithIconStyle className="p-1">
        <SocialMediaIcon href="https://vitejs.dev/guide/" src="/vite.svg"/>
      </WithIconStyle>
    </div>
  )
}
